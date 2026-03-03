---
title: "std::bernoulli_distribution::bernoulli_distribution"
source_path: "cpp/numeric/random/bernoulli_distribution/bernoulli_distribution"
category: "numeric"
since: "C++11"
---

Constructs new distribution object.

## Declarations
```cpp
bernoulli_distribution() : bernoulli_distribution(0.5) { }
```
_(since C++11)_

```cpp
explicit bernoulli_distribution( double p );
```
_(since C++11)_

```cpp
explicit bernoulli_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `p`: the p distribution parameter (probability of generating true)
- `params`: the distribution parameter set

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
