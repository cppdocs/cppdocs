---
title: "std::extreme_value_distribution<RealType>::extreme_value_distribution"
source_path: "cpp/numeric/random/extreme_value_distribution/extreme_value_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
extreme_value_distribution() : extreme_value_distribution(0.0) {}
```
_(since C++11)_

```cpp
explicit extreme_value_distribution( RealType a, RealType b = 1.0 );
```
_(since C++11)_

```cpp
explicit extreme_value_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `a`: the a distribution parameter (location)
- `b`: the b distribution parameter (scale)
- `params`: the distribution parameter set

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
