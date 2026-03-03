---
title: "std::complex<T>::complex"
source_path: "cpp/numeric/complex/complex"
category: "numeric"
since: "C++14"
---

Constructs the [std::complex](/cpp/numeric/complex/) object.The standard explicit specializations ([std::complex](/cpp/numeric/complex/)<float>, [std::complex](/cpp/numeric/complex/)<double> and [std::complex](/cpp/numeric/complex/)<long double>) have different constructor declarations from the main template.(until C++23)

## Declarations
```cpp
Primary template (std::complex<T>)
```

```cpp
complex( const T& re = T(), const T& im = T() );
```
_(until C++14)_

```cpp
constexpr complex( const T& re = T(), const T& im = T() );
```
_(since C++14)_

```cpp
complex( const complex& other );
```
_(until C++14)_

```cpp
constexpr complex( const complex& other );
```
_(since C++14) (until C++23)_

```cpp
constexpr complex( const complex& other ) = default;
```
_(since C++23)_

```cpp
template< class X >
complex( const complex<X>& other );
```
_(until C++14)_

```cpp
template< class X >
constexpr complex( const complex<X>& other );
```
_(since C++14) (until C++23)_

```cpp
template< class X >
constexpr explicit(/* see below */) complex( const complex<X>& other );
```
_(since C++23)_

```cpp
Standard explicit specialization std::complex<float> (until C++23)
```

```cpp
complex( float re = 0.0f, float im = 0.0f );
```
_(until C++11)_

```cpp
constexpr complex( float re = 0.0f, float im = 0.0f );
```
_(since C++11)_

```cpp
constexpr complex( const complex<float>& other ) = default;
```
_(since C++20)_

```cpp
explicit complex( const complex<double>& other );
explicit complex( const complex<long double>& other );
```
_(until C++11)_

```cpp
constexpr explicit complex( const complex<double>& other );
constexpr explicit complex( const complex<long double>& other );
```
_(since C++11)_

```cpp
Standard explicit specialization std::complex<double> (until C++23)
```

```cpp
complex( double re = 0.0, double im = 0.0 );
```
_(until C++11)_

```cpp
constexpr complex( double re = 0.0, double im = 0.0 );
```
_(since C++11)_

```cpp
constexpr complex( const complex<double>& other ) = default;
```
_(since C++20)_

```cpp
complex( const complex<float>& other );
explicit complex( const complex<long double>& other );
```
_(until C++11)_

```cpp
constexpr complex( const complex<float>& other );
constexpr explicit complex( const complex<long double>& other );
```
_(since C++11)_

```cpp
Standard explicit specialization std::complex<long double> (until C++23)
```

```cpp
complex( long double re = 0.0L, long double im = 0.0L );
```
_(until C++11)_

```cpp
constexpr complex( long double re = 0.0L, long double im = 0.0L );
```
_(since C++11)_

```cpp
constexpr complex( const complex<long double>& other ) = default;
```
_(since C++20)_

```cpp
complex( const complex<float>& other );
complex( const complex<double>& other );
```
_(until C++11)_

```cpp
constexpr complex( const complex<float>& other );
constexpr complex( const complex<double>& other );
```
_(since C++11)_

## Parameters
- `re`: the real part
- `im`: the imaginary part
- `other`: another complex number to use as source

## Notes
Since C++23, the copy constructor is required to be [trivial](/cpp/language/copy_constructor/#Trivial_copy_constructor) in order to satisfy the [TriviallyCopyable](/cpp/named_req/triviallycopyable/) requirement, but implementations generally make it trivial in all modes.

## See also
- [operator=](/cpp/numeric/complex/operator/)
- [operator""ifoperator""ioperator""il](/cpp/numeric/complex/operator""i/)
- [std::complex](/cpp/numeric/complex/)
- [C documentation](/c/numeric/complex/CMPLX/)
