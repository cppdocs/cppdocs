---
title: "std::binomial_distribution<IntType>::binomial_distribution"
source_path: "cpp/numeric/random/binomial_distribution/binomial_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
binomial_distribution() : binomial_distribution(1) {}
```
_(since C++11)_

```cpp
explicit binomial_distribution( IntType t, double p = 0.5 );
```
_(since C++11)_

```cpp
explicit binomial_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `t`: the t distribution parameter (number of trials)
- `p`: the p distribution parameter (probability of a trial generating true)
- `params`: the distribution parameter set

## Notes
Requires that 0 ≤ p ≤ 1 and 0 ≤ t.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
