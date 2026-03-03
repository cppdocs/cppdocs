---
title: "std::comp_ellint_1, std::comp_ellint_1f, std::comp_ellint_1l"
source_path: "cpp/numeric/special_functions/comp_ellint_1"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [complete elliptic integral of the first kind](https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_first_kind) of k.The library provides overloads of std::comp_ellint_1 for all cv-unqualified floating-point types as the type of the parameter k.(since C++23)

## Declarations
```cpp
double comp_ellint_1 ( double k );
float comp_ellint_1 ( float k );
long double comp_ellint_1 ( long double k );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ comp_ellint_1( /* floating-point-type */ k );
```
_(since C++23)_

```cpp
float comp_ellint_1f( float k );
```
_(since C++17)_

```cpp
long double comp_ellint_1l( long double k );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double comp_ellint_1 ( Integer k );
```
_(since C++17)_

## Parameters
- `k`: elliptic modulus or eccentricity (a floating-point or integer value)

## Return value
If no errors occur, value of the complete elliptic integral of the first kind of k, that is [std::ellint_1](/cpp/numeric/special_functions/ellint_1/)(k, π/2), is returned.

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/ellint/ellint_1.html).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::comp_ellint_1(num) has the same effect as std::comp_ellint_1(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
#include <numbers>
 
int main()
{
    constexpr double π{std::numbers::pi};
 
    std::cout << "K(0) ≈ " << std::comp_ellint_1(0) << '\n'
              << "π/2 ≈ " << π / 2 << '\n'
              << "K(0.5) ≈ " << std::comp_ellint_1(0.5) << '\n'
              << "F(0.5, π/2) ≈ " << std::ellint_1(0.5, π / 2) << '\n'
              << "The period of a pendulum length 1m at 10° initial angle ≈ "
              << 4 * std::sqrt(1 / 9.80665) * std::comp_ellint_1(std::sin(π / 18 / 2))
              << "s,\n" "whereas the linear approximation gives ≈ "
              << 2 * π * std::sqrt(1 / 9.80665) << '\n';
}
```

## See also
- [ellint_1ellint_1fellint_1l](/cpp/numeric/special_functions/ellint_1/)
