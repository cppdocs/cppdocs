---
title: "std::atomic_ref<T>::operator+=,-="
source_path: "cpp/atomic/atomic_ref/operator"
category: "atomic"
---

Atomically replaces the current value referenced by *[ptr](/cpp/atomic/atomic_ref/#ptr) with the result of computation involving the previous value and arg. These operations are read-modify-write operations.

## Declarations
```cpp
Provided only when T is an arithmetic type other than cv bool or a pointer-to-object type
```

```cpp
value_type operator+=( difference_type arg ) const noexcept;
```
_(constexpr since C++26)_

```cpp
value_type operator-=( difference_type arg ) const noexcept;
```
_(constexpr since C++26)_

## Parameters
- `arg`: the argument for the arithmetic operation

## Return value
The resulting value (that is, the result of applying the corresponding binary operator to the value referenced by *[ptr](/cpp/atomic/atomic_ref/#ptr) immediately preceding the effects of the corresponding member function).

## Notes
Unlike most compound assignment operators, the compound assignment operators for atomic_ref return a copy of the stored value instead of a reference to arg.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | compound assignment operators were meaningless for const T | constrained to accept only non-const T |

## See also
- [fetch_add](/cpp/atomic/atomic_ref/fetch_add/)
- [fetch_sub](/cpp/atomic/atomic_ref/fetch_sub/)
- [operator++operator++(int)operator--operator--(int)](/cpp/atomic/atomic_ref/operator_arith/)
- [operator&=operator|=operator^=](/cpp/atomic/atomic_ref/operator_arith3/)
