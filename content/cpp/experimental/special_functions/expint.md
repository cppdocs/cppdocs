---
title: "std::expint, std::expintf, std::expintl"
source_path: "cpp/experimental/special_functions/expint"
category: "experimental"
---

1) Computes the [exponential integral](https://en.wikipedia.org/wiki/Exponential_integral) of arg.

## Declarations
```cpp
double expint( double arg );
double expint( float arg );
double expint( long double arg );
float expintf( float arg );
long double expintl( long double arg );
```

```cpp
double expint( IntegralType arg );
```

## Parameters
- `arg`: value of a floating-point or Integral type

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/expint/expint_i.html).

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << "Ei(0) = " << std::expint(0) << '\n'
              << "Ei(1) = " << std::expint(1) << '\n'
              << "Gompetz constant = " << -std::exp(1) * std::expint(-1) << '\n';
}
```
