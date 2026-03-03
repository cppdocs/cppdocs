---
title: "std::ilogb, std::ilogbf, std::ilogbl"
source_path: "cpp/numeric/math/ilogb"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Extracts the value of the unbiased exponent from the floating-point argument num, and returns it as a signed integer value.The library provides overloads of std::ilogb for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
int ilogb ( float num );
int ilogb ( double num );
int ilogb ( long double num );
```
_(since C++11) (until C++23)_

```cpp
constexpr int ilogb( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
int ilogbf( float num );
```
_(since C++11) (constexpr since C++23)_

```cpp
int ilogbl( long double num );
```
_(since C++11) (constexpr since C++23)_

```cpp
#define FP_ILOGB0 /* implementation-defined */
```
_(since C++11)_

```cpp
#define FP_ILOGBNAN /* implementation-defined */
```
_(since C++11)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
int ilogb ( Integer num );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the unbiased exponent of num is returned as a signed int value.

## Notes
If num is not zero, infinite, or NaN, the value returned is exactly equivalent to static_cast<int>([std::logb](/cpp/numeric/math/logb/)(num)).

[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/ilogb.html) that a domain error occurs if num is zero, infinite, NaN, or if the correct result is outside of the range of int.

POSIX also requires that, on XSI-conformant systems, the value returned when the correct result is greater than [INT_MAX](/cpp/types/climits/) is [INT_MAX](/cpp/types/climits/) and the value returned when the correct result is less than [INT_MIN](/cpp/types/climits/) is [INT_MIN](/cpp/types/climits/).

The correct result can be represented as int on all known implementations. For overflow to occur, [INT_MAX](/cpp/types/climits/) must be less than [LDBL_MAX_EXP](/cpp/types/climits/) * [std::log2](/cpp/numeric/math/log2/)([FLT_RADIX](/cpp/types/climits/)) or [INT_MIN](/cpp/types/climits/) must be greater than [LDBL_MIN_EXP](/cpp/types/climits/) - [LDBL_MANT_DIG](/cpp/types/climits/)) * [std::log2](/cpp/numeric/math/log2/)([FLT_RADIX](/cpp/types/climits/)).

The value of the exponent returned by std::ilogb is always 1 less than the exponent retuned by [std::frexp](/cpp/numeric/math/frexp/) because of the different normalization requirements: for the exponent e returned by std::ilogb, |num*r-e| is between 1 and r (typically between 1 and 2), but for the exponent e returned by [std::frexp](/cpp/numeric/math/frexp/), |num*2-e| is between 0.5 and 1.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::ilogb(num) has the same effect as std::ilogb(static_cast<double>(num)).

## Example
```cpp
#include <cfenv>
#include <cmath>
#include <iostream>
#include <limits>
 
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    double f = 123.45;
    std::cout << "Given the number " << f << " or " << std::hexfloat
              << f << std::defaultfloat << " in hex,\n";
 
    double f3;
    double f2 = std::modf(f, &f3);
    std::cout << "modf() makes " << f3 << " + " << f2 << '\n';
 
    int i;
    f2 = std::frexp(f, &i);
    std::cout << "frexp() makes " << f2 << " * 2^" << i << '\n';
 
    i = std::ilogb(f);
    std::cout << "logb()/ilogb() make " << f / std::scalbn(1.0, i) << " * "
              << std::numeric_limits<double>::radix
              << "^" << std::ilogb(f) << '\n';
 
    // error handling
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "ilogb(0) = " << std::ilogb(0) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised\n";
}
```

## See also
- [frexpfrexpffrexpl](/cpp/numeric/math/frexp/)
- [logblogbflogbl](/cpp/numeric/math/logb/)
- [scalbnscalbnfscalbnlscalblnscalblnfscalblnl](/cpp/numeric/math/scalbn/)
- [FLT_RADIX](/cpp/types/climits/)
- [C documentation](/c/numeric/math/ilogb/)
