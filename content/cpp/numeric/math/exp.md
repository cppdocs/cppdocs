---
title: "std::exp, std::expf, std::expl"
source_path: "cpp/numeric/math/exp"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes e ([Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant)), 2.7182818...) raised to the given power num.The library provides overloads of std::exp for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float exp ( float num );
double exp ( double num );
long double exp ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
exp ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float expf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double expl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
exp ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double exp ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the base-e exponential of num (enum) is returned.

## Notes
For IEEE-compatible type double, overflow is guaranteed if 709.8 < num, and underflow is guaranteed if num < -708.4.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::exp(num) has the same effect as std::exp(static_cast<double>(num)).

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <cstring>
#include <iomanip>
#include <iostream>
#include <numbers>
 
// #pragma STDC FENV_ACCESS ON
 
consteval double approx_e()
{
    long double e{1.0};
    for (auto fac{1ull}, n{1llu}; n != 18; ++n, fac *= n)
        e += 1.0 / fac;
    return e;
}
 
int main()
{
    std::cout << std::setprecision(16)
              << "exp(1) = e¹ = " << std::exp(1) << '\n'
              << "numbers::e  = " << std::numbers::e << '\n'
              << "approx_e    = " << approx_e() << '\n'
              << "FV of $100, continuously compounded at 3% for 1 year = "
              << std::setprecision(6) << 100 * std::exp(0.03) << '\n';
 
    // special values
    std::cout << "exp(-0) = " << std::exp(-0.0) << '\n'
              << "exp(-Inf) = " << std::exp(-INFINITY) << '\n';
 
    // error handling 
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "exp(710) = " << std::exp(710) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_OVERFLOW))
        std::cout << "    FE_OVERFLOW raised\n";
}
```

## See also
- [exp2exp2fexp2l](/cpp/numeric/math/exp2/)
- [expm1expm1fexpm1l](/cpp/numeric/math/expm1/)
- [loglogflogl](/cpp/numeric/math/log/)
- [exp(std::complex)](/cpp/numeric/complex/exp/)
- [exp(std::valarray)](/cpp/numeric/valarray/exp/)
- [C documentation](/c/numeric/math/exp/)
