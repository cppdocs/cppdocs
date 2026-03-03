---
title: "std::log(std::complex)"
source_path: "cpp/numeric/complex/log"
header: "<complex>"
category: "numeric"
---

Computes complex [natural (base e) logarithm](https://en.wikipedia.org/wiki/Natural_logarithm) of a complex value z with a branch cut along the negative real axis.

## Declarations
```cpp
template< class T >
std::complex<T> log( const std::complex<T>& z );
```

## Parameters
- `z`: complex value

## Return value
If no errors occur, the complex natural logarithm of z is returned, in the range of a strip in the interval [−iπ, +iπ] along the imaginary axis and mathematically unbounded along the real axis.

## Notes
The natural logarithm of a complex number z with polar coordinate components (r,θ) equals ln r + i(θ+2nπ), with the principal value ln r + iθ.

The semantics of this function are intended to be consistent with the C function [clog](/c/numeric/complex/clog/).

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
    std::complex<double> z {0.0, 1.0}; // r = 1, θ = pi / 2
    std::cout << "2 * log" << z << " = " << 2.0 * std::log(z) << '\n';
 
    std::complex<double> z2 {sqrt(2.0) / 2, sqrt(2.0) / 2}; // r = 1, θ = pi / 4
    std::cout << "4 * log" << z2 << " = " << 4.0 * std::log(z2) << '\n';
 
    std::complex<double> z3 {-1.0, 0.0}; // r = 1, θ = pi
    std::cout << "log" << z3 << " = " << std::log(z3) << '\n';
    std::complex<double> z4 {-1.0, -0.0}; // the other side of the cut
    std::cout << "log" << z4 << " (the other side of the cut) = " << std::log(z4) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2597 | C++98 | specification mishandles signed zero imaginary parts | erroneous requirement removed |

## See also
- [log10(std::complex)](/cpp/numeric/complex/log10/)
- [exp(std::complex)](/cpp/numeric/complex/exp/)
- [loglogflogl](/cpp/numeric/math/log/)
- [log(std::valarray)](/cpp/numeric/valarray/log/)
- [std::log](/cpp/numeric/math/log/)
- [C documentation](/c/numeric/complex/clog/)
