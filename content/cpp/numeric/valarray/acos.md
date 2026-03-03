---
title: "std::acos(std::valarray)"
source_path: "cpp/numeric/valarray/acos"
header: "<valarray>"
category: "numeric"
---

For each element in va computes arc cosine of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> acos( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing arc cosines of the values in va.

## Notes
Unqualified function (acos) is used to perform the computation. If such function is not available, [std::acos](/cpp/numeric/math/acos/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <cmath>
#include <iostream>
#include <numbers>
#include <valarray>
 
int main()
{
    // take common x-values from unit circle
    const double s32 = std::sqrt(3.0) / 2.0;
    const double s22 = std::sqrt(2.0) / 2.0;
    std::valarray<double> v1 = {-1.0, -s32, -s22, -0.5, 0.0, 0.5, s22, s32, 1.0};
    std::valarray<double> v2 = std::acos(v1) * 180.0 / std::numbers::pi;
 
    for (double n : v2)
        std::cout << n << "° ";
    std::cout << '\n';
}
```

## See also
- [asin(std::valarray)](/cpp/numeric/valarray/asin/)
- [std::asin](/cpp/numeric/math/asin/)
- [atan(std::valarray)](/cpp/numeric/valarray/atan/)
- [std::atan](/cpp/numeric/math/atan/)
- [atan2(std::valarray)](/cpp/numeric/valarray/atan2/)
- [std::atan2](/cpp/numeric/math/atan2/)
- [cos(std::valarray)](/cpp/numeric/valarray/cos/)
- [std::cos](/cpp/numeric/math/cos/)
- [acosacosfacosl](/cpp/numeric/math/acos/)
- [acos(std::complex)](/cpp/numeric/complex/acos/)
