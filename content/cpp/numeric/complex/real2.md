---
title: "std::real(std::complex)"
source_path: "cpp/numeric/complex/real2"
header: "<complex>"
category: "numeric"
since: "C++14"
---

1) Returns the real part of the complex number z, i.e. z.real().

## Declarations
```cpp
template< class T >
T real( const std::complex<T>& z );
```
_(until C++14)_

```cpp
template< class T >
constexpr T real( const std::complex<T>& z );
```
_(since C++14)_

```cpp
Additional overloads (since C++11)
```

```cpp
float real( float f );
double real( double f );
long double real( long double f );
```
_(until C++14)_

```cpp
constexpr float real( float f );
constexpr double real( double f );
constexpr long double real( long double f );
```
_(since C++14) (until C++23)_

```cpp
template< class FloatingPoint >
constexpr FloatingPoint real( FloatingPoint f );
```
_(since C++23)_

```cpp
template< class Integer >
double real( Integer i );
```
_(until C++14)_

```cpp
template< class Integer >
constexpr double real( Integer i );
```
_(since C++14)_

## Parameters
- `z`: complex value
- `f`: floating-point value
- `i`: integer value

## Notes
The additional overloads are not required to be provided exactly as (A,B). They only need to be sufficient to ensure that for their argument num:

## See also
- [real](/cpp/numeric/complex/real/)
- [imag](/cpp/numeric/complex/imag2/)
- [C documentation](/c/numeric/complex/creal/)
