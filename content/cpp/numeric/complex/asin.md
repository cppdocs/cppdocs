---
title: "std::asin(std::complex)"
source_path: "cpp/numeric/complex/asin"
header: "<complex>"
category: "numeric"
since: "C++11"
---

Computes complex arc sine of a complex value z. Branch cut exists outside the interval [−1, +1] along the real axis.

## Declarations
```cpp
template< class T >
std::complex<T> asin( const std::complex<T>& z );
```
_(since C++11)_

## Parameters
- `z`: complex value

## Return value
If no errors occur, complex arc sine of z is returned, in the range of a strip unbounded along the imaginary axis and in the interval [−π/2, +π/2] along the real axis.

## Notes
Inverse sine (or arc sine) is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segments (-∞,-1) and (1,∞) of the real axis.

The mathematical definition of the principal value of arc sine is \(\small \arcsin z = -{\rm i}\ln({\rm i}z+\sqrt{1-z^2})\)arcsin z = -iln(iz + √1-z2).

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z1(-2.0, 0.0);
    std::cout << "asin" << z1 << " = " << std::asin(z1) << '\n';
 
    std::complex<double> z2(-2.0, -0.0);
    std::cout << "asin" << z2 << " (the other side of the cut) = "
              << std::asin(z2) << '\n';
 
    // for any z, asin(z) = acos(−z) − pi / 2
    const double pi = std::acos(-1);
    std::complex<double> z3 = std::acos(z2) - pi / 2;
    std::cout << "sin(acos" << z2 << " - pi / 2) = " << std::sin(z3) << '\n';
}
```

## See also
- [acos(std::complex)](/cpp/numeric/complex/acos/)
- [atan(std::complex)](/cpp/numeric/complex/atan/)
- [sin(std::complex)](/cpp/numeric/complex/sin/)
- [asinasinfasinl](/cpp/numeric/math/asin/)
- [asin(std::valarray)](/cpp/numeric/valarray/asin/)
- [std::asin](/cpp/numeric/math/asin/)
- [C documentation](/c/numeric/complex/casin/)
