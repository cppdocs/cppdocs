---
title: "std::erfc, std::erfcf, std::erfcl"
source_path: "cpp/numeric/math/erfc"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the [complementary error function](https://en.wikipedia.org/wiki/Complementary_error_function) of num, that is 1.0 - [std::erf](/cpp/numeric/math/erf/)(num), but without loss of precision for large num.The library provides overloads of std::erfc for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float erfc ( float num );
double erfc ( double num );
long double erfc ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
erfc ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float erfcf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double erfcl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
erfc ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double erfc ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If a range error occurs due to underflow, the correct result (after rounding) is returned.

## Notes
For the IEEE-compatible type double, underflow is guaranteed if num > 26.55.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::erfc(num) has the same effect as std::erfc(static_cast<double>(num)).

## Example
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>
 
double normalCDF(double x) // Phi(-∞, x) aka N(x)
{
    return std::erfc(-x / std::sqrt(2)) / 2;
}
 
int main()
{
    std::cout << "normal cumulative distribution function:\n"
              << std::fixed << std::setprecision(2);
    for (double n = 0; n < 1; n += 0.1)
        std::cout << "normalCDF(" << n << ") = " << 100 * normalCDF(n) << "%\n";
 
    std::cout << "special values:\n"
              << "erfc(-Inf) = " << std::erfc(-INFINITY) << '\n'
              << "erfc(Inf) = " << std::erfc(INFINITY) << '\n';
}
```

## See also
- [erferfferfl](/cpp/numeric/math/erf/)
- [C documentation](/c/numeric/math/erfc/)
