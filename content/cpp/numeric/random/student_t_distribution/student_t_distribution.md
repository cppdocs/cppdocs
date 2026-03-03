---
title: "std::student_t_distribution<RealType>::student_t_distribution"
source_path: "cpp/numeric/random/student_t_distribution/student_t_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
student_t_distribution() : student_t_distribution(1) {}
```
_(since C++11)_

```cpp
explicit student_t_distribution( RealType n );
```
_(since C++11)_

```cpp
explicit student_t_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `n`: the n distribution parameter (degrees of freedom)
- `params`: the distribution parameter set

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
