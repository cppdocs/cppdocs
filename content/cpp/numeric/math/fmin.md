---
title: "std::fmin, std::fminf, std::fminl"
source_path: "cpp/numeric/math/fmin"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Returns the smaller of two floating point arguments, treating NaNs as missing data (between a NaN and a numeric value, the numeric value is chosen).The library provides overloads of std::fmin for all cv-unqualified floating-point types as the type of the parameters.(since C++23)

## Declarations
```cpp
float fmin ( float x, float y );
double fmin ( double x, double y );
long double fmin ( long double x, long double y );
```
_(until C++23)_

```cpp
constexpr /*floating-point-type*/
fmin ( /*floating-point-type*/ x,
/*floating-point-type*/ y );
```
_(since C++23)_

```cpp
float fminf( float x, float y );
```
_(since C++11) (constexpr since C++23)_

```cpp
long double fminl( long double x, long double y );
```
_(since C++11) (constexpr since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< class V0, class V1 >
constexpr /*math-common-simd-t*/<V0, V1>
fmin ( const V0& v_x, const V1& v_y );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double fmin ( Integer x, Integer y );
```
_(constexpr since C++23)_

## Parameters
- `x, y`: floating-point or integer values

## Return value
If successful, returns the smaller of two floating point values. The value returned is exact and does not depend on any rounding modes.

## Notes
This function is not required to be sensitive to the sign of zero, although some implementations additionally enforce that if one argument is +0 and the other is -0, then -0 is returned.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::fmin(num1, num2) has the same effect as std::fmin(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cmath>
#include <iostream>
 
int main()
{
    std::cout << "fmin(2,1)    = " << std::fmin(2, 1) << '\n'
              << "fmin(-Inf,0) = " << std::fmin(-INFINITY, 0) << '\n'
              << "fmin(NaN,-1) = " << std::fmin(NAN, -1) << '\n';
}
```

## See also
- [isless](/cpp/numeric/math/isless/)
- [fmaxfmaxffmaxl](/cpp/numeric/math/fmax/)
- [min](/cpp/algorithm/min/)
- [min_element](/cpp/algorithm/min_element/)
- [minmax](/cpp/algorithm/minmax/)
- [minmax_element](/cpp/algorithm/minmax_element/)
- [C documentation](/c/numeric/math/fmin/)
