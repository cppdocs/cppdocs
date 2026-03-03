---
title: "std::complex<T>::operator+(unary), operator-(unary)"
source_path: "cpp/numeric/complex/operator"
category: "numeric"
since: "C++20"
---

Implements the analogs of the unary arithmetic operators for complex numbers.

## Declarations
```cpp
template< class T >
std::complex<T> operator+( const std::complex<T>& val );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator+( const std::complex<T>& val );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator-( const std::complex<T>& val );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator-( const std::complex<T>& val );
```
_(since C++20)_

## Parameters
- `val`: the complex number argument

## See also
- [operator+operator-operator*operator/](/cpp/numeric/complex/operator_arith3/)
