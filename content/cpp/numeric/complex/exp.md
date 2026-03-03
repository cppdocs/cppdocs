---
title: "std::exp(std::complex)"
source_path: "cpp/numeric/complex/exp"
header: "<complex>"
category: "numeric"
---

Compute base-e exponential of z, that is e (Euler's number, 2.7182818) raised to the z power.

## Declarations
```cpp
template< class T >
std::complex<T> exp( const std::complex<T>& z );
```

## Parameters
- `z`: complex value

## Return value
If no errors occur, e raised to the power of z, \(\small e^z\)ez, is returned.

## Notes
The complex exponential function \(\small e^z\)ez for \(\small z = x + {\rm i}y\)z = x+iy equals \(\small e^x {\rm cis}(y)\)ex cis(y), or, \(\small e^x (\cos(y)+{\rm i}\sin(y))\)ex (cos(y) + i sin(y)).

The exponential function is an entire function in the complex plane and has no branch cuts.

The following have equivalent results when the real part is 0:

In this case exp can be about 4.5x slower. One of the other forms should be used instead of calling exp with an argument whose real part is literal 0. There is no benefit in trying to avoid exp with a runtime check of z.real() == 0 though.

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
   const double pi = std::acos(-1.0);
   const std::complex<double> i(0.0, 1.0);
 
   std::cout << std::fixed << " exp(i * pi) = " << std::exp(i * pi) << '\n';
}
```

## See also
- [log(std::complex)](/cpp/numeric/complex/log/)
- [expexpfexpl](/cpp/numeric/math/exp/)
- [exp(std::valarray)](/cpp/numeric/valarray/exp/)
- [std::exp](/cpp/numeric/math/exp/)
- [polar](/cpp/numeric/complex/polar/)
- [C documentation](/c/numeric/complex/cexp/)
