---
title: "std::tanh, std::tanhf, std::tanhl"
source_path: "cpp/numeric/math/tanh"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the hyperbolic tangent of num.The library provides overloads of std::tanh for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float tanh ( float num );
double tanh ( double num );
long double tanh ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
tanh ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float tanhf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double tanhl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
tanh ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double tanh ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If a range error occurs due to underflow, the correct result (after rounding) is returned.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/tanh.html) that in case of underflow, num is returned unmodified, and if that is not supported, and implementation-defined value no greater than DBL_MIN, FLT_MIN, and LDBL_MIN is returned.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::tanh(num) has the same effect as std::tanh(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iostream>
#include <random>
 
double get_random_between(double min, double max)
{
    std::random_device rd;
    std::mt19937 gen(rd());
    return std::uniform_real_distribution<>(min, max)(gen);
}
 
int main()
{
    const double x = get_random_between(-1.0, 1.0);
 
    std::cout << std::showpos
              << "tanh(+1) = " << std::tanh(+1) << '\n'
              << "tanh(-1) = " << std::tanh(-1) << '\n'
              << "tanh(x)*sinh(2*x)-cosh(2*x) = "
              << std::tanh(x) * std::sinh(2 * x) - std::cosh(2 * x) << '\n'
              // special values:
              << "tanh(+0) = " << std::tanh(+0.0) << '\n'
              << "tanh(-0) = " << std::tanh(-0.0) << '\n';
}
```

## See also
- [sinhsinhfsinhl](/cpp/numeric/math/sinh/)
- [coshcoshfcoshl](/cpp/numeric/math/cosh/)
- [atanhatanhfatanhl](/cpp/numeric/math/atanh/)
- [tanh(std::complex)](/cpp/numeric/complex/tanh/)
- [tanh(std::valarray)](/cpp/numeric/valarray/tanh/)
- [C documentation](/c/numeric/math/tanh/)
