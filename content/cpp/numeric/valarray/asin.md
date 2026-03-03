---
title: "std::asin(std::valarray)"
source_path: "cpp/numeric/valarray/asin"
header: "<valarray>"
category: "numeric"
---

For each element in va computes arc sine of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> asin( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing arc sines of the values in va.

## Notes
Unqualified function (asin) is used to perform the computation. If such function is not available, [std::asin](/cpp/numeric/math/asin/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <cmath>
#include <iostream>
#include <numbers>
#include <valarray>
 
int main()
{
    // take common y-values from unit circle
    const double s22 = std::sqrt(2.0) / 2.0;
    const double s32 = std::sqrt(3.0) / 2.0;
    const std::valarray<double> v1 =
        {-1.0, -s32, -s22, -0.5,  0.0,  0.5, s22,  s32,  1.0};
 
    // fill with results of radians to degrees conversion
    const std::valarray<double> v2 = 
        std::asin(v1) * 180.0 / std::numbers::pi;
 
    for (std::cout << std::showpos; double n : v2)
        std::cout << n << "° ";
    std::cout << '\n';
}
```

## See also
- [acos(std::valarray)](/cpp/numeric/valarray/acos/)
- [std::acos](/cpp/numeric/math/acos/)
- [atan(std::valarray)](/cpp/numeric/valarray/atan/)
- [std::atan](/cpp/numeric/math/atan/)
- [atan2(std::valarray)](/cpp/numeric/valarray/atan2/)
- [std::atan2](/cpp/numeric/math/atan2/)
- [sin(std::valarray)](/cpp/numeric/valarray/sin/)
- [std::sin](/cpp/numeric/math/sin/)
- [asinasinfasinl](/cpp/numeric/math/asin/)
- [asin(std::complex)](/cpp/numeric/complex/asin/)
