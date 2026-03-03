---
title: "std::tan(std::complex)"
source_path: "cpp/numeric/complex/tan"
header: "<complex>"
category: "numeric"
---

Computes complex tangent of a complex value z.

## Declarations
```cpp
template< class T >
complex<T> tan( const complex<T>& z );
```

## Parameters
- `z`: complex value

## Return value
If no errors occur, the complex tangent of z is returned.

## Notes
Tangent is an analytical function on the complex plain and has no branch cuts. It is periodic with respect to the real component, with period πi, and has poles of the first order along the real line, at coordinates (π(1/2 + n), 0). However no common floating-point representation is able to represent π/2 exactly, thus there is no value of the argument for which a pole error occurs.

## Example
```cpp
#include <cmath>
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
    std::complex<double> z(1.0, 0.0); // behaves like real tangent along the real line
    std::cout << "tan" << z << " = " << std::tan(z)
              << " ( tan(1) = " << std::tan(1) << ")\n";
 
    std::complex<double> z2(0.0, 1.0); // behaves like tanh along the imaginary line
    std::cout << "tan" << z2 << " = " << std::tan(z2)
              << " (tanh(1) = " << std::tanh(1) << ")\n";
}
```

## See also
- [sin(std::complex)](/cpp/numeric/complex/sin/)
- [cos(std::complex)](/cpp/numeric/complex/cos/)
- [atan(std::complex)](/cpp/numeric/complex/atan/)
- [tantanftanl](/cpp/numeric/math/tan/)
- [tan(std::valarray)](/cpp/numeric/valarray/tan/)
- [std::tan](/cpp/numeric/math/tan/)
- [C documentation](/c/numeric/complex/ctan/)
