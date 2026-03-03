---
title: "std::atan2, std::atan2f, std::atan2l"
source_path: "cpp/numeric/math/atan2"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the arc tangent of y / x using the signs of arguments to determine the correct quadrant.The library provides overloads of std::atan2 for all cv-unqualified floating-point types as the type of the parameters.(since C++23)

## Declarations
```cpp
float atan2 ( float y, float x );
double atan2 ( double y, double x );
long double atan2 ( long double y, long double x );
```
_(until C++23)_

```cpp
/*floating-point-type*/
atan2 ( /*floating-point-type*/ y,
/*floating-point-type*/ x );
```
_(since C++23) (constexpr since C++26)_

```cpp
float atan2f( float y, float x );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double atan2l( long double y, long double x );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< class V0, class V1 >
constexpr /*math-common-simd-t*/<V0, V1>
atan2 ( const V0& v_y, const V1& v_x );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double atan2 ( Integer y, Integer x );
```
_(constexpr since C++26)_

## Parameters
- `y, x`: floating-point or integer values

## Return value
If a domain error occurs, an implementation-defined value is returned (NaN where supported).

## Notes
std::atan2(y, x) is equivalent to [std::arg](/cpp/numeric/complex/arg/)([std::complex](/cpp/numeric/complex/)<[std::common_type_t](/cpp/types/common_type/)<decltype(x), decltype(y)>>(x, y)).

[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/atan2.html) that in case of underflow, the value y / x is returned, and if that is not supported, an implementation-defined value no greater than [DBL_MIN](/cpp/types/climits/), [FLT_MIN](/cpp/types/climits/), and [LDBL_MIN](/cpp/types/climits/) is returned.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1 and second argument num2:

If num1 and num2 have arithmetic types, then std::atan2(num1, num2) has the same effect as std::atan2(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) between the types of num1 and num2, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cmath>
#include <iostream>
 
void print_coordinates(int x, int y)
{
    std::cout << std::showpos
              << "(x:" << x << ", y:" << y << ") cartesian is "
              << "(r:" << std::hypot(x, y)
              << ", phi:" << std::atan2(y, x) << ") polar\n";
}
 
int main()
{
    // normal usage: the signs of the two arguments determine the quadrant
    print_coordinates(+1, +1); // atan2( 1,  1) =  +pi/4, Quad I
    print_coordinates(-1, +1); // atan2( 1, -1) = +3pi/4, Quad II
    print_coordinates(-1, -1); // atan2(-1, -1) = -3pi/4, Quad III
    print_coordinates(+1, -1); // atan2(-1,  1) =  -pi/4, Quad IV
 
    // special values
    std::cout << std::noshowpos
              << "atan2(0, 0) = " << atan2(0, 0) << '\n'
              << "atan2(0,-0) = " << atan2(0, -0.0) << '\n'
              << "atan2(7, 0) = " << atan2(7, 0) << '\n'
              << "atan2(7,-0) = " << atan2(7, -0.0) << '\n';
}
```

## See also
- [asinasinfasinl](/cpp/numeric/math/asin/)
- [acosacosfacosl](/cpp/numeric/math/acos/)
- [atanatanfatanl](/cpp/numeric/math/atan/)
- [arg](/cpp/numeric/complex/arg/)
- [atan2(std::valarray)](/cpp/numeric/valarray/atan2/)
- [C documentation](/c/numeric/math/atan2/)
