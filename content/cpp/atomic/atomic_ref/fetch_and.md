---
title: "std::atomic_ref<T>::fetch_and"
source_path: "cpp/atomic/atomic_ref/fetch_and"
category: "atomic"
since: "C++20"
---

Atomically replaces the current value of the referenced object with the result of bitwise AND of the value and arg. This operation is a read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
Provided only when T is an integral type other than cv bool
```

```cpp
value_type fetch_and( value_type arg,
std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(since C++20)_

## Parameters
- `arg`: the other argument of bitwise AND
- `order`: memory order constraints to enforce

## Return value
The value of the referenced object, immediately preceding the effects of this function.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | fetch_and was meaningless for const T | constrained to accept only non-const T |
