---
title: "std::uniform_real_distribution<RealType>::uniform_real_distribution"
source_path: "cpp/numeric/random/uniform_real_distribution/uniform_real_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
uniform_real_distribution() : uniform_real_distribution(0.0) { }
```
_(since C++11)_

```cpp
explicit uniform_real_distribution( RealType a, RealType b = 1.0 );
```
_(since C++11)_

```cpp
explicit uniform_real_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `a`: the a distribution parameter (minimum value)
- `b`: the b distribution parameter (maximum value)
- `params`: the distribution parameter set

## Notes
Requires that a ≤ b and b - a ≤ [std::numeric_limits](/cpp/types/numeric_limits/)<RealType>::max().

If a == b, subsequent calls to the [operator()](/cpp/numeric/random/uniform_real_distribution/operator/) overload that does not accept a param_type object will cause undefined behavior.

To create a distribution over the closed interval [a,b], [std::nextafter](/cpp/numeric/math/nextafter/)(b, [std::numeric_limits](/cpp/types/numeric_limits/)<RealType>::max()) may be used as the second parameter.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
