---
title: "std::cauchy_distribution<RealType>::cauchy_distribution"
source_path: "cpp/numeric/random/cauchy_distribution/cauchy_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
cauchy_distribution() : cauchy_distribution(0.0) {}
```
_(since C++11)_

```cpp
explicit cauchy_distribution( RealType a, RealType b = 1.0 );
```
_(since C++11)_

```cpp
explicit cauchy_distribution( const param_type& params );
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
