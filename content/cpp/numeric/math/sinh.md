---
title: "std::sinh, std::sinhf, std::sinhl"
source_path: "cpp/numeric/math/sinh"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the hyperbolic sine of num.The library provides overloads of std::sinh for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float sinh ( float num );
double sinh ( double num );
long double sinh ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
sinh ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float sinhf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double sinhl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
sinh ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double sinh ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If a range error due to overflow occurs, [±HUGE_VAL](/cpp/numeric/math/huge_val/), ±HUGE_VALF, or ±HUGE_VALL is returned.

## Notes
[POSIX specifies](https://pubs.opengroup.org/onlinepubs/9699919799/functions/sinh.html) that in case of underflow, num is returned unmodified, and if that is not supported, and implementation-defined value no greater than [DBL_MIN](/cpp/types/climits/), [FLT_MIN](/cpp/types/climits/), and [LDBL_MIN](/cpp/types/climits/) is returned.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::sinh(num) has the same effect as std::sinh(static_cast<double>(num)).

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
    const double x = 42;
 
    std::cout << "sinh(1) = " << std::sinh(1) << '\n'
              << "sinh(-1) = " << std::sinh(-1) << '\n'
              << "log(sinh(" << x << ")+cosh(" << x << ")) = "
              << std::log(std::sinh(x) + std::cosh(x)) << '\n';
 
    // special values
    std::cout << "sinh(+0) = " << std::sinh(0.0) << '\n'
              << "sinh(-0) = " << std::sinh(-0.0) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "sinh(710.5) = " << std::sinh(710.5) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_OVERFLOW))
        std::cout << "    FE_OVERFLOW raised\n";
}
```

## See also
- [coshcoshfcoshl](/cpp/numeric/math/cosh/)
- [tanhtanhftanhl](/cpp/numeric/math/tanh/)
- [asinhasinhfasinhl](/cpp/numeric/math/asinh/)
- [sinh(std::complex)](/cpp/numeric/complex/sinh/)
- [sinh(std::valarray)](/cpp/numeric/valarray/sinh/)
- [C documentation](/c/numeric/math/sinh/)
