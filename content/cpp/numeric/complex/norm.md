---
title: "std::norm(std::complex)"
source_path: "cpp/numeric/complex/norm"
header: "<complex>"
category: "numeric"
since: "C++20"
---

1) Returns the squared magnitude of the complex number z.

## Declarations
```cpp
template< class T >
T norm( const std::complex<T>& z );
```
_(until C++20)_

```cpp
template< class T >
constexpr T norm( const std::complex<T>& z );
```
_(since C++20)_

```cpp
Additional overloads (since C++11)
```

```cpp
float norm( float f );
double norm( double f );
long double norm( long double f );
```
_(until C++20)_

```cpp
constexpr float norm( float f );
constexpr double norm( double f );
constexpr long double norm( long double f );
```
_(since C++20) (until C++23)_

```cpp
template< class FloatingPoint >
constexpr FloatingPoint norm( FloatingPoint f );
```
_(since C++23)_

```cpp
template< class Integer >
double norm( Integer i );
```
_(until C++20)_

```cpp
template< class Integer >
constexpr double norm( Integer i );
```
_(since C++20)_

## Parameters
- `z`: complex value
- `f`: floating-point value
- `i`: integer value

## Notes
The norm calculated by this function is also known as [field norm](https://en.wikipedia.org/wiki/Field_norm) or [absolute square](https://mathworld.wolfram.com/AbsoluteSquare.html).

The [Euclidean norm](https://en.wikipedia.org/wiki/Euclidean_space#Euclidean_norm) of a complex number is provided by [std::abs](/cpp/numeric/complex/abs/), which is more costly to compute. In some situations, it may be replaced by std::norm, for example, if abs(z1) > abs(z2) then norm(z1) > norm(z2).

The additional overloads are not required to be provided exactly as (A,B). They only need to be sufficient to ensure that for their argument num:

## Example
```cpp
#include <cassert>
#include <complex>
#include <iostream>
 
int main()
{
    constexpr std::complex<double> z {3.0, 4.0};
    static_assert(std::norm(z) == (z.real() * z.real() + z.imag() * z.imag()));
    static_assert(std::norm(z) == (z * std::conj(z)));
           assert(std::norm(z) == (std::abs(z) * std::abs(z)));
    std::cout << "std::norm(" << z << ") = " << std::norm(z) << '\n';
}
```

## See also
- [abs(std::complex)](/cpp/numeric/complex/abs/)
- [conj](/cpp/numeric/complex/conj/)
- [polar](/cpp/numeric/complex/polar/)
