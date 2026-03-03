---
title: "operator==,!=(std::subtract_with_carry_engine)"
source_path: "cpp/numeric/random/subtract_with_carry_engine/operator_cmp"
category: "numeric"
since: "C++11"
---

Compares two pseudo-random number engines. Two engines are equal, if their internal states are equivalent, that is, if they would generate equivalent values for any number of calls of operator().

## Declarations
```cpp
friend bool operator==( const subtract_with_carry_engine& lhs,
const subtract_with_carry_engine& rhs );
```
_(since C++11)_

```cpp
friend bool operator!=( const subtract_with_carry_engine& lhs,
const subtract_with_carry_engine& rhs );
```
_(since C++11) (until C++20)_

## Parameters
- `lhs, rhs`: engines to compare

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3519 | C++11 | the form of equality operators were unspecified | specified to be hidden friends |
