---
title: "std::asinh, std::asinhf, std::asinhl"
source_path: "cpp/numeric/math/asinh"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the inverse hyperbolic sine of num.The library provides overloads of std::asinh for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float asinh ( float num );
double asinh ( double num );
long double asinh ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
asinh ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float asinhf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double asinhl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
asinh ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double asinh ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the inverse hyperbolic sine of num (sinh-1(num), or arsinh(num)), is returned.

## Notes
Although the C standard (to which C++ refers for this function) names this function "arc hyperbolic sine", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "inverse hyperbolic sine" (used by POSIX) or "area hyperbolic sine".

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::asinh(num) has the same effect as std::asinh(static_cast<double>(num)).

## See also
- [acoshacoshfacoshl](/cpp/numeric/math/acosh/)
- [atanhatanhfatanhl](/cpp/numeric/math/atanh/)
- [sinhsinhfsinhl](/cpp/numeric/math/sinh/)
- [asinh(std::complex)](/cpp/numeric/complex/asinh/)
- [C documentation](/c/numeric/math/asinh/)
