---
title: "std::tanh(std::complex)"
source_path: "cpp/numeric/complex/tanh"
header: "<complex>"
category: "numeric"
since: "C++11"
---

Computes complex hyperbolic tangent of a complex value z.

## Declarations
```cpp
template< class T >
complex<T> tanh( const complex<T>& z );
```
_(since C++11)_

## Parameters
- `z`: complex value

## Return value
If no errors occur, complex hyperbolic tangent of z is returned.

## Notes
Hyperbolic tangent is an analytical function on the complex plane and has no branch cuts. It is periodic with respect to the imaginary component, with period πi, and has poles of the first order along the imaginary line, at coordinates (0, π(1/2 + n)). However no common floating-point representation is able to represent π/2 exactly, thus there is no value of the argument for which a pole error occurs.

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z(1.0, 0.0); // behaves like real tanh along the real line
    std::cout << "tanh" << z << " = " << std::tanh(z)
              << " (tanh(1) = " << std::tanh(1) << ")\n";
 
    std::complex<double> z2(0.0, 1.0); // behaves like tangent along the imaginary line
    std::cout << "tanh" << z2 << " = " << std::tanh(z2)
              << " ( tan(1) = " << std::tan(1) << ")\n";
}
```

## See also
- [sinh(std::complex)](/cpp/numeric/complex/sinh/)
- [cosh(std::complex)](/cpp/numeric/complex/cosh/)
- [atanh(std::complex)](/cpp/numeric/complex/atanh/)
- [tanhtanhftanhl](/cpp/numeric/math/tanh/)
- [tanh(std::valarray)](/cpp/numeric/valarray/tanh/)
- [std::tanh](/cpp/numeric/math/tanh/)
- [C documentation](/c/numeric/complex/ctanh/)
