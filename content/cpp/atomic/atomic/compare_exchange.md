---
title: "std::atomic<T>::compare_exchange_weak, std::atomic<T>::compare_exchange_strong"
source_path: "cpp/atomic/atomic/compare_exchange"
category: "atomic"
since: "C++11"
---

Atomically compares the [object representation](/cpp/language/objects/)(until C++20)[value representation](/cpp/language/objects/)(since C++20) of *this with that of expected. If those are bitwise-equal, replaces the former with desired (performs read-modify-write operation). Otherwise, loads the actual value stored in *this into expected (performs load operation).

## Declarations
```cpp
bool compare_exchange_weak( T& expected, T desired,
std::memory_order success,
std::memory_order failure ) noexcept;
```
_(since C++11)_

```cpp
bool compare_exchange_weak( T& expected, T desired,
std::memory_order success,
std::memory_order failure ) volatile noexcept;
```
_(since C++11)_

```cpp
bool compare_exchange_weak( T& expected, T desired,
std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

```cpp
bool compare_exchange_weak( T& expected, T desired,
std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

```cpp
bool compare_exchange_strong( T& expected, T desired,
std::memory_order success,
std::memory_order failure ) noexcept;
```
_(since C++11)_

```cpp
bool compare_exchange_strong( T& expected, T desired,
std::memory_order success,
std::memory_order failure ) volatile noexcept;
```
_(since C++11)_

```cpp
bool compare_exchange_strong( T& expected, T desired,
std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

```cpp
bool compare_exchange_strong
( T& expected, T desired,
std::memory_order order = std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

## Parameters
- `expected`: reference to the value expected to be found in the atomic object
- `desired`: the value to store in the atomic object if it is as expected
- `success`: the memory synchronization ordering for the read-modify-write operation if the comparison succeeds
- `failure`: the memory synchronization ordering for the load operation if the comparison fails
- `order`: the memory synchronization ordering for both operations

## Return value
true if the underlying atomic value was successfully changed, false otherwise.

## Notes
The comparison and copying are bitwise (similar to [std::memcmp](/cpp/string/byte/memcmp/) and [std::memcpy](/cpp/string/byte/memcpy/)); no constructor, assignment operator, or comparison operator are used.

compare_exchange_weak is allowed to fail spuriously, that is, acts as if *this != expected even if they are equal. When a compare-and-exchange is in a loop, compare_exchange_weak will yield better performance on some platforms.

When compare_exchange_weak would require a loop and compare_exchange_strong would not, compare_exchange_strong is preferable unless the object representation of T may include padding bits,(until C++20) trap bits, or offers multiple object representations for the same value (e.g. floating-point NaN). In those cases, compare_exchange_weak typically works because it quickly converges on some stable object representation.

For a union with bits that participate in the value representations of some members but not the others, compare-and-exchange might always fail because such padding bits have indeterminate values when they do not participate in the value representation of the active member.

Padding bits that never participate in an object's value representation are ignored.

## Example
```cpp
#include <atomic>
 
template<typename T>
struct node
{
    T data;
    node* next;
    node(const T& data) : data(data), next(nullptr) {}
};
 
template<typename T>
class stack
{
    std::atomic<node<T>*> head;
public:
    void push(const T& data)
    {
        node<T>* new_node = new node<T>(data);
 
        // put the current value of head into new_node->next
        new_node->next = head.load(std::memory_order_relaxed);
 
        // now make new_node the new head, but if the head
        // is no longer what's stored in new_node->next
        // (some other thread must have inserted a node just now)
        // then put that new head into new_node->next and try again
        while (!head.compare_exchange_weak(new_node->next, new_node,
                                           std::memory_order_release,
                                           std::memory_order_relaxed))
            ; // the body of the loop is empty
 
// Note: the above use is not thread-safe in at least 
// GCC prior to 4.8.3 (bug 60272), clang prior to 2014-05-05 (bug 18899)
// MSVC prior to 2014-03-17 (bug 819819). The following is a workaround:
//      node<T>* old_head = head.load(std::memory_order_relaxed);
//      do
//      {
//          new_node->next = old_head;
//      }
//      while (!head.compare_exchange_weak(old_head, new_node,
//                                         std::memory_order_release,
//                                         std::memory_order_relaxed));
    }
};
 
int main()
{
    stack<int> s;
    s.push(1);
    s.push(2);
    s.push(3);
}
```

## See also
- [atomic_compare_exchange_weakatomic_compare_exchange_weak_explicitatomic_compare_exchange_strongatomic_compare_exchange_strong_explicit](/cpp/atomic/atomic_compare_exchange/)
