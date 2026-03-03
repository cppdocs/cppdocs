---
title: "std::atan(std::valarray)"
source_path: "cpp/numeric/valarray/atan"
header: "<valarray>"
category: "numeric"
---

For each element in va computes arc tangent of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> atan( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing arc tangents of the values in va.

## Notes
Unqualified function (atan) is used to perform the computation. If such function is not available, [std::atan](/cpp/numeric/math/atan/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <valarray>
 
auto show = [](char const* title, const std::valarray<float>& va)
{
    std::cout << title << " :";
    std::for_each(std::begin(va), std::end(va), 
        [](const float x) { std::cout << "  " << std::fixed << x; });
    std::cout << '\n';
};
 
int main()
{
    const std::valarray<float> x = {.1f, .3f, .6f, .9f};
    const std::valarray<float> f = std::atan(x);
    const std::valarray<float> g = std::tan(f);
 
    show("x          ", x);
    show("f = atan(x)", f);
    show("g = tan(f) ", g);
}
```

## See also
- [asin(std::valarray)](/cpp/numeric/valarray/asin/)
- [std::asin](/cpp/numeric/math/asin/)
- [acos(std::valarray)](/cpp/numeric/valarray/acos/)
- [std::acos](/cpp/numeric/math/acos/)
- [atan2(std::valarray)](/cpp/numeric/valarray/atan2/)
- [std::atan2](/cpp/numeric/math/atan2/)
- [tan(std::valarray)](/cpp/numeric/valarray/tan/)
- [std::tan](/cpp/numeric/math/tan/)
- [atanatanfatanl](/cpp/numeric/math/atan/)
- [atan(std::complex)](/cpp/numeric/complex/atan/)
