---
title: "std::acosh(std::complex)"
source_path: "cpp/numeric/complex/acosh"
header: "<complex>"
category: "numeric"
since: "C++11"
---

Computes complex arc hyperbolic cosine of a complex value z with branch cut at values less than 1 along the real axis.

## Declarations
```cpp
template< class T >
complex<T> acosh( const complex<T>& z );
```
_(since C++11)_

## Parameters
- `z`: complex value

## Return value
If no errors occur, the complex arc hyperbolic cosine of z is returned, in the range of a half-strip of nonnegative values along the real axis and in the interval [−iπ; +iπ] along the imaginary axis.

## Notes
Although the C++ standard names this function "complex arc hyperbolic cosine", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "complex inverse hyperbolic cosine", and, less common, "complex area hyperbolic cosine".

Inverse hyperbolic cosine is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segment (-∞,+1) of the real axis.

The mathematical definition of the principal value of the inverse hyperbolic cosine is acosh z = ln(z + √z+1 √z-1).

## Example
```cpp
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z1(0.5, 0);
    std::cout << "acosh" << z1 << " = " << std::acosh(z1) << '\n';
 
    std::complex<double> z2(0.5, -0.0);
    std::cout << "acosh" << z2 << " (the other side of the cut) = "
              << std::acosh(z2) << '\n';
 
    // in upper half-plane, acosh = i acos 
    std::complex<double> z3(1, 1), i(0, 1);
    std::cout << "acosh" << z3 << " = " << std::acosh(z3) << '\n'
              << "i*acos" << z3 << " = " << i*std::acos(z3) << '\n';
}
```

## See also
- [acos(std::complex)](/cpp/numeric/complex/acos/)
- [asinh(std::complex)](/cpp/numeric/complex/asinh/)
- [atanh(std::complex)](/cpp/numeric/complex/atanh/)
- [cosh(std::complex)](/cpp/numeric/complex/cosh/)
- [acoshacoshfacoshl](/cpp/numeric/math/acosh/)
- [C documentation](/c/numeric/complex/cacosh/)
