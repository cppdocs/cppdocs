---
title: "std::conj(std::complex)"
source_path: "cpp/numeric/complex/conj"
header: "<complex>"
category: "numeric"
since: "C++20"
---

1) Computes the [complex conjugate](https://en.wikipedia.org/wiki/Complex_conjugate) of z by reversing the sign of the imaginary part.

## Declarations
```cpp
template< class T >
std::complex<T> conj( const std::complex<T>& z );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> conj( const std::complex<T>& z );
```
_(since C++20)_

```cpp
Additional overloads (since C++11)
```

```cpp
std::complex<float> conj( float f );
std::complex<double> conj( double f );
std::complex<long double> conj( long double f );
```
_(until C++20)_

```cpp
constexpr std::complex<float> conj( float f );
constexpr std::complex<double> conj( double f );
constexpr std::complex<long double> conj( long double f );
```
_(since C++20) (until C++23)_

```cpp
template< class FloatingPoint >
constexpr std::complex<FloatingPoint> conj( FloatingPoint f );
```
_(since C++23)_

```cpp
template< class Integer >
constexpr std::complex<double> conj( Integer i );
```
_(until C++20)_

```cpp
template< class Integer >
constexpr std::complex<double> conj( Integer i );
```
_(since C++20)_

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
    std::complex<double> z(1.0, 2.0);
    std::cout << "The conjugate of " << z << " is " << std::conj(z) << '\n'
              << "Their product is " << z * std::conj(z) << '\n';
}
```

## See also
- [abs(std::complex)](/cpp/numeric/complex/abs/)
- [norm](/cpp/numeric/complex/norm/)
- [polar](/cpp/numeric/complex/polar/)
- [C documentation](/c/numeric/complex/conj/)
