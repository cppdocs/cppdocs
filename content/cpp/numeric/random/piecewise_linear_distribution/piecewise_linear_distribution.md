---
title: "std::piecewise_linear_distribution<RealType>::piecewise_linear_distribution"
source_path: "cpp/numeric/random/piecewise_linear_distribution/piecewise_linear_distribution"
category: "numeric"
since: "C++11"
---

Constructs new piecewise linear distribution object.

## Declarations
```cpp
piecewise_linear_distribution();
```
_(since C++11)_

```cpp
template< class InputIt1, class InputIt2 >
piecewise_linear_distribution( InputIt1 first_i, InputIt1 last_i,
InputIt2 first_w );
```
_(since C++11)_

```cpp
template< class UnaryOperation >
piecewise_linear_distribution( std::initializer_list<RealType> ilist,
UnaryOperation fw );
```
_(since C++11)_

```cpp
template< class UnaryOperation >
piecewise_linear_distribution( std::size_t nw,
RealType xmin, RealType xmax,
UnaryOperation fw );
```
_(since C++11)_

```cpp
explicit piecewise_linear_distribution( const param_type& parm );
```
_(since C++11)_

## Parameters
- `first_i`: iterator initialized to the start of the interval sequence
- `last_i`: iterator initialized to one-past-the-end of the interval sequence
- `first_w`: iterator initialized to the start of the density (weight) sequence
- `ilist`: initializer_list yielding the interval sequence
- `fw`: double(double) function yielding the densities
- `nw`: the number of densities
- `xmin`: the lower bound of the interval sequence
- `xmax`: the upper bound of the interval sequence
- `parm`: the distribution parameter set
