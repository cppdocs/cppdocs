---
title: "std::fisher_f_distribution<RealType>::fisher_f_distribution"
source_path: "cpp/numeric/random/fisher_f_distribution/fisher_f_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
fisher_f_distribution() : fisher_f_distribution(1.0) {}
```
_(since C++11)_

```cpp
explicit fisher_f_distribution( RealType m, RealType n = 1.0 );
```
_(since C++11)_

```cpp
explicit fisher_f_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `m`: the m distribution parameter (degrees of freedom)
- `n`: the n distribution parameter (degrees of freedom)
- `params`: the distribution parameter set

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
