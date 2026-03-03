---
title: "std::complex<T>::operator+=,-=,*=,/="
source_path: "cpp/numeric/complex/operator"
category: "numeric"
since: "C++20"
---

Implements the compound assignment operators for complex arithmetic and for mixed complex/scalar arithmetic. Scalar arguments are treated as complex numbers with the real part equal to the argument and the imaginary part set to zero.

## Declarations
```cpp
Primary template complex<T>
```

```cpp
complex& operator+=( const T& other );
```
_(until C++20)_

```cpp
constexpr complex& operator+=( const T& other );
```
_(since C++20)_

```cpp
complex& operator-=( const T& other );
```
_(until C++20)_

```cpp
constexpr complex& operator-=( const T& other );
```
_(since C++20)_

```cpp
complex& operator*=( const T& other );
```
_(until C++20)_

```cpp
constexpr complex& operator*=( const T& other );
```
_(since C++20)_

```cpp
complex& operator/=( const T& other );
```
_(until C++20)_

```cpp
constexpr complex& operator/=( const T& other );
```
_(since C++20)_

```cpp
Specialization complex<float>
```

```cpp
complex& operator+=( float other );
```
_(until C++20)_

```cpp
constexpr complex& operator+=( float other );
```
_(since C++20)_

```cpp
complex& operator-=( float other );
```
_(until C++20)_

```cpp
constexpr complex& operator-=( float other );
```
_(since C++20)_

```cpp
complex& operator*=( float other );
```
_(until C++20)_

```cpp
constexpr complex& operator*=( float other );
```
_(since C++20)_

```cpp
complex& operator/=( float other );
```
_(until C++20)_

```cpp
constexpr complex& operator/=( float other );
```
_(since C++20)_

```cpp
Specialization complex<double>
```

```cpp
complex& operator+=( double other );
```
_(until C++20)_

```cpp
constexpr complex& operator+=( double other );
```
_(since C++20)_

```cpp
complex& operator-=( double other );
```
_(until C++20)_

```cpp
constexpr complex& operator-=( double other );
```
_(since C++20)_

```cpp
complex& operator*=( double other );
```
_(until C++20)_

```cpp
constexpr complex& operator*=( double other );
```
_(since C++20)_

```cpp
complex& operator/=( double other );
```
_(until C++20)_

```cpp
constexpr complex& operator/=( double other );
```
_(since C++20)_

```cpp
Specialization complex<long double>
```

```cpp
complex& operator+=( long double other );
```
_(until C++20)_

```cpp
constexpr complex& operator+=( long double other );
```
_(since C++20)_

```cpp
complex& operator-=( long double other );
```
_(until C++20)_

```cpp
constexpr complex& operator-=( long double other );
```
_(since C++20)_

```cpp
complex& operator*=( long double other );
```
_(until C++20)_

```cpp
constexpr complex& operator*=( long double other );
```
_(since C++20)_

```cpp
complex& operator/=( long double other );
```
_(until C++20)_

```cpp
constexpr complex& operator/=( long double other );
```
_(since C++20)_

```cpp
All specializations
```

```cpp
template<class X>
complex& operator+=( const std::complex<X>& other );
```
_(until C++20)_

```cpp
template<class X>
constexpr complex& operator+=( const std::complex<X>& other );
```
_(since C++20)_

```cpp
template<class X>
complex& operator-=( const std::complex<X>& other );
```
_(until C++20)_

```cpp
template<class X>
constexpr complex& operator-=( const std::complex<X>& other );
```
_(since C++20)_

```cpp
template<class X>
complex& operator*=( const std::complex<X>& other );
```
_(until C++20)_

```cpp
template<class X>
constexpr complex& operator*=( const std::complex<X>& other );
```
_(since C++20)_

```cpp
template<class X>
complex& operator/=( const std::complex<X>& other );
```
_(until C++20)_

```cpp
template<class X>
constexpr complex& operator/=( const std::complex<X>& other );
```
_(since C++20)_

## Parameters
- `other`: a complex or scalar value of matching type (float, double, long double)

## Return value
*this

## See also
- [operator+operator-](/cpp/numeric/complex/operator_arith2/)
- [operator+operator-operator*operator/](/cpp/numeric/complex/operator_arith3/)
