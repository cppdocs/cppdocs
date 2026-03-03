---
title: "std::tan(std::valarray)"
source_path: "cpp/numeric/valarray/tan"
header: "<valarray>"
category: "numeric"
---

For each element in va computes tangent of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> tan( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing tangents of the values in va.

## Notes
Unqualified function (tan) is used to perform the computation. If such function is not available, [std::tan](/cpp/numeric/math/tan/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <cmath>
#include <iostream>
#include <valarray>
 
auto show = [](char const* title, const std::valarray<double>& va)
{
    std::cout << title << " :";
    for (auto x : va)
        std::cout << "  " << std::fixed << x;
    std::cout << '\n';
};
 
int main()
{
    const std::valarray<double> x = {.0, .1, .2, .3};
    const std::valarray<double> y = std::tan(x);
    const std::valarray<double> z = std::atan(y);
 
    show("x          ", x);
    show("y = tan(x) ", y);
    show("z = atan(y)", z);
}
```

## See also
- [sin(std::valarray)](/cpp/numeric/valarray/sin/)
- [std::sin](/cpp/numeric/math/sin/)
- [cos(std::valarray)](/cpp/numeric/valarray/cos/)
- [std::cos](/cpp/numeric/math/cos/)
- [atan(std::valarray)](/cpp/numeric/valarray/atan/)
- [std::atan](/cpp/numeric/math/atan/)
- [tantanftanl](/cpp/numeric/math/tan/)
- [tan(std::complex)](/cpp/numeric/complex/tan/)
