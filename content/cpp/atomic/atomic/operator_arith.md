---
title: "std::atomic<T>::operator++,++(int),--,--(int)"
source_path: "cpp/atomic/atomic/operator"
category: "atomic"
since: "C++11"
---

Atomically increments or decrements the current value. The operation is read-modify-write operation.

## Declarations
```cpp
member only of atomic<Integral ﻿> specializations
```

```cpp
T operator++() noexcept;
```
_(since C++11)_

```cpp
T operator++() volatile noexcept;
```
_(since C++11)_

```cpp
T operator++( int ) noexcept;
```
_(since C++11)_

```cpp
T operator++( int ) volatile noexcept;
```
_(since C++11)_

```cpp
T operator--() noexcept;
```
_(since C++11)_

```cpp
T operator--() volatile noexcept;
```
_(since C++11)_

```cpp
T operator--( int ) noexcept;
```
_(since C++11)_

```cpp
T operator--( int ) volatile noexcept;
```
_(since C++11)_

```cpp
member only of atomic<T*> partial specialization
```

```cpp
T* operator++() noexcept;
```
_(since C++11)_

```cpp
T* operator++() volatile noexcept;
```
_(since C++11)_

```cpp
T* operator++( int ) noexcept;
```
_(since C++11)_

```cpp
T* operator++( int ) volatile noexcept;
```
_(since C++11)_

```cpp
T* operator--() noexcept;
```
_(since C++11)_

```cpp
T* operator--() volatile noexcept;
```
_(since C++11)_

```cpp
T* operator--( int ) noexcept;
```
_(since C++11)_

```cpp
T* operator--( int ) volatile noexcept;
```
_(since C++11)_

## Return value
operator++() and operator--() return the value of the atomic variable after the modification. Formally, the result of incrementing/decrementing the value immediately preceding the effects of this function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *this.

## Notes
Unlike most pre-increment and pre-decrement operators, the pre-increment and pre-decrement operators for atomic types do not return a reference to the modified object. They return a copy of the stored value instead.

## Example
```cpp
#include <atomic>
#include <chrono>
#include <iomanip>
#include <iostream>
#include <mutex>
#include <random>
#include <string>
#include <thread>
 
std::atomic<int> atomic_count{0};
 
std::mutex cout_mutex;
int completed_writes{0};
 
constexpr int global_max_count{72};
constexpr int writes_per_line{8};
constexpr int max_delay{100};
 
template<int Max>
int random_value()
{
    static std::uniform_int_distribution<int> distr{1, Max};
    static std::random_device engine;
    static std::mt19937 noise{engine()};
    static std::mutex rand_mutex;
    std::lock_guard lock{rand_mutex};
    return distr(noise);
}
 
int main()
{
    auto work = [](const std::string id)
    {
        for (int count{}; (count = ++atomic_count) <= global_max_count;)
        {
            std::this_thread::sleep_for(
                std::chrono::milliseconds(random_value<max_delay>()));
 
            // print thread `id` and `count` value
            {
                std::lock_guard lock{cout_mutex};
 
                const bool new_line = ++completed_writes % writes_per_line == 0;
 
                std::cout << id << std::setw(3) << count << "  "
                          << (new_line ? "\n" : "") << std::flush;
            }
        }
    };
 
    std::jthread j1(work, "░"), j2(work, "▒"), j3(work, "▓"), j4(work, "█");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | arithmetic permitted on pointers to (possibly cv-qualified) void or function | made ill-formed |

## See also
- [fetch_add](/cpp/atomic/atomic/fetch_add/)
- [fetch_sub](/cpp/atomic/atomic/fetch_sub/)
- [operator+=operator-=](/cpp/atomic/atomic/operator_arith2/)
- [operator&=operator|=operator^=](/cpp/atomic/atomic/operator_arith3/)
