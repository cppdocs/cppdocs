---
title: "std::copysign, std::copysignf, std::copysignl"
source_path: "cpp/numeric/math/copysign"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Composes a floating point value with the magnitude of mag and the sign of sgn.The library provides overloads of std::copysign for all cv-unqualified floating-point types as the type of the parameters.(since C++23)

## Declarations
```cpp
float copysign ( float mag, float sgn );
double copysign ( double mag, double sgn );
long double copysign ( long double mag, long double sgn );
```
_(until C++23)_

```cpp
constexpr /*floating-point-type*/
copysign ( /*floating-point-type*/ mag,
/*floating-point-type*/ sgn );
```
_(since C++23)_

```cpp
float copysignf( float mag, float sgn );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double copysignl( long double mag, long double sgn );
```
_(since C++11) (constexpr since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< class V0, class V1 >
constexpr /*math-common-simd-t*/<V0, V1>
copysign ( const V0& v_mag, const V1& v_sgn );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double copysign ( Integer mag, Integer sgn );
```
_(constexpr since C++23)_

## Parameters
- `mag, sgn`: floating-point or integer values

## Return value
If no errors occur, the floating point value with the magnitude of mag and the sign of sgn is returned.

## Notes
std::copysign is the only portable way to manipulate the sign of a NaN value (to examine the sign of a NaN, [std::signbit](/cpp/numeric/math/signbit/) may also be used).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::copysign(num1, num2) has the same effect as std::copysign(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << std::showpos
              << "copysign(1.0,+2.0) = " << std::copysign(1.0, +2.0) << '\n'
              << "copysign(1.0,-2.0) = " << std::copysign(1.0, -2.0) << '\n'
              << "copysign(inf,-2.0) = " << std::copysign(INFINITY, -2.0) << '\n'
              << "copysign(NaN,-2.0) = " << std::copysign(NAN, -2.0) << '\n';
}
```

## See also
- [abs(float)fabsfabsffabsl](/cpp/numeric/math/fabs/)
- [signbit](/cpp/numeric/math/signbit/)
- [C documentation](/c/numeric/math/copysign/)
