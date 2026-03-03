---
title: "std::cosh, std::coshf, std::coshl"
source_path: "cpp/numeric/math/cosh"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the hyperbolic cosine of num.The library provides overloads of std::cosh for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float cosh ( float num );
double cosh ( double num );
long double cosh ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
cosh ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float coshf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double coshl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
cosh ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double cosh ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If a range error due to overflow occurs, [+HUGE_VAL](/cpp/numeric/math/huge_val/), +HUGE_VALF, or +HUGE_VALL is returned.

## Notes
For the IEEE-compatible type double, if |num| > 710.5, then std::cosh(num) overflows.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::cosh(num) has the same effect as std::cosh(static_cast<double>(num)).

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
 
    std::cout << "cosh(1) = " << std::cosh(1) << '\n'
              << "cosh(-1) = " << std::cosh(-1) << '\n'
              << "log(sinh(" << x << ")+cosh(" << x << ")) = "
              << std::log(std::sinh(x) + std::cosh(x)) << '\n';
 
    // special values
    std::cout << "cosh(+0) = " << std::cosh(0.0) << '\n'
              << "cosh(-0) = " << std::cosh(-0.0) << '\n';
 
    // error handling
    errno=0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "cosh(710.5) = " << std::cosh(710.5) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_OVERFLOW))
        std::cout << "    FE_OVERFLOW raised\n";
}
```

## See also
- [sinhsinhfsinhl](/cpp/numeric/math/sinh/)
- [tanhtanhftanhl](/cpp/numeric/math/tanh/)
- [acoshacoshfacoshl](/cpp/numeric/math/acosh/)
- [cosh(std::complex)](/cpp/numeric/complex/cosh/)
- [cosh(std::valarray)](/cpp/numeric/valarray/cosh/)
- [C documentation](/c/numeric/math/cosh/)
