---
title: "std::cos(std::complex)"
source_path: "cpp/numeric/complex/cos"
header: "<complex>"
category: "numeric"
---

Computes complex cosine of a complex value z.

## Declarations
```cpp
template< class T >
complex<T> cos( const complex<T>& z );
```

## Parameters
- `z`: complex value

## Return value
If no errors occur, the complex cosine of z is returned.

## Notes
The cosine is an entire function on the complex plane, and has no branch cuts.

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z(1.0, 0.0); // behaves like real cosine along the real line
    std::cout << "cos" << z << " = " << std::cos(z)
              << " ( cos(1) = " << std::cos(1) << ")\n";
 
    std::complex<double> z2(0.0, 1.0); // behaves like real cosh along the imaginary line
    std::cout << "cos" << z2 << " = " << std::cos(z2)
              << " (cosh(1) = " << std::cosh(1) << ")\n";
}
```

## See also
- [sin(std::complex)](/cpp/numeric/complex/sin/)
- [tan(std::complex)](/cpp/numeric/complex/tan/)
- [acos(std::complex)](/cpp/numeric/complex/acos/)
- [coscosfcosl](/cpp/numeric/math/cos/)
- [cos(std::valarray)](/cpp/numeric/valarray/cos/)
- [std::cos](/cpp/numeric/math/cos/)
- [C documentation](/c/numeric/complex/ccos/)
