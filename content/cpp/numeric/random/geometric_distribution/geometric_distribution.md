---
title: "std::geometric_distribution<IntType>::geometric_distribution"
source_path: "cpp/numeric/random/geometric_distribution/geometric_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
geometric_distribution() : geometric_distribution(0.5) {}
```
_(since C++11)_

```cpp
explicit geometric_distribution( double p );
```
_(since C++11)_

```cpp
explicit geometric_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `p`: the p distribution parameter (probability of a trial generating true)
- `params`: the distribution parameter set

## Notes
Requires that 0 < p < 1.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
