---
title: "std::cosh(std::valarray)"
source_path: "cpp/numeric/valarray/cosh"
header: "<valarray>"
category: "numeric"
---

For each element in va computes hyperbolic cosine of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> cosh( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing hyperbolic cosine of the values in va.

## Notes
Unqualified function (cosh) is used to perform the computation. If such function is not available, [std::cosh](/cpp/numeric/math/cosh/) is used due to [argument-dependent lookup](/cpp/language/adl/).

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
    const auto sinh = std::sinh(x);
    const auto cosh = std::cosh(x);
    const auto z = (cosh * cosh) - (sinh * sinh);
 
    show("x", x);
    show("sinh(x)", sinh);
    show("cosh(x)", cosh);
    show("z", z);
}
```

## See also
- [sinh(std::valarray)](/cpp/numeric/valarray/sinh/)
- [std::sinh](/cpp/numeric/math/sinh/)
- [tanh(std::valarray)](/cpp/numeric/valarray/tanh/)
- [std::tanh](/cpp/numeric/math/tanh/)
- [coshcoshfcoshl](/cpp/numeric/math/cosh/)
- [cosh(std::complex)](/cpp/numeric/complex/cosh/)
