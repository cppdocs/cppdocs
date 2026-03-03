---
title: "std::sinh(std::valarray)"
source_path: "cpp/numeric/valarray/sinh"
header: "<valarray>"
category: "numeric"
---

For each element in va computes hyperbolic sine of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> sinh( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing hyperbolic sine of the values in va.

## Notes
Unqualified function (sinh) is used to perform the computation. If such function is not available, [std::sinh](/cpp/numeric/math/sinh/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <cmath>
#include <complex>
#include <iomanip>
#include <iostream>
#include <valarray>
 
template<typename T>
void show(char const* title, const std::valarray<T>& va)
{
    std::cout << title << " : " << std::right;
    for (T x : va)
        std::cout << std::fixed << x << ' ';
    std::cout << '\n';
}
 
template<typename T>
void sinh_for(std::valarray<T> const& z)
{
    // Hyperbolic sine is sinh(z) = (eᶻ - e⁻ᶻ) / 2.
 
    const std::valarray<T> sinh_z{std::sinh(z)};
    const std::valarray<T> e_z{std::exp(z)};
    const std::valarray<T> e_neg_z{std::exp(-z)};
    const std::valarray<T> sinh_def{(e_z - e_neg_z) / 2.0f};
 
    show("n         ", z);
    show("sinh(n)   ", sinh_z);
    show("(eⁿ-e⁻ⁿ)/2", sinh_def);
 
    std::cout.put('\n');
}
 
int main()
{
    sinh_for(std::valarray<float>{-.2f, -.1f, 0.f, .1f, .2f, INFINITY});
    sinh_for(std::valarray<std::complex<double>>{{-.2,-.1}, {.2,.1}});
}
```

## See also
- [cosh(std::valarray)](/cpp/numeric/valarray/cosh/)
- [std::cosh](/cpp/numeric/math/cosh/)
- [tanh(std::valarray)](/cpp/numeric/valarray/tanh/)
- [std::tanh](/cpp/numeric/math/tanh/)
- [sinhsinhfsinhl](/cpp/numeric/math/sinh/)
- [sinh(std::complex)](/cpp/numeric/complex/sinh/)
