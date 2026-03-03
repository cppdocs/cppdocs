---
title: "std::remainder, std::remainderf, std::remainderl"
source_path: "cpp/numeric/math/remainder"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the IEEE remainder of the floating point division operation x / y.The library provides overloads of std::remainder for all cv-unqualified floating-point types as the type of the parameters.(since C++23)

## Declarations
```cpp
float remainder ( float x, float y );
double remainder ( double x, double y );
long double remainder ( long double x, long double y );
```
_(until C++23)_

```cpp
constexpr /*floating-point-type*/
remainder ( /*floating-point-type*/ x,
/*floating-point-type*/ y );
```
_(since C++23)_

```cpp
float remainderf( float x, float y );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double remainderl( long double x, long double y );
```
_(since C++11) (constexpr since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< class V0, class V1 >
constexpr /*math-common-simd-t*/<V0, V1>
remainder ( const V0& v_x, const V1& v_y );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double remainder ( Integer x, Integer y );
```
_(constexpr since C++23)_

## Parameters
- `x, y`: floating-point or integer values

## Return value
If successful, returns the IEEE floating-point remainder of the division x / y as defined above.

## Notes
[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/remainder.html) that a domain error occurs if x is infinite or y is zero.

[std::fmod](/cpp/numeric/math/fmod/), but not std::remainder is useful for doing silent wrapping of floating-point types to unsigned integer types: (0.0 <= (y = [std::fmod](/cpp/numeric/math/fmod/)([std::rint](/cpp/numeric/math/rint/)(x), 65536.0)) ? y : 65536.0 + y) is in the range [-0.0,65535.0], which corresponds to unsigned short, but std::remainder([std::rint](/cpp/numeric/math/rint/)(x), 65536.0) is in the range [-32767.0,+32768.0], which is outside of the range of signed short.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::remainder(num1, num2) has the same effect as std::remainder(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cfenv>
#include <cmath>
#include <iostream>
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    std::cout << "remainder(+5.1, +3.0) = " << std::remainder(5.1, 3) << '\n'
              << "remainder(-5.1, +3.0) = " << std::remainder(-5.1, 3) << '\n'
              << "remainder(+5.1, -3.0) = " << std::remainder(5.1, -3) << '\n'
              << "remainder(-5.1, -3.0) = " << std::remainder(-5.1, -3) << '\n';
 
    // special values
    std::cout << "remainder(-0.0, 1.0) = " << std::remainder(-0.0, 1) << '\n'
              << "remainder(5.1, Inf) = " << std::remainder(5.1, INFINITY) << '\n';
 
    // error handling
    std::feclearexcept(FE_ALL_EXCEPT);
    std::cout << "remainder(+5.1, 0) = " << std::remainder(5.1, 0) << '\n';
    if (fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised\n";
}
```

## See also
- [div(int)ldivlldiv](/cpp/numeric/math/div/)
- [fmodfmodffmodl](/cpp/numeric/math/fmod/)
- [remquoremquofremquol](/cpp/numeric/math/remquo/)
- [C documentation](/c/numeric/math/remainder/)
