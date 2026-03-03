---
title: "std::atomic<T>::fetch_add"
source_path: "cpp/atomic/atomic/fetch_add"
category: "atomic"
since: "C++11"
---

Atomically replaces the current value with the result of arithmetic addition of the value and arg. That is, it performs atomic post-increment. The operation is a read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
member only of atomic<Integral ﻿> specializationsand atomic<Floating ﻿> specializations(since C++20)
```

```cpp
T fetch_add( T arg, std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

```cpp
T fetch_add( T arg, std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

```cpp
member only of atomic<T*> partial specialization
```

```cpp
T* fetch_add( std::ptrdiff_t arg,
std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

```cpp
T* fetch_add( std::ptrdiff_t arg,
std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

## Parameters
- `arg`: the other argument of arithmetic addition
- `order`: memory order constraints to enforce

## Return value
The value immediately preceding the effects of this function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *this.

## Example
```cpp
#include <array>
#include <atomic>
#include <iostream>
#include <thread>
 
std::atomic<long long> data{10};
std::array<long long, 5> return_values{};
 
void do_work(int thread_num)
{
    long long val = data.fetch_add(1, std::memory_order_relaxed);
    return_values[thread_num] = val;
}
 
int main()
{
    {
        std::jthread th0{do_work, 0};
        std::jthread th1{do_work, 1};
        std::jthread th2{do_work, 2};
        std::jthread th3{do_work, 3};
        std::jthread th4{do_work, 4};
    }
 
    std::cout << "Result : " << data << '\n';
 
    for (long long val : return_values)
        std::cout << "Seen return value : " << val << std::endl;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | arithmetic permitted on pointers to (possibly cv-qualified) void or function | made ill-formed |

## See also
- [atomic_fetch_addatomic_fetch_add_explicit](/cpp/atomic/atomic_fetch_add/)
- [operator++operator++(int)operator--operator--(int)](/cpp/atomic/atomic/operator_arith/)
