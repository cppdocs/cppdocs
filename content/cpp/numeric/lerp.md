---
title: "std::lerp"
source_path: "cpp/numeric/lerp"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1) Computes the [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) between a and b, if the parameter t is inside [0,1) (the [linear extrapolation](https://en.wikipedia.org/wiki/Extrapolation#Linear) otherwise), i.e. the result of \(a+t(b−a)\)a+t(b−a) with accounting for floating-point calculation imprecision.The library provides overloads for all cv-unqualified floating-point types as the type of the parameters a, b and t.(since C++23)

## Declarations
```cpp
constexpr float lerp( float a, float b, float t ) noexcept;
constexpr double lerp( double a, double b, double t ) noexcept;
constexpr long double lerp( long double a, long double b,
long double t ) noexcept;
```
_(since C++20) (until C++23)_

```cpp
constexpr /* floating-point-type */
lerp( /* floating-point-type */ a,
/* floating-point-type */ b,
/* floating-point-type */ t ) noexcept;
```
_(since C++23)_

```cpp
Additional overloads
```

```cpp
template< class Arithmetic1, class Arithmetic2, class Arithmetic3 >
constexpr /* common-floating-point-type */
lerp( Arithmetic1 a, Arithmetic2 b, Arithmetic3 t ) noexcept;
```
_(since C++20)_

## Parameters
- `a, b, t`: floating-point or integer values

## Return value
\(a + t(b − a)\)a + t(b − a)

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their first argument num1, second argument num2 and third argument num3:

If num1, num2 and num3 have arithmetic types, then std::lerp(num1, num2, num3) has the same effect as std::lerp(static_cast</*common-floating-point-type*/>(num1),static_cast</*common-floating-point-type*/>(num2),static_cast</*common-floating-point-type*/>(num3)), where /*common-floating-point-type*/ is the floating-point type with the greatest [floating-point conversion rank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_rank) and greatest [floating-point conversion subrank](/cpp/language/usual_arithmetic_conversions/#Floating-point_conversion_subrank) among the types of num1, num2 and num3, arguments of integer type are considered to have the same floating-point conversion rank as double.

If no such floating-point type with the greatest rank and subrank exists, then [overload resolution](/cpp/language/overload_resolution/) does not result in a usable candidate from the overloads provided.

## Example
```cpp
#include <cassert>
#include <cmath>
#include <iostream>
 
float naive_lerp(float a, float b, float t)
{
    return a + t * (b - a);
}
 
int main()
{
    std::cout << std::boolalpha;
 
    const float a = 1e8f, b = 1.0f;
    const float midpoint = std::lerp(a, b, 0.5f);
 
    std::cout << "a = " << a << ", " << "b = " << b << '\n'
              << "midpoint = " << midpoint << '\n';
 
    std::cout << "std::lerp is exact: "
              << (a == std::lerp(a, b, 0.0f)) << ' '
              << (b == std::lerp(a, b, 1.0f)) << '\n';
 
    std::cout << "naive_lerp is exact: "
              << (a == naive_lerp(a, b, 0.0f)) << ' '
              << (b == naive_lerp(a, b, 1.0f)) << '\n';
 
    std::cout << "std::lerp(a, b, 1.0f) = " << std::lerp(a, b, 1.0f) << '\n'
              << "naive_lerp(a, b, 1.0f) = " << naive_lerp(a, b, 1.0f) << '\n';
 
    assert(not std::isnan(std::lerp(a, b, INFINITY))); // lerp here can be -inf
 
    std::cout << "Extrapolation demo, given std::lerp(5, 10, t):\n";
    for (auto t{-2.0}; t <= 2.0; t += 0.5)
        std::cout << std::lerp(5.0, 10.0, t) << ' ';
    std::cout << '\n';
}
```

## See also
- [midpoint](/cpp/numeric/midpoint/)
