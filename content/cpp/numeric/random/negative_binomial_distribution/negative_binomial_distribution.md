---
title: "std::negative_binomial_distribution<IntType>::negative_binomial_distribution"
source_path: "cpp/numeric/random/negative_binomial_distribution/negative_binomial_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
negative_binomial_distribution() : negative_binomial_distribution(1) {}
```
_(since C++11)_

```cpp
explicit negative_binomial_distribution( IntType k, double p = 0.5 );
```
_(since C++11)_

```cpp
explicit negative_binomial_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `k`: the k distribution parameter (number of trial successes)
- `p`: the p distribution parameter (probability of a trial generating true)
- `params`: the distribution parameter set

## Notes
Requires that 0 < p ≤ 1 and 0 < k.

If p == 1, subsequent calls to the [operator()](/cpp/numeric/random/negative_binomial_distribution/operator/) overload that does not accept a param_type object will cause undefined behavior.

The default-constructed std::negative_binomial_distribution is equivalent to the default-constructed [std::geometric_distribution](/cpp/numeric/random/geometric_distribution/).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
