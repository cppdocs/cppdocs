---
title: "std::ldexp, std::ldexpf, std::ldexpl"
source_path: "cpp/numeric/math/ldexp"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Multiplies a floating point value num by the number 2 raised to the exp power.The library provides overloads of std::ldexp for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
float ldexp ( float num, int exp );
double ldexp ( double num, int exp );
long double ldexp ( long double num, int exp );
```
_(until C++23)_

```cpp
constexpr /* floating-point-type */
ldexp ( /* floating-point-type */ num, int exp );
```
_(since C++23)_

```cpp
float ldexpf( float num, int exp );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double ldexpl( long double num, int exp );
```
_(since C++11) (constexpr since C++23)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double ldexp ( Integer num, int exp );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value
- `exp`: integer value

## Return value
If no errors occur, num multiplied by 2 to the power of exp (num×2exp) is returned.

## Notes
On binary systems (where [FLT_RADIX](/cpp/types/climits/) is 2), std::ldexp is equivalent to [std::scalbn](/cpp/numeric/math/scalbn/).

The function std::ldexp ("load exponent"), together with its dual, [std::frexp](/cpp/numeric/math/frexp/), can be used to manipulate the representation of a floating-point number without direct bit manipulations.

On many implementations, std::ldexp is less efficient than multiplication or division by a power of two using arithmetic operators.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::ldexp(num, exp) has the same effect as std::ldexp(static_cast<double>(num), exp).

For exponentiation of 2 by a floating point exponent, [std::exp2](/cpp/numeric/math/exp2/) can be used.

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
    std::cout
        << "ldexp(5, 3) = 5 * 8 = " << std::ldexp(5, 3) << '\n'
        << "ldexp(7, -4) = 7 / 16 = " << std::ldexp(7, -4) << '\n'
        << "ldexp(1, -1074) = " << std::ldexp(1, -1074)
        << " (minimum positive subnormal float64_t)\n"
        << "ldexp(nextafter(1,0), 1024) = "
        << std::ldexp(std::nextafter(1,0), 1024)
        << " (largest finite float64_t)\n";
 
    // special values
    std::cout << "ldexp(-0, 10) = " << std::ldexp(-0.0, 10) << '\n'
              << "ldexp(-Inf, -1) = " << std::ldexp(-INFINITY, -1) << '\n';
 
    // error handling
    std::feclearexcept(FE_ALL_EXCEPT);
    errno = 0;
    const double inf = std::ldexp(1, 1024);
    const bool is_range_error = errno == ERANGE;
 
    std::cout << "ldexp(1, 1024) = " << inf << '\n';
    if (is_range_error)
        std::cout << "    errno == ERANGE: " << std::strerror(ERANGE) << '\n';
    if (std::fetestexcept(FE_OVERFLOW))
        std::cout << "    FE_OVERFLOW raised\n";
}
```

## See also
- [frexpfrexpffrexpl](/cpp/numeric/math/frexp/)
- [scalbnscalbnfscalbnlscalblnscalblnfscalblnl](/cpp/numeric/math/scalbn/)
- [FLT_RADIX](/cpp/types/climits/)
- [exp2exp2fexp2l](/cpp/numeric/math/exp2/)
- [C documentation](/c/numeric/math/ldexp/)
