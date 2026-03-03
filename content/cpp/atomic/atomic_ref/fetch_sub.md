---
title: "std::atomic_ref<T>::fetch_sub"
source_path: "cpp/atomic/atomic_ref/fetch_sub"
category: "atomic"
---

Atomically replaces the current value of the referenced object with the result of arithmetic subtraction of the value and arg. This operation is a read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
Provided only when T is an arithmetic type other than cv bool or a pointer-to-object type
```

```cpp
value_type fetch_sub( difference_type arg,
std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(constexpr since C++26)_

## Parameters
- `arg`: the other argument of arithmetic subtraction
- `order`: memory order constraints to enforce

## Return value
The value referenced by *[ptr](/cpp/atomic/atomic_ref/#ptr), immediately preceding the effects of this function.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | fetch_sub was meaningless for const T | constrained to accept only non-const T |
