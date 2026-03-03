---
title: "std::abs(std::complex)"
source_path: "cpp/numeric/complex/abs"
header: "<complex>"
category: "numeric"
---

Returns the magnitude of the complex number z.

## Declarations
```cpp
template< class T >
T abs( const complex<T>& z );
```

## Parameters
- `z`: complex value

## Return value
If no errors occur, returns the absolute value (also known as norm, modulus, or magnitude) of z.

## Example
```cpp
#include <complex>
#include <iostream>
 
int main()
{
    std::complex<double> z(1, 1);
    std::cout << z << " cartesian is rho = " << std::abs(z)
              << " theta = " << std::arg(z) << " polar\n";
}
```

## See also
- [arg](/cpp/numeric/complex/arg/)
- [polar](/cpp/numeric/complex/polar/)
- [abs(int)labsllabs](/cpp/numeric/math/abs/)
- [abs(float)fabsfabsffabsl](/cpp/numeric/math/fabs/)
- [hypothypotfhypotl](/cpp/numeric/math/hypot/)
- [abs(std::valarray)](/cpp/numeric/valarray/abs/)
- [C documentation](/c/numeric/complex/cabs/)
