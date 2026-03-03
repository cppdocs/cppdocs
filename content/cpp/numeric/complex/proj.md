---
title: "std::proj(std::complex)"
source_path: "cpp/numeric/complex/proj"
header: "<complex>"
category: "numeric"
since: "C++11"
---

1) Returns the projection of the complex number z onto the [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere).

## Declarations
```cpp
template< class T >
std::complex<T> proj( const std::complex<T>& z );
```
_(since C++11)_

```cpp
Additional overloads (since C++11)
```

```cpp
std::complex<float> proj( float f );
std::complex<double> proj( double f );
std::complex<long double> proj( long double f );
```
_(until C++23)_

```cpp
template< class FloatingPoint >
std::complex<FloatingPoint> proj( FloatingPoint f );
```
_(since C++23)_

```cpp
template< class Integer >
std::complex<double> proj( Integer i );
```

## Parameters
- `z`: complex value
- `f`: floating-point value
- `i`: integer value

## Notes
The proj function helps model the Riemann sphere by mapping all infinities to one (give or take the sign of the imaginary zero), and should be used just before any operation, especially comparisons, that might give spurious results for any of the other infinities.

The additional overloads are not required to be provided exactly as (A,B). They only need to be sufficient to ensure that for their argument num:

## Example
```cpp
#include <complex>
#include <iostream>
 
int main()
{
    std::complex<double> c1(1, 2);
    std::cout << "proj" << c1 << " = " << std::proj(c1) << '\n';
 
    std::complex<double> c2(INFINITY, -1);
    std::cout << "proj" << c2 << " = " << std::proj(c2) << '\n';
 
    std::complex<double> c3(0, -INFINITY);
    std::cout << "proj" << c3 << " = " << std::proj(c3) << '\n';
}
```

## See also
- [abs(std::complex)](/cpp/numeric/complex/abs/)
- [norm](/cpp/numeric/complex/norm/)
- [polar](/cpp/numeric/complex/polar/)
- [C documentation](/c/numeric/complex/cproj/)
