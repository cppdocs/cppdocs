---
title: "std::atan(std::complex)"
source_path: "cpp/numeric/complex/atan"
header: "<complex>"
category: "numeric"
since: "C++11"
---

Computes complex arc tangent of a complex value z. Branch cut exists outside the interval [−i, +i] along the imaginary axis.

## Declarations
```cpp
template< class T >
complex<T> atan( const complex<T>& z );
```
_(since C++11)_

## Parameters
- `z`: complex value

## Return value
If no errors occur, complex arc tangent of z is returned, in the range of a strip unbounded along the imaginary axis and in the interval [−π/2, +π/2] along the real axis.

## Notes
Inverse tangent (or arc tangent) is a multivalued function and requires a branch cut on the complex plane. The branch cut is conventionally placed at the line segments (-∞i,-i) and (+i,+∞i) of the imaginary axis.

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z1(0.0, 2.0);
    std::cout << "atan" << z1 << " = " << std::atan(z1) << '\n';
 
    std::complex<double> z2(-0.0, 2.0);
    std::cout << "atan" << z2 << " (the other side of the cut) = "
              << std::atan(z2) << '\n';
 
    std::complex<double> z3(0.0, INFINITY);
    std::cout << "2 * atan" << z3 << " = " << 2.0 * std::atan(z3) << '\n';
}
```

## See also
- [asin(std::complex)](/cpp/numeric/complex/asin/)
- [acos(std::complex)](/cpp/numeric/complex/acos/)
- [tan(std::complex)](/cpp/numeric/complex/tan/)
- [atanatanfatanl](/cpp/numeric/math/atan/)
- [atan(std::valarray)](/cpp/numeric/valarray/atan/)
- [std::atan](/cpp/numeric/math/atan/)
- [C documentation](/c/numeric/complex/catan/)
