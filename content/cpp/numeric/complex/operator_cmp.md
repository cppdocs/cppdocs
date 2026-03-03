---
title: "operator==,!=(std::complex)"
source_path: "cpp/numeric/complex/operator_cmp"
header: "<complex>"
category: "numeric"
since: "C++14"
---

Compares two complex numbers. Scalar arguments are treated as complex numbers with the real part equal to the argument and the imaginary part set to zero.

## Declarations
```cpp
template< class T >
bool operator==( const complex<T>& lhs, const complex<T>& rhs );
```
_(until C++14)_

```cpp
template< class T >
constexpr bool operator==( const complex<T>& lhs, const complex<T>& rhs );
```
_(since C++14)_

```cpp
template< class T >
bool operator==( const complex<T>& lhs, const T& rhs );
```
_(until C++14)_

```cpp
template< class T >
constexpr bool operator==( const complex<T>& lhs, const T& rhs );
```
_(since C++14)_

```cpp
template< class T >
bool operator==( const T& lhs, const complex<T>& rhs );
```
_(until C++14)_

```cpp
template< class T >
constexpr bool operator==( const T& lhs, const complex<T>& rhs );
```
_(since C++14) (until C++20)_

```cpp
template< class T >
bool operator!=( const complex<T>& lhs, const complex<T>& rhs );
```
_(until C++14)_

```cpp
template< class T >
constexpr bool operator!=( const complex<T>& lhs, const complex<T>& rhs );
```
_(since C++14) (until C++20)_

```cpp
template< class T >
bool operator!=( const complex<T>& lhs, const T& rhs );
```
_(until C++14)_

```cpp
template< class T >
constexpr bool operator!=( const complex<T>& lhs, const T& rhs );
```
_(since C++14) (until C++20)_

```cpp
template< class T >
bool operator!=( const T& lhs, const complex<T>& rhs );
```
_(until C++14)_

```cpp
template< class T >
constexpr bool operator!=( const T& lhs, const complex<T>& rhs );
```
_(since C++14) (until C++20)_

## Parameters
- `lhs, rhs`: the arguments to compare: either both complex numbers or one complex and one scalar of matching type (float, double, long double)

## Example
```cpp
#include <complex>
 
int main()
{
    using std::operator""i; // or: using namespace std::complex_literals;
 
    static_assert(1.0i == 1.0i);
    static_assert(2.0i != 1.0i);
 
    constexpr std::complex z(1.0, 0.0);
    static_assert(z == 1.0);
    static_assert(1.0 == z);
    static_assert(2.0 != z);
    static_assert(z != 2.0);
}
```
