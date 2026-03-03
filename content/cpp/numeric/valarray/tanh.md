---
title: "std::tanh(std::valarray)"
source_path: "cpp/numeric/valarray/tanh"
header: "<valarray>"
category: "numeric"
---

For each element in va computes hyperbolic tangent of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> tanh( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing hyperbolic tangent of the values in va.

## Notes
Unqualified function (tanh) is used to perform the computation. If such function is not available, [std::tanh](/cpp/numeric/math/tanh/) is used due to [argument-dependent lookup](/cpp/language/adl/).

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
    const std::valarray<double> sinh = std::sinh(x);
    const std::valarray<double> cosh = std::cosh(x);
    const std::valarray<double> tanh = std::tanh(x);
    const std::valarray<double> tanh_by_def = sinh / cosh;
    const std::valarray<double> tanh_2x = std::tanh(2.0 * x);
    const std::valarray<double> tanh_2x_by_def = 
        (2.0 * tanh) / (1.0 + std::pow(tanh, 2.0));
 
    show("x              ", x);
    show("tanh(x)        ", tanh);
    show("tanh(x) (def)  ", tanh_by_def);
    show("tanh(2*x)      ", tanh_2x);
    show("tanh(2*x) (def)", tanh_2x_by_def);
}
```

## See also
- [sinh(std::valarray)](/cpp/numeric/valarray/sinh/)
- [std::sinh](/cpp/numeric/math/sinh/)
- [cosh(std::valarray)](/cpp/numeric/valarray/cosh/)
- [std::cosh](/cpp/numeric/math/cosh/)
- [tanhtanhftanhl](/cpp/numeric/math/tanh/)
- [tanh(std::complex)](/cpp/numeric/complex/tanh/)
