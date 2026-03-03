---
title: "std::imag(std::complex)"
source_path: "cpp/numeric/complex/imag2"
header: "<complex>"
category: "numeric"
since: "C++14"
---

1) Returns the imaginary part of the complex number z, i.e. z.imag().

## Declarations
```cpp
template< class T >
T imag( const std::complex<T>& z );
```
_(until C++14)_

```cpp
template< class T >
constexpr T imag( const std::complex<T>& z );
```
_(since C++14)_

```cpp
Additional overloads (since C++11)
```

```cpp
float imag( float f );
double imag( double f );
long double imag( long double f );
```
_(until C++14)_

```cpp
constexpr float imag( float f );
constexpr double imag( double f );
constexpr long double imag( long double f );
```
_(since C++14) (until C++23)_

```cpp
template< class FloatingPoint >
FloatingPoint imag( FloatingPoint f );
```
_(since C++23)_

```cpp
template< class Integer >
double imag( Integer i );
```
_(until C++14)_

```cpp
template< class Integer >
constexpr double imag( Integer i );
```
_(since C++14)_

## Parameters
- `z`: complex value
- `f`: floating-point value
- `i`: integer value

## Notes
The additional overloads are not required to be provided exactly as (A,B). They only need to be sufficient to ensure that for their argument num:

## See also
- [imag](/cpp/numeric/complex/imag/)
- [real](/cpp/numeric/complex/real2/)
- [C documentation](/c/numeric/complex/cimag/)
