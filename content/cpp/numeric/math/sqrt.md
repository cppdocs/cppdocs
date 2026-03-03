---
title: "std::sqrt, std::sqrtf, std::sqrtl"
source_path: "cpp/numeric/math/sqrt"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the square root of num.The library provides overloads of std::sqrt for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float sqrt ( float num );
double sqrt ( double num );
long double sqrt ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
sqrt ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float sqrtf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double sqrtl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
sqrt ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double sqrt ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, square root of num (\({\small \sqrt{num} }\)√num), is returned.

## Notes
std::sqrt is required by the IEEE standard to be correctly rounded from the infinitely precise result. In particular, the exact result is produced if it can be represented in the floating-point type. The only other operations which require this are the [arithmetic operators](/cpp/language/operator_arithmetic/) and the function [std::fma](/cpp/numeric/math/fma/). Other functions, including [std::pow](/cpp/numeric/math/pow/), are not so constrained.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::sqrt(num) has the same effect as std::sqrt(static_cast<double>(num)).

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <cstring>
#include <iostream>
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    // normal use
    std::cout << "sqrt(100) = " << std::sqrt(100) << '\n'
              << "sqrt(2) = " << std::sqrt(2) << '\n'
              << "golden ratio = " << (1 + std::sqrt(5)) / 2 << '\n';
 
    // special values
    std::cout << "sqrt(-0) = " << std::sqrt(-0.0) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "sqrt(-1.0) = " << std::sqrt(-1) << '\n';
    if (errno == EDOM)
        std::cout << "    errno = EDOM " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_INVALID))
        std::cout << "    FE_INVALID raised\n";
}
```

## See also
- [powpowfpowl](/cpp/numeric/math/pow/)
- [cbrtcbrtfcbrtl](/cpp/numeric/math/cbrt/)
- [hypothypotfhypotl](/cpp/numeric/math/hypot/)
- [sqrt(std::complex)](/cpp/numeric/complex/sqrt/)
- [sqrt(std::valarray)](/cpp/numeric/valarray/sqrt/)
- [C documentation](/c/numeric/math/sqrt/)
