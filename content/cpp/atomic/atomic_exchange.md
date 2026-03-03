---
title: "std::atomic_exchange, std::atomic_exchange_explicit"
source_path: "cpp/atomic/atomic_exchange"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

1,2) Atomically replaces the value pointed to by obj with the value of desired and returns the value obj held previously, as if by obj->exchange(desired).

## Declarations
```cpp
template< class T >
T atomic_exchange( std::atomic<T>* obj,
typename std::atomic<T>::value_type desired ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_exchange( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type desired ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_exchange_explicit( std::atomic<T>* obj,
typename std::atomic<T>::value_type desired,
std::memory_order order ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_exchange_explicit( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type desired,
std::memory_order order ) noexcept;
```
_(since C++11)_

## Parameters
- `obj`: pointer to the atomic object to modify
- `desired`: the value to store in the atomic object
- `order`: the memory synchronization ordering

## Return value
The value held previously by the atomic object pointed to by obj.

## Example
```cpp
#include <atomic>
#include <iostream>
#include <thread>
#include <vector>
 
std::atomic<bool> lock(false); // holds true when locked
                               // holds false when unlocked
 
int new_line{1}; // the access is synchronized via atomic lock variable
 
void f(int n)
{
    for (int cnt = 0; cnt < 100; ++cnt)
    {
        while (std::atomic_exchange_explicit(&lock, true, std::memory_order_acquire))
            ; // spin until acquired
        std::cout << n << (new_line++ % 80 ? "" : "\n");
        std::atomic_store_explicit(&lock, false, std::memory_order_release);
    }
}
 
int main()
{
    std::vector<std::thread> v;
    for (int n = 0; n < 8; ++n)
        v.emplace_back(f, n);
    for (auto& t : v)
        t.join();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | exact type match was required becauseT was deduced from multiple arguments | T is only deducedfrom obj |

## See also
- [exchange](/cpp/atomic/atomic/exchange/)
- [atomic_compare_exchange_weakatomic_compare_exchange_weak_explicitatomic_compare_exchange_strongatomic_compare_exchange_strong_explicit](/cpp/atomic/atomic_compare_exchange/)
- [std::atomic_exchange(std::shared_ptr)
std::atomic_exchange_explicit(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
- [std::shared_ptr](/cpp/memory/shared_ptr/)
- [C documentation](/c/atomic/atomic_exchange/)
