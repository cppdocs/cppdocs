---
title: "std::atomic_ref<T>::load"
source_path: "cpp/atomic/atomic_ref/load"
category: "atomic"
---

Atomically loads and returns the current value of the referenced object. Memory is affected according to the value of order.

## Declarations
```cpp
value_type load( std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(constexpr since C++26)_

## Parameters
- `order`: memory order constraints to enforce

## Return value
The current value of the referenced object.

## See also
- [operator value_type](/cpp/atomic/atomic_ref/operator_t/)
