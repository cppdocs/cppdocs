---
title: "std::asinh(std::complex)"
source_path: "cpp/numeric/complex/asinh"
header: "<complex>"
category: "numeric"
since: "C++11"
---

Computes complex arc hyperbolic sine of a complex value z with branch cuts outside the interval [−i; +i] along the imaginary axis.

## Declarations
```cpp
template< class T >
complex<T> asinh( const complex<T>& z );
```
_(since C++11)_

## Parameters
- `z`: complex value

## Return value
If no errors occur, the complex arc hyperbolic sine of z is returned, in the range of a strip mathematically unbounded along the real axis and in the interval [−iπ/2; +iπ/2] along the imaginary axis.

## Notes
Although the C++ standard names this function "complex arc hyperbolic sine", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "complex inverse hyperbolic sine", and, less common, "complex area hyperbolic sine".

Inverse hyperbolic sine is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segments (-i∞,-i) and (i,i∞) of the imaginary axis.

The mathematical definition of the principal value of the inverse hyperbolic sine is asinh z = ln(z + √1+z2).

## Example
```cpp
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z1(0.0, -2.0);
    std::cout << "asinh" << z1 << " = " << std::asinh(z1) << '\n';
 
    std::complex<double> z2(-0.0, -2);
    std::cout << "asinh" << z2 << " (the other side of the cut) = "
              << std::asinh(z2) << '\n';
 
    // for any z, asinh(z) = asin(iz) / i
    std::complex<double> z3(1.0, 2.0);
    std::complex<double> i(0.0, 1.0);
    std::cout << "asinh" << z3 << " = " << std::asinh(z3) << '\n'
              << "asin" << z3 * i << " / i = " << std::asin(z3 * i) / i << '\n';
}
```

## See also
- [acosh(std::complex)](/cpp/numeric/complex/acosh/)
- [atanh(std::complex)](/cpp/numeric/complex/atanh/)
- [sinh(std::complex)](/cpp/numeric/complex/sinh/)
- [asinhasinhfasinhl](/cpp/numeric/math/asinh/)
- [C documentation](/c/numeric/complex/casinh/)
