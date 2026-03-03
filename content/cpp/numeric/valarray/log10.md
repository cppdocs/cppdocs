---
title: "std::log10(std::valarray)"
source_path: "cpp/numeric/valarray/log10"
header: "<valarray>"
category: "numeric"
---

For each element in va computes common (base 10) logarithm of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> log10( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing common logarithms of the values in va.

## Notes
Unqualified function (log10) is used to perform the computation. If such function is not available, [std::log10](/cpp/numeric/math/log10/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>
#include <valarray>
 
void show(char const* title, const std::valarray<float>& va)
{
    std::cout << title << " : " << std::right;
    for (float x : va)
        std::cout << std::setw(6) << x;
    std::cout << '\n';
}
 
int main()
{
    const std::valarray<float> n{-2.f, -1.f, 0.f, 1.f, 2.f, 3.f, INFINITY};
    const std::valarray<float> pow10{std::pow(10.f, n)};
    const std::valarray<float> log10_pow10{std::log10(pow10)};
 
    show("n      ", n);
    show("10ⁿ    ", pow10);
    show("lg(10ⁿ)", log10_pow10);
}
```

## See also
- [log(std::valarray)](/cpp/numeric/valarray/log/)
- [std::log](/cpp/numeric/math/log/)
- [log10log10flog10l](/cpp/numeric/math/log10/)
- [log10(std::complex)](/cpp/numeric/complex/log10/)
