---
title: "std::atomic_ref<T>::exchange"
source_path: "cpp/atomic/atomic_ref/exchange"
category: "atomic"
---

Atomically replaces the value of the referenced object with desired. The operation is a read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
value_type exchange( value_type desired,
std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(constexpr since C++26)_

## Parameters
- `desired`: value to assign
- `order`: memory order constraints to enforce

## Return value
The value of the referenced object before the call.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | exchange was meaningless for const T | constrained to accept only non-const T |
