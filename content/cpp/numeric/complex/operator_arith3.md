---
title: "operator+,-,*,/ (std::complex)"
source_path: "cpp/numeric/complex/operator"
category: "numeric"
since: "C++20"
---

Implements the binary operators for complex arithmetic and for mixed complex/scalar arithmetic. Scalar arguments are treated as complex numbers with the real part equal to the argument and the imaginary part set to zero.

## Declarations
```cpp
template< class T >
std::complex<T> operator+( const std::complex<T>& lhs,
const std::complex<T>& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator+( const std::complex<T>& lhs,
const std::complex<T>& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator+( const std::complex<T>& lhs,
const T& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator+( const std::complex<T>& lhs,
const T& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator+( const T& lhs,
const std::complex<T>& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator+( const T& lhs,
const std::complex<T>& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator-( const std::complex<T>& lhs,
const std::complex<T>& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator-( const std::complex<T>& lhs,
const std::complex<T>& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator-( const std::complex<T>& lhs,
const T& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator-( const std::complex<T>& lhs,
const T& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator-( const T& lhs,
const std::complex<T>& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator-( const T& lhs,
const std::complex<T>& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator*( const std::complex<T>& lhs,
const std::complex<T>& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator*( const std::complex<T>& lhs,
const std::complex<T>& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator*( const std::complex<T>& lhs,
const T& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator*( const std::complex<T>& lhs,
const T& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator*( const T& lhs,
const std::complex<T>& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator*( const T& lhs,
const std::complex<T>& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator/( const std::complex<T>& lhs,
const std::complex<T>& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator/( const std::complex<T>& lhs,
const std::complex<T>& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator/( const std::complex<T>& lhs,
const T& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator/( const std::complex<T>& lhs,
const T& rhs );
```
_(since C++20)_

```cpp
template< class T >
std::complex<T> operator/( const T& lhs,
const std::complex<T>& rhs );
```
_(until C++20)_

```cpp
template< class T >
constexpr std::complex<T> operator/( const T& lhs,
const std::complex<T>& rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: the arguments: either both complex numbers or one complex and one scalar of matching type (float, double, long double)

## Notes
Because [template argument deduction](/cpp/language/template_argument_deduction/) does not consider implicit conversions, these operators cannot be used for mixed integer/complex arithmetic. In all cases, the scalar must have the same type as the underlying type of the complex number.

The GCC flag "-fcx-limited-range" (included by "-ffast-math") changes the behavior of complex multiply/division by removing checks for floating point edge cases. This impacts loop vectorization.

## Example
```cpp
#include <complex>
#include <iostream>
 
int main()
{
    std::complex<double> c2(2.0, 0.0);
    std::complex<double> ci(0.0, 1.0);
 
    std::cout << ci << " + " << c2 << " = " << ci + c2 << '\n'
              << ci << " * " << ci << " = " << ci * ci << '\n'
              << ci << " + " << c2 << " / " << ci << " = " << ci + c2 / ci << '\n'
              << 1  << " / " << ci << " = " << 1.0 / ci << '\n';
 
//    std::cout << 1.0f / ci; // compile error
//    std::cout << 1 / ci; // compile error
}
```

## See also
- [operator+=operator-=operator*=operator/=](/cpp/numeric/complex/operator_arith/)
- [operator+operator-](/cpp/numeric/complex/operator_arith2/)
