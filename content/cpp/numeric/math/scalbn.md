---
title: "std::scalbn, std::scalbnf, std::scalbnl, std::scalbln, std::scalblnf, std::scalblnl"
source_path: "cpp/numeric/math/scalbn"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-6) Multiplies a floating point value num by [FLT_RADIX](/cpp/types/climits/) raised to power exp.The library provides overloads of std::scalbn and std::scalbln for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
int exponent
```

```cpp
float scalbn ( float num, int exp );
double scalbn ( double num, int exp );
long double scalbn ( long double num, int exp );
```
_(since C++11) (until C++23)_

```cpp
constexpr /* floating-point-type */
scalbn ( /* floating-point-type */ num, int exp );
```
_(since C++23)_

```cpp
float scalbnf( float num, int exp );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double scalbnl( long double num, int exp );
```
_(since C++11) (constexpr since C++23)_

```cpp
long exponent
```

```cpp
float scalbln ( float num, long exp );
double scalbln ( double num, long exp );
long double scalbln ( long double num, long exp );
```
_(since C++11) (until C++23)_

```cpp
constexpr /* floating-point-type */
scalbln ( /* floating-point-type */ num, long exp );
```
_(since C++23)_

```cpp
float scalblnf( float num, long exp );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double scalblnl( long double num, long exp );
```
_(since C++11) (constexpr since C++23)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double scalbn( Integer num, int exp );
```
_(since C++11) (constexpr since C++23)_

```cpp
template< class Integer >
double scalbln( Integer num, long exp );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value
- `exp`: integer value

## Return value
If no errors occur, num multiplied by [FLT_RADIX](/cpp/types/climits/) to the power of exp (num×FLT_RADIXexp) is returned.

## Notes
On binary systems (where [FLT_RADIX](/cpp/types/climits/) is 2), std::scalbn is equivalent to [std::ldexp](/cpp/numeric/math/ldexp/).

Although std::scalbn and std::scalbln are specified to perform the operation efficiently, on many implementations they are less efficient than multiplication or division by a power of two using arithmetic operators.

The function name stands for "new scalb", where scalb was an older non-standard function whose second argument had floating-point type.

The std::scalbln function is provided because the factor required to scale from the smallest positive floating-point value to the largest finite one may be greater than 32767, the standard-guaranteed [INT_MAX](/cpp/types/climits/). In particular, for the 80-bit long double, the factor is 32828.

The GNU implementation does not set errno regardless of math_errhandling.

The additional overloads are not required to be provided exactly as (A,B). They only need to be sufficient to ensure that for their argument num of integer type:

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
    std::cout << "scalbn(7, -4) = " << std::scalbn(7, -4) << '\n'
              << "scalbn(1, -1074) = " << std::scalbn(1, -1074)
              << " (minimum positive subnormal double)\n"
              << "scalbn(nextafter(1,0), 1024) = "
              << std::scalbn(std::nextafter(1,0), 1024)
              << " (largest finite double)\n";
 
    // special values
    std::cout << "scalbn(-0, 10) = " << std::scalbn(-0.0, 10) << '\n'
              << "scalbn(-Inf, -1) = " << std::scalbn(-INFINITY, -1) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "scalbn(1, 1024) = " << std::scalbn(1, 1024) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_OVERFLOW))
        std::cout << "    FE_OVERFLOW raised\n";
}
```

## See also
- [frexpfrexpffrexpl](/cpp/numeric/math/frexp/)
- [ldexpldexpfldexpl](/cpp/numeric/math/ldexp/)
- [C documentation](/c/numeric/math/scalbn/)
