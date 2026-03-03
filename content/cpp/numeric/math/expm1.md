---
title: "std::expm1, std::expm1f, std::expm1l"
source_path: "cpp/numeric/math/expm1"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the e ([Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant)), 2.7182818...) raised to the given power num, minus 1.0. This function is more accurate than the expression [std::exp](/cpp/numeric/math/exp/)(num) - 1.0 if num is close to zero.The library provides overloads of std::expm1 for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float expm1 ( float num );
double expm1 ( double num );
long double expm1 ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
expm1 ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float expm1f( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double expm1l( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
expm1 ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double expm1 ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur enum-1 is returned.

## Notes
The functions std::expm1 and [std::log1p](/cpp/numeric/math/log1p/) are useful for financial calculations, for example, when calculating small daily interest rates: (1+x)n-1 can be expressed as std::expm1(n * [std::log1p](/cpp/numeric/math/log1p/)(x)). These functions also simplify writing accurate inverse hyperbolic functions.

For IEEE-compatible type double, overflow is guaranteed if 709.8 < num.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::expm1(num) has the same effect as std::expm1(static_cast<double>(num)).

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <cstring>
#include <iostream>
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    std::cout << "expm1(1) = " << std::expm1(1) << '\n'
              << "Interest earned in 2 days on $100, compounded daily at 1%\n"
              << "    on a 30/360 calendar = "
              << 100 * std::expm1(2 * std::log1p(0.01 / 360)) << '\n'
              << "exp(1e-16)-1 = " << std::exp(1e-16) - 1
              << ", but expm1(1e-16) = " << std::expm1(1e-16) << '\n';
 
    // special values
    std::cout << "expm1(-0) = " << std::expm1(-0.0) << '\n'
              << "expm1(-Inf) = " << std::expm1(-INFINITY) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "expm1(710) = " << std::expm1(710) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_OVERFLOW))
        std::cout << "    FE_OVERFLOW raised\n";
}
```

## See also
- [expexpfexpl](/cpp/numeric/math/exp/)
- [exp2exp2fexp2l](/cpp/numeric/math/exp2/)
- [log1plog1pflog1pl](/cpp/numeric/math/log1p/)
- [C documentation](/c/numeric/math/expm1/)
