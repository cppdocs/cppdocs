---
title: "std::atomic<T>::fetch_sub"
source_path: "cpp/atomic/atomic/fetch_sub"
category: "atomic"
since: "C++11"
---

Atomically replaces the current value with the result of arithmetic subtraction of the value and arg. That is, it performs atomic post-decrement. The operation is read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
member only of atomic<Integral ﻿> specializationsand atomic<Floating ﻿> specializations(since C++20)
```

```cpp
T fetch_sub( T arg, std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

```cpp
T fetch_sub( T arg, std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

```cpp
member only of atomic<T*> partial specialization
```

```cpp
T* fetch_sub( std::ptrdiff_t arg,
std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

```cpp
T* fetch_sub( std::ptrdiff_t arg,
std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

## Parameters
- `arg`: the other argument of arithmetic subtraction
- `order`: memory order constraints to enforce

## Return value
The value immediately preceding the effects of this function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *this.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | arithmetic permitted on pointers to (possibly cv-qualified) void or function | made ill-formed |

## See also
- [atomic_fetch_subatomic_fetch_sub_explicit](/cpp/atomic/atomic_fetch_sub/)
- [operator++operator++(int)operator--operator--(int)](/cpp/atomic/atomic/operator_arith/)
