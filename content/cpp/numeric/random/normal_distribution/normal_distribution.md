---
title: "std::normal_distribution<RealType>::normal_distribution"
source_path: "cpp/numeric/random/normal_distribution/normal_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
normal_distribution() : normal_distribution(0.0) {}
```
_(since C++11)_

```cpp
explicit normal_distribution( RealType mean, RealType stddev = 1.0 );
```
_(since C++11)_

```cpp
explicit normal_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `mean`: the μ distribution parameter (mean)
- `stddev`: the σ distribution parameter (standard deviation)
- `params`: the distribution parameter set

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
