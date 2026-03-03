---
title: "std::atomic<T>::fetch_min"
source_path: "cpp/atomic/atomic/fetch_min"
category: "atomic"
since: "C++26"
---

Atomically replaces the current value with the result of [std::min](/cpp/algorithm/min/) of the value and arg. That is, it performs atomic minimum operation. The operation is a read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
member only of atomic<Integral ﻿> specializations
```

```cpp
T fetch_min( T arg, std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++26)_

```cpp
T fetch_min( T arg, std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++26)_

```cpp
member only of atomic<T*> partial specialization
```

```cpp
T* fetch_min( T* arg, std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++26)_

```cpp
T* fetch_min( T* arg, std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++26)_

## Parameters
- `arg`: the other argument of std::min
- `order`: memory order constraints to enforce

## Return value
The value immediately preceding the effects of this function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *this.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_atomic_min_max
202403L
(C++26)
Atomic minimum/maximum

## Example
This section is incompleteReason: no example
