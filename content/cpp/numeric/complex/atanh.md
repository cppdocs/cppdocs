---
title: "std::atanh(std::complex)"
source_path: "cpp/numeric/complex/atanh"
header: "<complex>"
category: "numeric"
since: "C++11"
---

Computes the complex arc hyperbolic tangent of z with branch cuts outside the interval [−1; +1] along the real axis.

## Declarations
```cpp
template< class T >
complex<T> atanh( const complex<T>& z );
```
_(since C++11)_

## Parameters
- `z`: complex value

## Return value
If no errors occur, the complex arc hyperbolic tangent of z is returned, in the range of a half-strip mathematically unbounded along the real axis and in the interval [−iπ/2; +iπ/2] along the imaginary axis.

## Notes
Although the C++ standard names this function "complex arc hyperbolic tangent", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "complex inverse hyperbolic tangent", and, less common, "complex area hyperbolic tangent".

Inverse hyperbolic tangent is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segments (-∞,-1] and [+1,+∞) of the real axis.

## Example
```cpp
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z1(2.0, 0.0);
    std::cout << "atanh" << z1 << " = " << std::atanh(z1) << '\n';
 
    std::complex<double> z2(2.0, -0.0);
    std::cout << "atanh" << z2 << " (the other side of the cut) = "
              << std::atanh(z2) << '\n';
 
    // for any z, atanh(z) = atanh(iz) / i
    std::complex<double> z3(1.0, 2.0);
    std::complex<double> i(0.0, 1.0);
    std::cout << "atanh" << z3 << " = " << std::atanh(z3) << '\n'
              << "atan" << z3 * i << " / i = " << std::atan(z3 * i) / i << '\n';
}
```

## See also
- [asinh(std::complex)](/cpp/numeric/complex/asinh/)
- [acosh(std::complex)](/cpp/numeric/complex/acosh/)
- [tanh(std::complex)](/cpp/numeric/complex/tanh/)
- [atanhatanhfatanhl](/cpp/numeric/math/atanh/)
- [C documentation](/c/numeric/complex/catanh/)
