---
title: "std::piecewise_constant_distribution<RealType>::piecewise_constant_distribution"
source_path: "cpp/numeric/random/piecewise_constant_distribution/piecewise_constant_distribution"
category: "numeric"
since: "C++11"
---

Constructs new piecewise constant distribution object.

## Declarations
```cpp
piecewise_constant_distribution();
```
_(since C++11)_

```cpp
template< class InputIt1, class InputIt2 >
piecewise_constant_distribution( InputIt1 first_i, InputIt1 last_i,
InputIt2 first_w );
```
_(since C++11)_

```cpp
template< class UnaryOperation >
piecewise_constant_distribution( std::initializer_list<RealType> ilist_i,
UnaryOperation fw );
```
_(since C++11)_

```cpp
template< class UnaryOperation >
piecewise_constant_distribution( std::size_t nw,
RealType xmin, RealType xmax,
UnaryOperation fw );
```
_(since C++11)_

```cpp
explicit piecewise_constant_distribution( const param_type& param );
```
_(since C++11)_

## Parameters
- `first_i`: iterator initialized to the start of the interval sequence
- `last_i`: iterator initialized to one-past-the-end of the interval sequence
- `first_w`: iterator initialized to the start of the density (weight) sequence
- `ilist_i`: initializer_list yielding the interval sequence
- `fw`: double(double) function yielding the densities
- `nw`: the number of densities
- `xmin`: the lower bound of the interval sequence
- `xmax`: the upper bound of the interval sequence
- `param`: the distribution parameter set
