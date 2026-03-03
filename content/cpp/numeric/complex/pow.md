---
title: "std::pow(std::complex)"
source_path: "cpp/numeric/complex/pow"
header: "<complex>"
category: "numeric"
since: "C++23"
---

1-4) Computes complex x raised to a complex power y with a branch cut along the negative real axis for the first argument. Non-complex arguments are treated as complex numbers with positive zero imaginary component.

## Declarations
```cpp
template< class T >
std::complex<T> pow( const std::complex<T>& x, int y );
```
_(until C++11)_

```cpp
template< class T >
std::complex<T> pow( const std::complex<T>& x, const std::complex<T>& y );
```

```cpp
template< class T >
std::complex<T> pow( const std::complex<T>& x, const T& y );
```

```cpp
template< class T >
std::complex<T> pow( const T& x, const std::complex<T>& y );
```

```cpp
Additional overloads (since C++11)
```

```cpp
template< class T1, class T2 >
std::complex</* common-type */>
pow( const std::complex<T1>& x, const std::complex<T2>& y );
```
_(until C++23)_

```cpp
template< class T1, class T2 >
std::complex<std::common_type_t<T1, T2>>
pow( const std::complex<T1>& x, const std::complex<T2>& y );
```
_(since C++23)_

```cpp
template< class T, class NonComplex >
std::complex</* common-type */>
pow( const std::complex<T>& x, const NonComplex& y );
```
_(until C++23)_

```cpp
template< class T, class NonComplex >
std::complex<std::common_type_t<T, NonComplex>>
pow( const std::complex<T>& x, const NonComplex& y );
```
_(since C++23)_

```cpp
template< class T, class NonComplex >
std::complex</* common-type */>
pow( const NonComplex& x, const std::complex<T>& y );
```
_(until C++23)_

```cpp
template< class T, class NonComplex >
std::complex<std::common_type_t<T, NonComplex>>
pow( const NonComplex& x, const std::complex<T>& y );
```
_(since C++23)_

## Parameters
- `x`: base
- `y`: exponent

## Notes
Overload (1) was provided in C++98 to match the extra overloads (2) of [std::pow](/cpp/numeric/math/pow/). Those overloads were removed by the resolution of [LWG issue 550](https://cplusplus.github.io/LWG/issue550), and overload (1) was removed by the resolution of [LWG issue 844](https://cplusplus.github.io/LWG/issue844).

The additional overloads are not required to be provided exactly as (A-C). They only need to be sufficient to ensure that for their first argument base and second argument exponent:

If base and/or exponent has type [std::complex](/cpp/numeric/complex/)<T>:

If one argument has type [std::complex](/cpp/numeric/complex/)<T1> and the other argument has type T2 or [std::complex](/cpp/numeric/complex/)<T2>, then std::pow(base, exponent) has the same effect as std::pow([std::complex](/cpp/numeric/complex/)<[std::common_type_t](/cpp/types/common_type/)<T1, T2>>(base),
[std::complex](/cpp/numeric/complex/)<[std::common_type_t](/cpp/types/common_type/)<T1, T2>>(exponent)).

If [std::common_type_t](/cpp/types/common_type/)<T1, T2> is not well-formed, then the program is ill-formed.

## Example
```cpp
#include <complex>
#include <iostream>
 
int main()
{
    std::cout << std::fixed;
 
    std::complex<double> z(1.0, 2.0);
    std::cout << "(1,2)^2 = " << std::pow(z, 2) << '\n';
 
    std::complex<double> z2(-1.0, 0.0); // square root of -1
    std::cout << "-1^0.5 = " << std::pow(z2, 0.5) << '\n';
 
    std::complex<double> z3(-1.0, -0.0); // other side of the cut
    std::cout << "(-1,-0)^0.5 = " << std::pow(z3, 0.5) << '\n';
 
    std::complex<double> i(0.0, 1.0); // i^i = exp(-pi / 2)
    std::cout << "i^i = " << std::pow(i, i) << '\n';
}
```

## See also
- [sqrt(std::complex)](/cpp/numeric/complex/sqrt/)
- [powpowfpowl](/cpp/numeric/math/pow/)
- [pow(std::valarray)](/cpp/numeric/valarray/pow/)
- [std::pow](/cpp/numeric/math/pow/)
- [C documentation](/c/numeric/complex/cpow/)
