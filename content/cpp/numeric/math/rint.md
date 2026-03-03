---
title: "std::rint, std::rintf, std::rintl, std::lrint, std::lrintf, std::lrintl, std::llrint, std::llrintf"
source_path: "cpp/numeric/math/rint"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Rounds the floating-point argument num to an integer value (in floating-point format), using the [current rounding mode](/cpp/numeric/fenv/fe_round/).The library provides overloads of std::rint for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
Rounding to floating-point types
```

```cpp
float rint ( float num );
double rint ( double num );
long double rint ( long double num );
```
_(since C++11) (until C++23)_

```cpp
/* floating-point-type */ rint( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
float rintf( float num );
```
_(since C++11)_

```cpp
long double rintl( long double num );
```
_(since C++11)_

```cpp
Rounding to long
```

```cpp
long lrint ( float num );
long lrint ( double num );
long lrint ( long double num );
```
_(since C++11) (until C++23)_

```cpp
long lrint ( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
long lrintf( float num );
```
_(since C++11)_

```cpp
long lrintl( long double num );
```
_(since C++11)_

```cpp
Rounding to long long
```

```cpp
long long llrint ( float num );
long long llrint ( double num );
long long llrint ( long double num );
```
_(since C++11) (until C++23)_

```cpp
long long llrint ( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
long long llrintf( float num );
```
_(since C++11)_

```cpp
long long llrintl( long double num );
```
_(since C++11)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double rint( Integer num );
```
_(since C++11)_

```cpp
template< class Integer >
long lrint( Integer num );
```
_(since C++11)_

```cpp
template< class Integer >
long long llrint( Integer num );
```
_(since C++11)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the nearest integer value to num, according to the [current rounding mode](/cpp/numeric/fenv/fe_round/), is returned.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/lrint.html) that all cases where std::lrint or std::llrint raise [FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/) are domain errors.

As specified in [math_errhandling](/cpp/numeric/math/math_errhandling/), [FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/) may be (but isn't required to be on non-IEEE floating-point platforms) raised by std::rint when rounding a non-integer finite value.

The only difference between std::rint and [std::nearbyint](/cpp/numeric/math/nearbyint/) is that [std::nearbyint](/cpp/numeric/math/nearbyint/) never raises [FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/).

The largest representable floating-point values are exact integers in all standard floating-point formats, so std::rint never overflows on its own; however the result may overflow any integer type (including [std::intmax_t](/cpp/types/integer/)), when stored in an integer variable.

If the current rounding mode is:

The additional overloads are not required to be provided exactly as (A-C). They only need to be sufficient to ensure that for their argument num of integer type:

## Example
```cpp
#include <cfenv>
#include <climits>
#include <cmath>
#include <iostream>
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    std::fesetround(FE_TONEAREST);
    std::cout << "Rounding to nearest (halfway cases to even):\n"
              << "  rint(+2.3) = " << std::rint(2.3) << '\n'
              << "  rint(+2.5) = " << std::rint(2.5) << '\n'
              << "  rint(+3.5) = " << std::rint(3.5) << '\n'
              << "  rint(-2.3) = " << std::rint(-2.3) << '\n'
              << "  rint(-2.5) = " << std::rint(-2.5) << '\n'
              << "  rint(-3.5) = " << std::rint(-3.5) << '\n';
 
    std::fesetround(FE_DOWNWARD);
    std::cout << "Rounding down:\n"
              << "  rint(+2.3) = " << std::rint(2.3) << '\n'
              << "  rint(+2.5) = " << std::rint(2.5) << '\n'
              << "  rint(+3.5) = " << std::rint(3.5) << '\n'
              << "  rint(-2.3) = " << std::rint(-2.3) << '\n'
              << "  rint(-2.5) = " << std::rint(-2.5) << '\n'
              << "  rint(-3.5) = " << std::rint(-3.5) << '\n'
              << "Rounding down with lrint:\n"
              << "  lrint(+2.3) = " << std::lrint(2.3) << '\n'
              << "  lrint(+2.5) = " << std::lrint(2.5) << '\n'
              << "  lrint(+3.5) = " << std::lrint(3.5) << '\n'
              << "  lrint(-2.3) = " << std::lrint(-2.3) << '\n'
              << "  lrint(-2.5) = " << std::lrint(-2.5) << '\n'
              << "  lrint(-3.5) = " << std::lrint(-3.5) << '\n'
              << "Special values:\n"
              << "  lrint(-0.0) = " << std::lrint(-0.0) << '\n'
              << std::hex << std::showbase
              << "  lrint(-Inf) = " << std::lrint(-INFINITY) << '\n';
 
    // error handling
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "std::rint(0.1) = " << std::rint(.1) << '\n';
    if (std::fetestexcept(FE_INEXACT))
        std::cout << "  FE_INEXACT was raised\n";
 
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "std::lrint(LONG_MIN-2048.0) = "
              << std::lrint(LONG_MIN - 2048.0) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "  FE_INVALID was raised\n";
}
```

## See also
- [trunctruncftruncl](/cpp/numeric/math/trunc/)
- [nearbyintnearbyintfnearbyintl](/cpp/numeric/math/nearbyint/)
- [fegetroundfesetround](/cpp/numeric/fenv/feround/)
- [C documentation](/c/numeric/math/rint/)
