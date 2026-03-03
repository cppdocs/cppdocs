---
title: "std::beta, std::betaf, std::betal"
source_path: "cpp/numeric/special_functions/beta"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [Beta function](https://en.wikipedia.org/wiki/Beta_function) of x and y.The library provides overloads of std::beta for all cv-unqualified floating-point types as the type of the parameters x and y.(since C++23)

## Declarations
```cpp
float beta ( float x, float y );
double beta ( double x, double y );
long double beta ( long double x, long double y );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ beta( /* floating-point-type */ x,
/* floating-point-type */ y );
```
_(since C++23)_

```cpp
float betaf( float x, float y );
```
_(since C++17)_

```cpp
long double betal( long double x, long double y );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2 >
/* common-floating-point-type */ beta( Arithmetic1 x, Arithmetic2 y );
```
_(since C++17)_

## Parameters
- `x, y`: floating-point or integer values

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_beta/beta_function.html).

std::beta(x, y) equals std::beta(y, x).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::beta(num1, num2) has the same effect as std::beta(static_cast</* common-floating-point-type */>(num1),static_cast</* common-floating-point-type */>(num2)), where /* common-floating-point-type */ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cassert>
#include <cmath>
#include <iomanip>
#include <iostream>
#include <numbers>
#include <string>
 
long binom_via_beta(int n, int k)
{
    return std::lround(1 / ((n + 1) * std::beta(n - k + 1, k + 1)));
}
 
long binom_via_gamma(int n, int k)
{
    return std::lround(std::tgamma(n + 1) /
                      (std::tgamma(n - k + 1) * 
                       std::tgamma(k + 1)));
}
 
int main()
{
    std::cout << "Pascal's triangle:\n";
    for (int n = 1; n < 10; ++n)
    {
        std::cout << std::string(20 - n * 2, ' ');
        for (int k = 1; k < n; ++k)
        {
            std::cout << std::setw(3) << binom_via_beta(n, k) << ' ';
            assert(binom_via_beta(n, k) == binom_via_gamma(n, k));
        }
        std::cout << '\n';
    }
 
    // A spot-check
    const long double p = 0.123; // a random value in [0, 1]
    const long double q = 1 - p;
    const long double π = std::numbers::pi_v<long double>;
    std::cout << "\n\n" << std::setprecision(19)
              << "β(p,1-p)   = " << std::beta(p, q) << '\n'
              << "π/sin(π*p) = " << π / std::sin(π * p) << '\n';
}
```

## See also
- [tgammatgammaftgammal](/cpp/numeric/math/tgamma/)
