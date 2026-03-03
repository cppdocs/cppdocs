---
title: "std::lognormal_distribution<RealType>::operator()"
source_path: "cpp/numeric/random/lognormal_distribution/operator"
category: "numeric"
since: "C++11"
---

Generates random numbers that are distributed according to the associated probability function. The entropy is acquired by calling g.operator().

## Declarations
```cpp
template< class Generator >
result_type operator()( Generator& g );
```
_(since C++11)_

```cpp
template< class Generator >
result_type operator()( Generator& g, const param_type& params );
```
_(since C++11)_

## Parameters
- `g`: a uniform random bit generator object
- `params`: distribution parameter set to use instead of the associated one

## Return value
The generated random number.
