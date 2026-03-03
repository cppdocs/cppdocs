---
title: "std::weibull_distribution<RealType>::weibull_distribution"
source_path: "cpp/numeric/random/weibull_distribution/weibull_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
weibull_distribution() : weibull_distribution(1.0) {}
```
_(since C++11)_

```cpp
explicit weibull_distribution( RealType a, RealType b = 1.0 );
```
_(since C++11)_

```cpp
explicit weibull_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `a`: the a distribution parameter (shape)
- `b`: the b distribution parameter (scale)
- `params`: the distribution parameter set

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
