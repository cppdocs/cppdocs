---
title: "std::sinh(std::complex)"
source_path: "cpp/numeric/complex/sinh"
header: "<complex>"
category: "numeric"
since: "C++11"
---

Computes complex hyperbolic sine of a complex value z.

## Declarations
```cpp
template< class T >
complex<T> sinh( const complex<T>& z );
```
_(since C++11)_

## Parameters
- `z`: complex value

## Return value
If no errors occur, complex hyperbolic sine of z is returned.

## Notes
Hyperbolic sine is an entire function in the complex plane and has no branch cuts. It is periodic with respect to the imaginary component, with period 2πi.

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z(1.0, 0.0); // behaves like real sinh along the real line
    std::cout << "sinh" << z << " = " << std::sinh(z)
              << " (sinh(1) = " << std::sinh(1) << ")\n";
 
    std::complex<double> z2(0.0, 1.0); // behaves like sine along the imaginary line
    std::cout << "sinh" << z2 << " = " << std::sinh(z2)
              << " ( sin(1) = " << std::sin(1) << ")\n";
}
```

## See also
- [cosh(std::complex)](/cpp/numeric/complex/cosh/)
- [tanh(std::complex)](/cpp/numeric/complex/tanh/)
- [asinh(std::complex)](/cpp/numeric/complex/asinh/)
- [sinhsinhfsinhl](/cpp/numeric/math/sinh/)
- [sinh(std::valarray)](/cpp/numeric/valarray/sinh/)
- [std::sinh](/cpp/numeric/math/sinh/)
- [C documentation](/c/numeric/complex/csinh/)
