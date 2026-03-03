---
title: "std::discrete_distribution<IntType>::discrete_distribution"
source_path: "cpp/numeric/random/discrete_distribution/discrete_distribution"
category: "numeric"
since: "C++11"
---

Constructs a new distribution object.

## Declarations
```cpp
discrete_distribution();
```
_(since C++11)_

```cpp
template< class InputIt >
discrete_distribution( InputIt first, InputIt last );
```
_(since C++11)_

```cpp
discrete_distribution( std::initializer_list<double> weights );
```
_(since C++11)_

```cpp
template< class UnaryOperation >
discrete_distribution( std::size_t count, double xmin, double xmax,
UnaryOperation unary_op );
```
_(since C++11)_

```cpp
explicit discrete_distribution( const param_type& params );
```
_(since C++11)_

## Parameters
- `first, last`: the range of elements defining the numbers to use as weights. The type of the elements referred by InputIterator must be convertible to double
- `weights`: initializer list containing the weights
- `unary_op`: unary operation function object that will be applied. The signature of the function should be equivalent to the following: Ret fun(const Type &a); The signature does not need to have const &. The type Type must be such that an object of type double can be dereferenced and then implicitly converted to Type. The type Ret must be such that an object of type double can be dereferenced and assigned a value of type Ret.
- `params`: the distribution parameter set
