---
title: "std::atomic<T>::load"
source_path: "cpp/atomic/atomic/load"
category: "atomic"
since: "C++11"
---

Atomically loads and returns the current value of the atomic variable. Memory is affected according to the value of order.

## Declarations
```cpp
T load( std::memory_order order
= std::memory_order_seq_cst ) const noexcept;
```
_(since C++11)_

```cpp
T load( std::memory_order order
= std::memory_order_seq_cst ) const volatile noexcept;
```
_(since C++11)_

## Parameters
- `order`: memory order constraints to enforce

## Return value
The current value of the atomic variable.

## See also
- [operator T](/cpp/atomic/atomic/operator_t/)
- [atomic_loadatomic_load_explicit](/cpp/atomic/atomic_load/)
