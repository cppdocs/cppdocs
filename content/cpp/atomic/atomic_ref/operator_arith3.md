---
title: "std::atomic_ref<T>::operator&=,|=,^="
source_path: "cpp/atomic/atomic_ref/operator"
category: "atomic"
since: "C++20"
---

Atomically replaces the current value of the referenced object with the result of computation involving the previous value and arg. These operations are read-modify-write operations.

## Declarations
```cpp
Provided only when T is an integral type other than cv bool
```

```cpp
value_type operator&=( value_type arg ) const noexcept;
```
_(since C++20)_

```cpp
value_type operator|=( value_type arg ) const noexcept;
```
_(since C++20)_

```cpp
value_type operator^=( value_type arg ) const noexcept;
```
_(since C++20)_

## Parameters
- `arg`: the argument for the arithmetic operation

## Return value
The resulting value (that is, the result of applying the corresponding binary operator to the value immediately preceding the effects of the corresponding member function).

## Notes
Unlike most compound assignment operators, the compound assignment operators for atomic_ref do not return a reference to their left-hand arguments. They return a copy of the stored value instead.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | compound assignment operators were meaningless for const T | constrained to accept only non-const T |

## See also
- [fetch_and](/cpp/atomic/atomic_ref/fetch_and/)
- [fetch_or](/cpp/atomic/atomic_ref/fetch_or/)
- [fetch_xor](/cpp/atomic/atomic_ref/fetch_xor/)
- [operator++operator++(int)operator--operator--(int)](/cpp/atomic/atomic_ref/operator_arith/)
- [operator+=operator-=](/cpp/atomic/atomic_ref/operator_arith2/)
