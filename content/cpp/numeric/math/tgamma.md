---
title: "std::tgamma, std::tgammaf, std::tgammal"
source_path: "cpp/numeric/math/tgamma"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the [gamma function](https://en.wikipedia.org/wiki/Gamma_function) of num.The library provides overloads of std::tgamma for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float tgamma ( float num );
double tgamma ( double num );
long double tgamma ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
tgamma ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float tgammaf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double tgammal( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
tgamma ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double tgamma ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the value of the gamma function of num, that is \(\Gamma(\mathtt{num}) = \displaystyle\int_0^\infty\!\! t^{\mathtt{num}-1} e^{-t}\, dt\)∫∞0tnum-1 e-t dt, is returned.

## Notes
If num is a natural number, std::tgamma(num) is the factorial of num - 1. Many implementations calculate the exact integer-domain factorial if the argument is a sufficiently small integer.

For IEEE-compatible type double, overflow happens if 0 < num && num < 1 / [DBL_MAX](/cpp/types/climits/) or if num > 171.7.

[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/tgamma.html) that a pole error occurs if the argument is zero, but a domain error occurs when the argument is a negative integer. It also specifies that in future, domain errors may be replaced by pole errors for negative integer arguments (in which case the return value in those cases would change from NaN to ±∞).

There is a non-standard function named gamma in various implementations, but its definition is inconsistent. For example, glibc and 4.2BSD version of gamma executes lgamma, but 4.4BSD version of gamma executes tgamma.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::tgamma(num) has the same effect as std::tgamma(static_cast<double>(num)).

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
    std::cout << "tgamma(10) = " << std::tgamma(10)
              << ", 9! = " << 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 << '\n'
              << "tgamma(0.5) = " << std::tgamma(0.5)
              << ", sqrt(pi) = " << std::sqrt(std::acos(-1)) << '\n';
 
    // special values
    std::cout << "tgamma(1) = " << std::tgamma(1) << '\n'
              << "tgamma(+Inf) = " << std::tgamma(INFINITY) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "tgamma(-1) = " << std::tgamma(-1) << '\n';
 
    if (errno == EDOM)
        std::cout << "    errno == EDOM: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised\n";
}
```

## See also
- [lgammalgammaflgammal](/cpp/numeric/math/lgamma/)
- [betabetafbetal](/cpp/numeric/special_functions/beta/)
- [C documentation](/c/numeric/math/tgamma/)
