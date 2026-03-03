---
title: "std::logb, std::logbf, std::logbl"
source_path: "cpp/numeric/math/logb"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Extracts the value of the unbiased radix-independent exponent from the floating-point argument num, and returns it as a floating-point value.The library provides overloads of std::logb for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float logb ( float num );
double logb ( double num );
long double logb ( long double num );
```
_(until C++23)_

```cpp
constexpr /*floating-point-type*/
logb ( /*floating-point-type*/ num );
```
_(since C++23)_

```cpp
float logbf( float num );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double logbl( long double num );
```
_(since C++11) (constexpr since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
logb ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double logb ( Integer num );
```
_(constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the unbiased exponent of num is returned as a signed floating-point value.

## Notes
[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/logb.html) that a pole error occurs if num is ±0.

The value of the exponent returned by std::logb is always 1 less than the exponent returned by [std::frexp](/cpp/numeric/math/frexp/) because of the different normalization requirements: for the exponent e returned by std::logb, |num*r-e| is between 1 and r (typically between 1 and 2), but for the exponent e returned by [std::frexp](/cpp/numeric/math/frexp/), |num*2-e| is between 0.5 and 1.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::logb(num) has the same effect as std::logb(static_cast<double>(num)).

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
 
    std::cout << "logb(0) = " << std::logb(0) << '\n';
    if (std::fetestexcept(FE_DIVBYZERO))
        std::cout << "    FE_DIVBYZERO raised\n";
}
```

## See also
- [frexpfrexpffrexpl](/cpp/numeric/math/frexp/)
- [ilogbilogbfilogbl](/cpp/numeric/math/ilogb/)
- [scalbnscalbnfscalbnlscalblnscalblnfscalblnl](/cpp/numeric/math/scalbn/)
- [FLT_RADIX](/cpp/types/climits/)
- [C documentation](/c/numeric/math/logb/)
