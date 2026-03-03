---
title: "std::atomic_flag_test_and_set, std::atomic_flag_test_and_set_explicit"
source_path: "cpp/atomic/atomic_flag_test_and_set"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Atomically changes the state of a [std::atomic_flag](/cpp/atomic/atomic_flag/) pointed to by obj to set (true) and returns the value it held before.

## Declarations
```cpp
bool atomic_flag_test_and_set( volatile std::atomic_flag* obj ) noexcept;
```
_(since C++11)_

```cpp
bool atomic_flag_test_and_set( std::atomic_flag* obj ) noexcept;
```
_(since C++11)_

```cpp
bool atomic_flag_test_and_set_explicit( volatile std::atomic_flag* obj,
std::memory_order order ) noexcept;
```
_(since C++11)_

```cpp
bool atomic_flag_test_and_set_explicit( std::atomic_flag* obj,
std::memory_order order ) noexcept;
```
_(since C++11)_

## Parameters
- `obj`: pointer to std::atomic_flag to access
- `order`: the memory synchronization order

## Return value
The value previously held by the flag pointed to by obj.

## Notes
std::atomic_flag_test_and_set and std::atomic_flag_test_and_set_explicit can be implemented as obj->test_and_set() and obj->test_and_set(order) respectively.

## Example
```cpp
#include <atomic>
#include <iostream>
#include <thread>
#include <vector>
 
std::atomic_flag lock = ATOMIC_FLAG_INIT;
 
void f(int n)
{
    for (int cnt = 0; cnt < 100; ++cnt)
    {
        while (std::atomic_flag_test_and_set_explicit(&lock, std::memory_order_acquire))
            ; // spin until the lock is acquired
        std::cout << "Output from thread " << n << '\n';
        std::atomic_flag_clear_explicit(&lock, std::memory_order_release);
    }
}
 
int main()
{
    std::vector<std::thread> v;
    for (int n = 0; n < 10; ++n)
        v.emplace_back(f, n);
    for (auto& t : v)
        t.join();
}
```

## See also
- [atomic_flag](/cpp/atomic/atomic_flag/)
- [atomic_flag_clearatomic_flag_clear_explicit](/cpp/atomic/atomic_flag_clear/)
- [memory_order](/cpp/atomic/memory_order/)
- [C documentation](/c/atomic/atomic_flag_test_and_set/)
