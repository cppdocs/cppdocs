---
title: "std::atomic_ref<T>::fetch_add"
source_path: "cpp/atomic/atomic_ref/fetch_add"
category: "atomic"
---

Atomically replaces the current value referenced by *[ptr](/cpp/atomic/atomic_ref/#ptr) with the result of arithmetic addition of the value and arg. This operation is a read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
Provided only when T is an arithmetic type other than cv bool or a pointer-to-object type
```

```cpp
value_type fetch_add( difference_type arg,
std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(constexpr since C++26)_

## Parameters
- `arg`: the other argument of arithmetic addition
- `order`: memory order constraints to enforce

## Return value
The value referenced by *[ptr](/cpp/atomic/atomic_ref/#ptr), immediately preceding the effects of this function.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | fetch_add was meaningless for const T | constrained to accept only non-const T |
