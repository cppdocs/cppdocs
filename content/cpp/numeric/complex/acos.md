---
title: "std::acos(std::complex)"
source_path: "cpp/numeric/complex/acos"
header: "<complex>"
category: "numeric"
since: "C++11"
---

Computes complex arc cosine of a complex value z. Branch cuts exist outside the interval [−1, +1] along the real axis.

## Declarations
```cpp
template< class T >
complex<T> acos( const complex<T>& z );
```
_(since C++11)_

## Parameters
- `z`: complex value

## Return value
If no errors occur, complex arc cosine of z is returned, in the range of a strip unbounded along the imaginary axis and in the interval [0, +π] along the real axis.

## Notes
Inverse cosine (or arc cosine) is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segments (-∞,-1) and (1,∞) of the real axis.

For any z, acos(z) = π - acos(-z).

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z1(-2.0, 0.0);
    std::cout << "acos" << z1 << " = " << std::acos(z1) << '\n';
 
    std::complex<double> z2(-2.0, -0.0);
    std::cout << "acos" << z2 << " (the other side of the cut) = "
              << std::acos(z2) << '\n';
 
    // for any z, acos(z) = pi - acos(-z)
    const double pi = std::acos(-1);
    std::complex<double> z3 = pi - std::acos(z2);
    std::cout << "cos(pi - acos" << z2 << ") = " << std::cos(z3) << '\n';
}
```

## See also
- [asin(std::complex)](/cpp/numeric/complex/asin/)
- [atan(std::complex)](/cpp/numeric/complex/atan/)
- [cos(std::complex)](/cpp/numeric/complex/cos/)
- [acosacosfacosl](/cpp/numeric/math/acos/)
- [acos(std::valarray)](/cpp/numeric/valarray/acos/)
- [std::acos](/cpp/numeric/math/acos/)
- [C documentation](/c/numeric/complex/cacos/)
