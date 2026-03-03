---
title: "std::atomic_ref<T>::store"
source_path: "cpp/atomic/atomic_ref/store"
category: "atomic"
---

Atomically replaces the current value of the referenced object with desired. Memory is affected according to the value of order.

## Declarations
```cpp
void store( value_type desired,
std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(constexpr since C++26)_

## Parameters
- `desired`: the value to store into the referenced object
- `order`: memory order constraints to enforce

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | store was meaningless for const T | constrained to accept only non-const T |

## See also
- [operator=](/cpp/atomic/atomic_ref/operator/)
