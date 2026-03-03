---
title: "std::atomic_ref<T>::operator="
source_path: "cpp/atomic/atomic_ref/operator"
category: "atomic"
---

1) Equivalent to store(desired); return desired;. This overload participates in overload resolution only if [std::is_const_v](/cpp/types/is_const/)<T> is false.

## Declarations
```cpp
value_type operator=( value_type desired ) const noexcept;
```
_(constexpr since C++26)_

```cpp
atomic_ref& operator=( const atomic_ref& ) = delete;
```

## Parameters
- `desired`: value to assign

## Return value
As described above.

## Notes
Unlike most assignment operators, the assignment operator for atomic_ref does not return a reference to its left-hand argument. It returns a copy of the stored value instead.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | assignment operator was meaningless for const T | constrained to accept only non-const T |

## See also
- [(constructor)](/cpp/atomic/atomic_ref/atomic_ref/)
- [store](/cpp/atomic/atomic_ref/store/)
