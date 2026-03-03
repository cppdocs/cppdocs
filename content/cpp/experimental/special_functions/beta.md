---
title: "std::beta, std::betaf, std::betal"
source_path: "cpp/experimental/special_functions/beta"
category: "experimental"
---

1) Computes the [beta function](https://en.wikipedia.org/wiki/Beta_function) of x and y.

## Declarations
```cpp
double beta( double x, double y );
float betaf( float x, float y );
long double betal( long double x, long double y );
```

```cpp
Promoted beta( Arithmetic x, Arithmetic y );
```

## Parameters
- `x, y`: values of a floating-point or integral type

## Notes
Implementations that do not support TR 29124 but support TR 19768, provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/sf_beta/beta_function.html).

beta(x, y) equals beta(y, x).

## Example
```cpp
#define __STDCPP_WANT_MATH_SPEC_FUNCS__ 1
#include <cmath>
#include <iomanip>
#include <iostream>
#include <string>
 
double binom(int n, int k)
{
    return 1 / ((n + 1) * std::beta(n - k + 1, k + 1));
}
 
int main()
{
    std::cout << "Pascal's triangle:\n";
    for (int n = 1; n < 10; ++n)
    {
        std::cout << std::string(20 - n * 2, ' ');
        for (int k = 1; k < n; ++k)
            std::cout << std::setw(3) << binom(n, k) << ' ';
        std::cout << '\n';
    }
}
```

## See also
- [tgammatgammaftgammal](/cpp/numeric/math/tgamma/)
