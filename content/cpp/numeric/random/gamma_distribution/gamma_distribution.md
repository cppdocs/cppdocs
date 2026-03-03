---
title: "std::gamma_distribution<RealType>::gamma_distribution"
source_path: "cpp/numeric/random/gamma_distribution/gamma_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
gamma_distribution() : gamma_distribution(1.0) {}
```
_(since C++11)_

```cpp
explicit gamma_distribution( RealType alpha, RealType beta = 1.0 );
```
_(since C++11)_

```cpp
explicit gamma_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `alpha`: the α distribution parameter (shape)
- `beta`: the β distribution parameter (scale)
- `params`: the distribution parameter set

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
