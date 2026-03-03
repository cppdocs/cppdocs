---
title: "std::atanh, std::atanhf, std::atanhl"
source_path: "cpp/numeric/math/atanh"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the inverse hyperbolic tangent of num.The library provides overloads of std::atanh for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float atanh ( float num );
double atanh ( double num );
long double atanh ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
atanh ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float atanhf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double atanhl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
atanh ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double atanh ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the inverse hyperbolic tangent of num (tanh-1(num), or artanh(num)), is returned.

## Notes
Although the C standard (to which C++ refers for this function) names this function "arc hyperbolic tangent", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "inverse hyperbolic tangent" (used by POSIX) or "area hyperbolic tangent".

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/atanh.html) that in case of underflow, num is returned unmodified, and if that is not supported, an implementation-defined value no greater than [DBL_MIN](/cpp/types/climits/), [FLT_MIN](/cpp/types/climits/), and [LDBL_MIN](/cpp/types/climits/) is returned.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::atanh(num) has the same effect as std::atanh(static_cast<double>(num)).

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cfloat>
#include <cmath>
#include <cstring>
#include <iostream>
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    std::cout << "atanh(0) = " << std::atanh(0) << '\n'
              << "atanh(-0) = " << std::atanh(-0.0) << '\n'
              << "atanh(0.9) = " << std::atanh(0.9) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "atanh(-1) = " << std::atanh(-1) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_DIVBYZERO))
        std::cout << "    FE_DIVBYZERO raised\n";
}
```

## See also
- [asinhasinhfasinhl](/cpp/numeric/math/asinh/)
- [acoshacoshfacoshl](/cpp/numeric/math/acosh/)
- [tanhtanhftanhl](/cpp/numeric/math/tanh/)
- [atanh(std::complex)](/cpp/numeric/complex/atanh/)
- [C documentation](/c/numeric/math/atanh/)
