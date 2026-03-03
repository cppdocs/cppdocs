---
title: "std::acosh, std::acoshf, std::acoshl"
source_path: "cpp/numeric/math/acosh"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the inverse hyperbolic cosine of num.The library provides overloads of std::acosh for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float acosh ( float num );
double acosh ( double num );
long double acosh ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
acosh ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float acoshf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double acoshl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
acosh ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double acosh ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the inverse hyperbolic cosine of num (cosh-1(num), or arcosh(num)) on the interval [0, +∞], is returned.

## Notes
Although the C standard (to which C++ refers for this function) names this function "arc hyperbolic cosine", the inverse functions of the hyperbolic functions are the area functions. Their argument is the area of a hyperbolic sector, not an arc. The correct name is "inverse hyperbolic cosine" (used by POSIX) or "area hyperbolic cosine".

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::acosh(num) has the same effect as std::acosh(static_cast<double>(num)).

## See also
- [asinhasinhfasinhl](/cpp/numeric/math/asinh/)
- [atanhatanhfatanhl](/cpp/numeric/math/atanh/)
- [coshcoshfcoshl](/cpp/numeric/math/cosh/)
- [acosh(std::complex)](/cpp/numeric/complex/acosh/)
- [C documentation](/c/numeric/math/acosh/)
