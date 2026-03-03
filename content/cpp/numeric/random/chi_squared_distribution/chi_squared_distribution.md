---
title: "std::chi_squared_distribution<RealType>::chi_squared_distribution"
source_path: "cpp/numeric/random/chi_squared_distribution/chi_squared_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
chi_squared_distribution() : chi_squared_distribution(1.0) {}
```
_(since C++11)_

```cpp
explicit chi_squared_distribution( RealType n );
```
_(since C++11)_

```cpp
explicit chi_squared_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `n`: the n distribution parameter (degrees of freedom)
- `params`: the distribution parameter set

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
