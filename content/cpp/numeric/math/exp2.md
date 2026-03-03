---
title: "std::exp2, std::exp2f, std::exp2l"
source_path: "cpp/numeric/math/exp2"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes 2 raised to the given power num.The library provides overloads of std::exp2 for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float exp2 ( float num );
double exp2 ( double num );
long double exp2 ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
exp2 ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float exp2f( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double exp2l( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
exp2 ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double exp2 ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the base-2 exponential of num (2num) is returned.

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::exp2(num) has the same effect as std::exp2(static_cast<double>(num)).

For integral exponents, it may be preferable to use [std::ldexp](/cpp/numeric/math/ldexp/).

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
    std::cout << "exp2(4) = " << std::exp2(4) << '\n'
              << "exp2(0.5) = " << std::exp2(0.5) << '\n'
              << "exp2(-4) = " << std::exp2(-4) << '\n';
 
    // special values
    std::cout << "exp2(-0) = " << std::exp2(-0.0) << '\n'
              << "exp2(-Inf) = " << std::exp2(-INFINITY) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
    const double inf = std::exp2(1024);
    const bool is_range_error = errno == ERANGE;
 
    std::cout << "exp2(1024) = " << inf << '\n';
    if (is_range_error)
        std::cout << "    errno == ERANGE: " << std::strerror(ERANGE) << '\n';
    if (std::fetestexcept(FE_OVERFLOW))
        std::cout << "    FE_OVERFLOW raised\n";
}
```

## See also
- [expexpfexpl](/cpp/numeric/math/exp/)
- [expm1expm1fexpm1l](/cpp/numeric/math/expm1/)
- [ldexpldexpfldexpl](/cpp/numeric/math/ldexp/)
- [log2log2flog2l](/cpp/numeric/math/log2/)
- [C documentation](/c/numeric/math/exp2/)
