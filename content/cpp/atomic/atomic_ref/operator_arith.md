---
title: "std::atomic_ref<T>::operator++,++(int),--,--(int)"
source_path: "cpp/atomic/atomic_ref/operator"
category: "atomic"
since: "C++20"
---

Atomically increments or decrements the current value of the referenced object. These operations are read-modify-write operations.

## Declarations
```cpp
Provided only when T is an integral type other than cv bool or a pointer-to-object type
```

```cpp
value_type operator++() const noexcept;
```
_(since C++20)_

```cpp
value_type operator++( int ) const noexcept;
```
_(since C++20)_

```cpp
value_type operator--() const noexcept;
```
_(since C++20)_

```cpp
value_type operator--( int ) const noexcept;
```
_(since C++20)_

## Notes
Unlike most pre-increment and pre-decrement operators, the pre-increment and pre-decrement operators for atomic_ref do not return a reference to the modified object. They return a copy of the stored value instead.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | increment and decrement operators were meaningless for const T | constrained to accept only non-const T |

## See also
- [fetch_add](/cpp/atomic/atomic_ref/fetch_add/)
- [fetch_sub](/cpp/atomic/atomic_ref/fetch_sub/)
- [operator+=operator-=](/cpp/atomic/atomic_ref/operator_arith2/)
- [operator&=operator|=operator^=](/cpp/atomic/atomic_ref/operator_arith3/)
