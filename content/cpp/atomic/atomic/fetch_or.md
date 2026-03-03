---
title: "std::atomic<T>::fetch_or"
source_path: "cpp/atomic/atomic/fetch_or"
category: "atomic"
since: "C++11"
---

Atomically replaces the current value with the result of bitwise OR of the value and arg. The operation is read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
member only of atomic<Integral ﻿> specializations
```

```cpp
T fetch_or( T arg, std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

```cpp
T fetch_or( T arg, std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

## Parameters
- `arg`: the other argument of bitwise OR
- `order`: memory order constraints to enforce

## Return value
The value immediately preceding the effects of this function in the [modification order](/cpp/atomic/memory_order/) of *this.

## See also
- [atomic_fetch_oratomic_fetch_or_explicit](/cpp/atomic/atomic_fetch_or/)
