---
title: "std::arg(std::complex)"
source_path: "cpp/numeric/complex/arg"
header: "<complex>"
category: "numeric"
since: "C++23"
---

1) Calculates the phase angle (in radians) of the complex number z.

## Declarations
```cpp
template< class T >
T arg( const std::complex<T>& z );
```

```cpp
Additional overloads (since C++11)
```

```cpp
float arg( float f );
double arg( double f );
long double arg( long double f );
```
_(until C++23)_

```cpp
template< class FloatingPoint >
FloatingPoint
arg( FloatingPoint f );
```
_(since C++23)_

```cpp
template< class Integer >
double arg( Integer i );
```

## Parameters
- `z`: complex value
- `f`: floating-point value
- `i`: integer value

## Notes
The additional overloads are not required to be provided exactly as (A,B). They only need to be sufficient to ensure that for their argument num:

## Example
```cpp
#include <complex>
#include <iostream>
 
int main() 
{
    std::complex<double> z1(1, 0);
    std::complex<double> z2(0, 0);
    std::complex<double> z3(0, 1);
    std::complex<double> z4(-1, 0);
    std::complex<double> z5(-1, -0.0);
    double f = 1.;
    int i = -1;
 
    std::cout << "phase angle of " << z1 << " is " << std::arg(z1) << '\n'
              << "phase angle of " << z2 << " is " << std::arg(z2) << '\n'
              << "phase angle of " << z3 << " is " << std::arg(z3) << '\n'
              << "phase angle of " << z4 << " is " << std::arg(z4) << '\n'
              << "phase angle of " << z5 << " is " << std::arg(z5) << " "
                 "(the other side of the cut)\n"
              << "phase angle of " << f << " is " << std::arg(f) << '\n'
              << "phase angle of " << i << " is " << std::arg(i) << '\n';
 
}
```

## See also
- [abs(std::complex)](/cpp/numeric/complex/abs/)
- [polar](/cpp/numeric/complex/polar/)
- [atan2atan2fatan2l](/cpp/numeric/math/atan2/)
- [atan2(std::valarray)](/cpp/numeric/valarray/atan2/)
- [std::atan2](/cpp/numeric/math/atan2/)
- [C documentation](/c/numeric/complex/carg/)
