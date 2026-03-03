---
title: "std::log1p, std::log1pf, std::log1pl"
source_path: "cpp/numeric/math/log1p"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the [natural (base e) logarithm](https://en.wikipedia.org/wiki/Natural_logarithm) of 1 + num. This function is more precise than the expression [std::log](/cpp/numeric/math/log/)(1 + num) if num is close to zero.The library provides overloads of std::log1p for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float log1p ( float num );
double log1p ( double num );
long double log1p ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
log1p ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float log1pf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double log1pl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
log1p ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double log1p ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur ln(1+num) is returned.

## Notes
The functions [std::expm1](/cpp/numeric/math/expm1/) and std::log1p are useful for financial calculations, for example, when calculating small daily interest rates: (1 + x)n - 1 can be expressed as [std::expm1](/cpp/numeric/math/expm1/)(n * std::log1p(x)). These functions also simplify writing accurate inverse hyperbolic functions.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::log1p(num) has the same effect as std::log1p(static_cast<double>(num)).

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
    std::cout << "log1p(0) = " << log1p(0) << '\n'
              << "Interest earned in 2 days on $100, compounded daily at 1%\n"
              << "    on a 30/360 calendar = "
              << 100 * expm1(2 * log1p(0.01 / 360)) << '\n'
              << "log(1+1e-16) = " << std::log(1 + 1e-16)
              << ", but log1p(1e-16) = " << std::log1p(1e-16) << '\n';
 
    // special values
    std::cout << "log1p(-0) = " << std::log1p(-0.0) << '\n'
              << "log1p(+Inf) = " << std::log1p(INFINITY) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "log1p(-1) = " << std::log1p(-1) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_DIVBYZERO))
        std::cout << "    FE_DIVBYZERO raised\n";
}
```

## See also
- [loglogflogl](/cpp/numeric/math/log/)
- [log10log10flog10l](/cpp/numeric/math/log10/)
- [log2log2flog2l](/cpp/numeric/math/log2/)
- [expm1expm1fexpm1l](/cpp/numeric/math/expm1/)
- [C documentation](/c/numeric/math/log1p/)
