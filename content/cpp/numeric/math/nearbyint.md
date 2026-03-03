---
title: "std::nearbyint, std::nearbyintf, std::nearbyintl"
source_path: "cpp/numeric/math/nearbyint"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Rounds the floating-point argument num to an integer value in floating-point format, using the [current rounding mode](/cpp/numeric/fenv/fe_round/).The library provides overloads of std::nearbyint for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float nearbyint ( float num );
double nearbyint ( double num );
long double nearbyint ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
nearbyint ( /*floating-point-type*/ num );
```
_(since C++23)_

```cpp
float nearbyintf( float num );
```
_(since C++11)_

```cpp
long double nearbyintl( long double num );
```
_(since C++11)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
nearbyint ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double nearbyint ( Integer num );
```

## Parameters
- `num`: floating-point or integer value

## Return value
The nearest integer value to num, according to the [current rounding mode](/cpp/numeric/fenv/fe_round/), is returned.

## Notes
The only difference between std::nearbyint and [std::rint](/cpp/numeric/math/rint/) is that std::nearbyint never raises [FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/).

The largest representable floating-point values are exact integers in all standard floating-point formats, so std::nearbyint never overflows on its own; however the result may overflow any integer type (including [std::intmax_t](/cpp/types/integer/)), when stored in an integer variable.

If the current rounding mode is [FE_TONEAREST](/cpp/numeric/fenv/fe_round/), this function rounds to even in halfway cases (like [std::rint](/cpp/numeric/math/rint/), but unlike [std::round](/cpp/numeric/math/round/)).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::nearbyint(num) has the same effect as std::nearbyint(static_cast<double>(num)).

## Example
```cpp
#include <cfenv>
#include <cmath>
#include <iostream>
#pragma STDC FENV_ACCESS ON
 
int main()
{
    std::fesetround(FE_TONEAREST);
    std::cout << "rounding to nearest: \n"
              << "nearbyint(+2.3) = " << std::nearbyint(2.3)
              << "  nearbyint(+2.5) = " << std::nearbyint(2.5)
              << "  nearbyint(+3.5) = " << std::nearbyint(3.5) << '\n'
              << "nearbyint(-2.3) = " << std::nearbyint(-2.3)
              << "  nearbyint(-2.5) = " << std::nearbyint(-2.5)
              << "  nearbyint(-3.5) = " << std::nearbyint(-3.5) << '\n';
 
    std::fesetround(FE_DOWNWARD);
    std::cout << "rounding down:\n"
              << "nearbyint(+2.3) = " << std::nearbyint(2.3)
              << "  nearbyint(+2.5) = " << std::nearbyint(2.5)
              << "  nearbyint(+3.5) = " << std::nearbyint(3.5) << '\n'
              << "nearbyint(-2.3) = " << std::nearbyint(-2.3)
              << "  nearbyint(-2.5) = " << std::nearbyint(-2.5)
              << "  nearbyint(-3.5) = " << std::nearbyint(-3.5) << '\n';
 
    std::cout << "nearbyint(-0.0) = " << std::nearbyint(-0.0)  << '\n'
              << "nearbyint(-Inf) = " << std::nearbyint(-INFINITY) << '\n';
}
```

## See also
- [rintrintfrintllrintlrintflrintlllrintllrintfllrintl](/cpp/numeric/math/rint/)
- [roundroundfroundllroundlroundflroundlllroundllroundfllroundl](/cpp/numeric/math/round/)
- [fegetroundfesetround](/cpp/numeric/fenv/feround/)
- [C documentation](/c/numeric/math/nearbyint/)
