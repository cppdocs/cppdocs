---
title: "std::sin(std::valarray)"
source_path: "cpp/numeric/valarray/sin"
header: "<valarray>"
category: "numeric"
---

For each element in va computes sine of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> sin( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing sine of the values in va.

## Notes
Unqualified function (sin) is used to perform the computation. If such function is not available, [std::sin](/cpp/numeric/math/sin/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <cmath>
#include <iostream>
#include <numbers>
#include <valarray>
 
int main()
{
    std::valarray<double> v1 = {0, 0.25, 0.5, 0.75, 1};
    std::valarray<double> v2 = std::sin(v1 * std::numbers::pi);
 
    for (double n : v2)
        std::cout << std::fixed << n << ' ';
    std::cout << '\n';
}
```

## See also
- [cos(std::valarray)](/cpp/numeric/valarray/cos/)
- [std::cos](/cpp/numeric/math/cos/)
- [tan(std::valarray)](/cpp/numeric/valarray/tan/)
- [std::tan](/cpp/numeric/math/tan/)
- [asin(std::valarray)](/cpp/numeric/valarray/asin/)
- [std::asin](/cpp/numeric/math/asin/)
- [sinsinfsinl](/cpp/numeric/math/sin/)
- [sin(std::complex)](/cpp/numeric/complex/sin/)
