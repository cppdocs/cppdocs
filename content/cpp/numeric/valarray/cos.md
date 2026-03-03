---
title: "std::cos(std::valarray)"
source_path: "cpp/numeric/valarray/cos"
header: "<valarray>"
category: "numeric"
---

For each element in va computes cosine of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> cos( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing cosines of the values in va.

## Notes
Unqualified function (cos) is used to perform the computation. If such function is not available, [std::cos](/cpp/numeric/math/cos/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>
#include <valarray>
 
void show(const char* title, const std::valarray<float>& data)
{
    const int w{9};
    std::cout << std::setw(w) << title << " | ";
    for (float x : data)
        std::cout << std::setw(w) << x << " | ";
    std::cout << '\n';
}
 
int main()
{
    const std::valarray<float> x{.1, .2, .3, .4};
    const auto sin = std::sin(x);
    const auto cos = std::cos(x);
    const auto z = (sin * sin) + (cos * cos);
 
    show("x", x);
    show("sin(x)", sin);
    show("cos(x)", cos);
    show("z", z);
}
```

## See also
- [sin(std::valarray)](/cpp/numeric/valarray/sin/)
- [std::sin](/cpp/numeric/math/sin/)
- [tan(std::valarray)](/cpp/numeric/valarray/tan/)
- [std::tan](/cpp/numeric/math/tan/)
- [acos(std::valarray)](/cpp/numeric/valarray/acos/)
- [std::acos](/cpp/numeric/math/acos/)
- [coscosfcosl](/cpp/numeric/math/cos/)
- [cos(std::complex)](/cpp/numeric/complex/cos/)
