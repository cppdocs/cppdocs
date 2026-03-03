---
title: "std::log10(std::complex)"
source_path: "cpp/numeric/complex/log10"
header: "<complex>"
category: "numeric"
---

Computes complex common (base 10) logarithm of a complex value z with a branch cut along the negative real axis.

## Declarations
```cpp
template< class T >
std::complex<T> log10( const std::complex<T>& z );
```

## Parameters
- `z`: complex value

## Return value
Complex common logarithm of z.

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
    std::complex<double> z(0.0, 1.0); // r = 0, θ = pi / 2
    std::cout << "2 * log10" << z << " = " << 2.0 * std::log10(z) << '\n';
 
    std::complex<double> z2(sqrt(2.0) / 2, sqrt(2.0) / 2); // r = 1, θ = pi / 4
    std::cout << "4 * log10" << z2 << " = " << 4.0 * std::log10(z2) << '\n';
 
    std::complex<double> z3(-100.0, 0.0); // r = 100, θ = pi
    std::cout << "log10" << z3 << " = " << std::log10(z3) << '\n';
    std::complex<double> z4(-100.0, -0.0); // the other side of the cut
    std::cout << "log10" << z4 << " = " << std::log10(z4) << " "
                 "(the other side of the cut)\n"
                 "(note: pi / log(10) = " << std::acos(-1.0) / std::log(10.0) << ")\n";
}
```

## See also
- [log(std::complex)](/cpp/numeric/complex/log/)
- [log10log10flog10l](/cpp/numeric/math/log10/)
- [log10(std::valarray)](/cpp/numeric/valarray/log10/)
- [std::log10](/cpp/numeric/math/log10/)
