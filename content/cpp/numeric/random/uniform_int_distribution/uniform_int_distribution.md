---
title: "std::uniform_int_distribution<IntType>::uniform_int_distribution"
source_path: "cpp/numeric/random/uniform_int_distribution/uniform_int_distribution"
category: "numeric"
since: "C++11"
---

Constructs new distribution object.

## Declarations
```cpp
uniform_int_distribution() : uniform_int_distribution(0) { }
```
_(since C++11)_

```cpp
explicit uniform_int_distribution( IntType a,
IntType b = std::numeric_limits<IntType>::max() );
```
_(since C++11)_

```cpp
explicit uniform_int_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `a`: the a distribution parameter (minimum value)
- `b`: the b distribution parameter (maximum value)
- `params`: the distribution parameter set

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
