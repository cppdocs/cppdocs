---
title: "std::exponential_distribution<RealType>::exponential_distribution"
source_path: "cpp/numeric/random/exponential_distribution/exponential_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
exponential_distribution() : exponential_distribution(1.0) {}
```
_(since C++11)_

```cpp
explicit exponential_distribution( RealType lambda );
```
_(since C++11)_

```cpp
explicit exponential_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `lambda`: the λ distribution parameter (the rate parameter)
- `params`: the distribution parameter set

## Notes
Requires that 0 < lambda.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
