---
title: "std::atomic_ref<T>::fetch_or"
source_path: "cpp/atomic/atomic_ref/fetch_or"
category: "atomic"
since: "C++20"
---

Atomically replaces the current value of the referenced object with the result of bitwise OR of the value and arg. This operation is a read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
Provided only when T is an integral type other than cv bool
```

```cpp
value_type fetch_or( value_type arg,
std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(since C++20)_

## Parameters
- `arg`: the other argument of bitwise OR
- `order`: memory order constraints to enforce

## Return value
The value of the referenced object, immediately preceding the effects of this function.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | fetch_or was meaningless for const T | constrained to accept only non-const T |
