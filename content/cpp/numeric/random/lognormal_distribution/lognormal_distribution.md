---
title: "std::lognormal_distribution<RealType>::lognormal_distribution"
source_path: "cpp/numeric/random/lognormal_distribution/lognormal_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
lognormal_distribution() : lognormal_distribution(0.0) {}
```
_(since C++11)_

```cpp
explicit lognormal_distribution( RealType m, RealType s = 1.0 );
```
_(since C++11)_

```cpp
explicit lognormal_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `m`: the m distribution parameter (log-scale)
- `s`: the s distribution parameter (shape)
- `params`: the distribution parameter set

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
