---
title: "std::exp(std::valarray)"
source_path: "cpp/numeric/valarray/exp"
header: "<valarray>"
category: "numeric"
---

For each element in va computes e raised to the power equal to the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> exp( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing e raised by the values in va.

## Notes
Unqualified function (exp) is used to perform the computation. If such function is not available, [std::exp](/cpp/numeric/math/exp/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <complex>
#include <iostream>
#include <numbers>
#include <valarray>
 
int main()
{
    const double pi = std::numbers::pi;
    std::valarray<std::complex<double>> v =
    {
        {0, 0}, {0, pi / 2}, {0, pi}, {0, 3 * pi / 2}, {0, 2 * pi}
    };
    std::valarray<std::complex<double>> v2 = std::exp(v);
    for (std::cout << std::showpos << std::fixed; auto n : v2)
        std::cout << n << '\n';
}
```

## See also
- [log(std::valarray)](/cpp/numeric/valarray/log/)
- [std::log](/cpp/numeric/math/log/)
- [expexpfexpl](/cpp/numeric/math/exp/)
- [exp(std::complex)](/cpp/numeric/complex/exp/)
