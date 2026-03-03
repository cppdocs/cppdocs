---
title: "std::riemann_zeta, std::riemann_zetaf, std::riemann_zetal"
source_path: "cpp/numeric/special_functions/riemann_zeta"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [Riemann zeta function](https://en.wikipedia.org/wiki/Riemann_zeta_function) of num.The library provides overloads of std::riemann_zeta for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
float riemann_zeta ( float num );
double riemann_zeta ( double num );
long double riemann_zeta ( long double num );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ riemann_zeta( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
float riemann_zetaf( float num );
```
_(since C++17)_

```cpp
long double riemann_zetal( long double num );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double riemann_zeta ( Integer num );
```
_(since C++17)_

## Parameters
- `num`: floating-point or value

## Return value
If no errors occur, value of the Riemann zeta function of num, ζ(num), defined for the entire real axis:

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/zetas/zeta.html).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::riemann_zeta(num) has the same effect as std::riemann_zeta(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <format>
#include <iostream>
#include <numbers>
 
int main()
{
    constexpr auto π = std::numbers::pi;
 
    // spot checks for well-known values
    for (const double x : {-1.0, 0.0, 1.0, 0.5, 2.0})
        std::cout << std::format("ζ({})\t= {:+.5f}\n", x, std::riemann_zeta(x));
    std::cout << std::format("π²/6\t= {:+.5f}\n", π * π / 6);
}
```
