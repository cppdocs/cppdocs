---
title: "std::atan2(std::valarray)"
source_path: "cpp/numeric/valarray/atan2"
header: "<valarray>"
category: "numeric"
---

Computes the inverse tangent of y / x using the signs of arguments to correctly determine quadrant.

## Declarations
```cpp
template< class T >
std::valarray<T> atan2( const std::valarray<T>& y, const std::valarray<T>& x );
```

```cpp
template< class T >
std::valarray<T> atan2( const std::valarray<T>& y,
const typename std::valarray<T>::value_type& vx );
```

```cpp
template< class T >
std::valarray<T> atan2( const typename std::valarray<T>::value_type& vy,
const std::valarray<T>& x );
```

## Parameters
- `x, y`: numeric arrays to compute inverse tangent of
- `vy, vx`: values to compute inverse tangent of

## Return value
A numeric array containing the results of computation of inverse tangent.

## Notes
Unqualified function (atan2) is used to perform the computation. If such function is not available, [std::atan2](/cpp/numeric/math/atan2/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <iomanip>
#include <iostream>
#include <valarray>
 
void show(char const* title, const std::valarray<double>& va)
{
    std::cout << title << ' ';
    std::for_each(std::begin(va), std::end(va), [](const double x)
    { 
        std::cout << ' ' << std::right << std::setw(4) << x << "°";
    });
    std::cout << '\n';
}
 
const double pi = std::acos(-1.0); // C++20: std::numbers::pi
 
int main()
{
    auto degrees_to_radians = [](double const& x) { return (pi * x / 180); };
    auto radians_to_degrees = [](double const& x) { return (180 * x / pi); };
 
    const std::valarray<double> degrees{-90, -60, -45, -30, 0, 30, 45, 60, 90};
    const std::valarray<double> radians = degrees.apply(degrees_to_radians);
 
    const auto sin = std::sin(radians);
    const auto cos = std::cos(radians);
 
    show("(1)", std::atan2(sin, cos).apply(radians_to_degrees));
    show("(2)", std::atan2(sin/cos, 1.0).apply(radians_to_degrees));
    show("(3)", std::atan2(1.0, cos/sin).apply(radians_to_degrees));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3074 | C++98 | T is deduced from both the scalar and the valarray for (2,3), disallowing mixed-type calls | only deduce T from the valarray |

## See also
- [asin(std::valarray)](/cpp/numeric/valarray/asin/)
- [std::asin](/cpp/numeric/math/asin/)
- [acos(std::valarray)](/cpp/numeric/valarray/acos/)
- [std::acos](/cpp/numeric/math/acos/)
- [atan(std::valarray)](/cpp/numeric/valarray/atan/)
- [std::atan](/cpp/numeric/math/atan/)
- [atan2atan2fatan2l](/cpp/numeric/math/atan2/)
- [arg](/cpp/numeric/complex/arg/)
