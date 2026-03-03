---
title: "std::poisson_distribution<IntType>::poisson_distribution"
source_path: "cpp/numeric/random/poisson_distribution/poisson_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
poisson_distribution() : poisson_distribution(1.0) {}
```
_(since C++11)_

```cpp
explicit poisson_distribution( double mean );
```
_(since C++11)_

```cpp
explicit poisson_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `mean`: the μ distribution parameter (the mean of the distribution)
- `params`: the distribution parameter set

## Notes
Requires that 0 < mean.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
