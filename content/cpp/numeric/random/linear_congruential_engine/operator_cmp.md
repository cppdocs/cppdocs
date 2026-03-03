---
title: "operator==,!=(std::linear_congruential_engine)"
source_path: "cpp/numeric/random/linear_congruential_engine/operator_cmp"
category: "numeric"
since: "C++11"
---

Compares two pseudo-random number engines. Two engines are equal, if their internal states are equivalent, that is, if they would generate equivalent values for any number of calls of operator().

## Declarations
```cpp
friend bool operator==( const linear_congruential_engine& lhs,
const linear_congruential_engine& rhs );
```
_(since C++11)_

```cpp
friend bool operator!=( const linear_congruential_engine& lhs,
const linear_congruential_engine& rhs );
```
_(since C++11) (until C++20)_

## Parameters
- `lhs, rhs`: engines to compare

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3519 | C++11 | the form of equality operators were unspecified | specified to be hidden friends |
