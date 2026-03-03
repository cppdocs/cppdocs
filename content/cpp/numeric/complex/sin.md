---
title: "std::sin(std::complex)"
source_path: "cpp/numeric/complex/sin"
header: "<complex>"
category: "numeric"
---

Computes complex sine of a complex value z.

## Declarations
```cpp
template< class T >
complex<T> sin( const complex<T>& z );
```

## Parameters
- `z`: complex value

## Return value
If no errors occur, the complex sine of z is returned.

## Notes
The sine is an entire function on the complex plane, and has no branch cuts.

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z(1.0, 0.0); // behaves like real sine along the real line
    std::cout << "sin" << z << " = " << std::sin(z)
              << " ( sin(1) = " << std::sin(1) << ")\n";
 
    std::complex<double> z2(0.0, 1.0); // behaves like sinh along the imaginary line
    std::cout << "sin" << z2 << " = " << std::sin(z2)
              << " (sinh(1) = " << std::sinh(1) << ")\n";
}
```

## See also
- [cos(std::complex)](/cpp/numeric/complex/cos/)
- [tan(std::complex)](/cpp/numeric/complex/tan/)
- [asin(std::complex)](/cpp/numeric/complex/asin/)
- [sinsinfsinl](/cpp/numeric/math/sin/)
- [sin(std::valarray)](/cpp/numeric/valarray/sin/)
- [std::sin](/cpp/numeric/math/sin/)
- [C documentation](/c/numeric/complex/csin/)
