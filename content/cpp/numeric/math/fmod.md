---
title: "std::fmod, std::fmodf, std::fmodl"
source_path: "cpp/numeric/math/fmod"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the floating-point remainder of the division operation x / y.The library provides overloads of std::fmod for all cv-unqualified floating-point types as the type of the parameters.(since C++23)

## Declarations
```cpp
float fmod ( float x, float y );
double fmod ( double x, double y );
long double fmod ( long double x, long double y );
```
_(until C++23)_

```cpp
constexpr /*floating-point-type*/
fmod ( /*floating-point-type*/ x,
/*floating-point-type*/ y );
```
_(since C++23)_

```cpp
float fmodf( float x, float y );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double fmodl( long double x, long double y );
```
_(since C++11) (constexpr since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< class V0, class V1 >
constexpr /*math-common-simd-t*/<V0, V1>
fmod ( const V0& v_x, const V1& v_y );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double fmod ( Integer x, Integer y );
```
_(constexpr since C++23)_

## Parameters
- `x, y`: floating-point or integer values

## Return value
If successful, returns the floating-point remainder of the division x / y as defined above.

## Notes
[POSIX requires](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fmod.html) that a domain error occurs if x is infinite or y is zero.

std::fmod, but not [std::remainder](/cpp/numeric/math/remainder/) is useful for doing silent wrapping of floating-point types to unsigned integer types: (0.0 <= (y = std::fmod([std::rint](/cpp/numeric/math/rint/)(x), 65536.0)) ? y : 65536.0 + y) is in the range [-0.0,65535.0], which corresponds to unsigned short, but [std::remainder](/cpp/numeric/math/remainder/)([std::rint](/cpp/numeric/math/rint/)(x), 65536.0 is in the range [-32767.0,+32768.0], which is outside of the range of signed short.

The double version of std::fmod behaves as if implemented as follows:

The expression x - [std::trunc](/cpp/numeric/math/trunc/)(x / y) * y may not equal std::fmod(x, y), when the rounding of x / y to initialize the argument of [std::trunc](/cpp/numeric/math/trunc/) loses too much precision (example: x = 30.508474576271183309, y = 6.1016949152542370172).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::fmod(num1, num2) has the same effect as std::fmod(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cfenv>
#include <cmath>
#include <iostream>
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    std::cout << "fmod(+5.1, +3.0) = " << std::fmod(5.1, 3) << '\n'
              << "fmod(-5.1, +3.0) = " << std::fmod(-5.1, 3) << '\n'
              << "fmod(+5.1, -3.0) = " << std::fmod(5.1, -3) << '\n'
              << "fmod(-5.1, -3.0) = " << std::fmod(-5.1, -3) << '\n';
 
    // special values
    std::cout << "fmod(+0.0, 1.0) = " << std::fmod(0, 1) << '\n'
              << "fmod(-0.0, 1.0) = " << std::fmod(-0.0, 1) << '\n'
              << "fmod(5.1, Inf) = " << std::fmod(5.1, INFINITY) << '\n';
 
    // error handling
    std::feclearexcept(FE_ALL_EXCEPT);
    std::cout << "fmod(+5.1, 0) = " << std::fmod(5.1, 0) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised\n";
}
```

## See also
- [div(int)ldivlldiv](/cpp/numeric/math/div/)
- [remainderremainderfremainderl](/cpp/numeric/math/remainder/)
- [remquoremquofremquol](/cpp/numeric/math/remquo/)
- [C documentation](/c/numeric/math/fmod/)
