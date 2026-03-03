---
title: "std::atomic_compare_exchange_weak, std::atomic_compare_exchange_strong, std::atomic_compare_exchange_weak_explicit, std::atomic_compare_exchange_strong_explicit"
source_path: "cpp/atomic/atomic_compare_exchange"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Atomically compares the [object representation](/cpp/language/objects/)(until C++20)[value representation](/cpp/language/objects/)(since C++20) of the object pointed to by obj with that of the object pointed to by expected, and if those are bitwise-equal, replaces the former with desired (performs read-modify-write operation). Otherwise, loads the actual value pointed to by obj into *expected (performs load operation).

## Declarations
```cpp
template< class T >
bool atomic_compare_exchange_weak
( std::atomic<T>* obj, typename std::atomic<T>::value_type* expected,
typename std::atomic<T>::value_type desired ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
bool atomic_compare_exchange_weak
( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type* expected,
typename std::atomic<T>::value_type desired ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
bool atomic_compare_exchange_strong
( std::atomic<T>* obj, typename std::atomic<T>::value_type* expected,
typename std::atomic<T>::value_type desired ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
bool atomic_compare_exchange_strong
( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type* expected,
typename std::atomic<T>::value_type desired ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
bool atomic_compare_exchange_weak_explicit
( std::atomic<T>* obj, typename std::atomic<T>::value_type* expected,
typename std::atomic<T>::value_type desired,
std::memory_order success, std::memory_order failure ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
bool atomic_compare_exchange_weak_explicit
( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type* expected,
typename std::atomic<T>::value_type desired,
std::memory_order success, std::memory_order failure ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
bool atomic_compare_exchange_strong_explicit
( std::atomic<T>* obj, typename std::atomic<T>::value_type* expected,
typename std::atomic<T>::value_type desired,
std::memory_order success, std::memory_order failure ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
bool atomic_compare_exchange_strong_explicit
( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type* expected,
typename std::atomic<T>::value_type desired,
std::memory_order success, std::memory_order failure ) noexcept;
```
_(since C++11)_

## Parameters
- `obj`: pointer to the atomic object to test and modify
- `expected`: pointer to the value expected to be found in the atomic object
- `desired`: the value to store in the atomic object if it is as expected
- `success`: the memory synchronization ordering for the read-modify-write operation if the comparison succeeds
- `failure`: the memory synchronization ordering for the load operation if the comparison fails

## Return value
The result of the comparison: true if *obj was equal to *expected, false otherwise.

## Notes
std::atomic_compare_exchange_weak and std::atomic_compare_exchange_weak_explicit (the weak versions) are allowed to fail spuriously, that is, act as if *obj != *expected even if they are equal. When a compare-and-exchange is in a loop, they will yield better performance on some platforms.

When a weak compare-and-exchange would require a loop and a strong one would not, the strong one is preferable unless the object representation of T may include padding bits,(until C++20) trap bits, or offers multiple object representations for the same value (e.g. floating-point NaN). In those cases, weak compare-and-exchange typically works because it quickly converges on some stable object representation.

For a union with bits that participate in the value representations of some members but not the others, compare-and-exchange might always fail because such padding bits have indeterminate values when they do not participate in the value representation of the active member.

Padding bits that never participate in an object's value representation are ignored.

## Example
```cpp
#include <atomic>
 
template<class T>
struct node
{
    T data;
    node* next;
    node(const T& data) : data(data), next(nullptr) {}
};
 
template<class T>
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
        while (!std::atomic_compare_exchange_weak_explicit(
                   &head, &new_node->next, new_node,
                   std::memory_order_release, std::memory_order_relaxed))
            ; // the body of the loop is empty
// note: the above loop is not thread-safe in at least
// GCC prior to 4.8.3 (bug 60272), clang prior to 2014-05-05 (bug 18899)
// MSVC prior to 2014-03-17 (bug 819819). See member function version for workaround
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

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | exact type match was required becauseT was deduced from multiple arguments | T is only deducedfrom obj |

## See also
- [compare_exchange_weakcompare_exchange_strong](/cpp/atomic/atomic/compare_exchange/)
- [atomic_exchangeatomic_exchange_explicit](/cpp/atomic/atomic_exchange/)
- [std::atomic_compare_exchange_weak(std::shared_ptr)
std::atomic_compare_exchange_strong(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
- [C documentation](/c/atomic/atomic_compare_exchange/)
