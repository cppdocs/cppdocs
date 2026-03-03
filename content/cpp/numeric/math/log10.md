---
title: "std::log10, std::log10f, std::log10l"
source_path: "cpp/numeric/math/log10"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the [common (base-10) logarithm](https://en.wikipedia.org/wiki/Common_logarithm) of num.The library provides overloads of std::log10 for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float log10 ( float num );
double log10 ( double num );
long double log10 ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
log10 ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float log10f( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double log10l( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
log10 ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double log10 ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the common (base-10) logarithm of num (log10(num) or lg(num)) is returned.

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::log10(num) has the same effect as std::log10(static_cast<double>(num)).

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
    std::cout << "log10(1000) = " << std::log10(1000) << '\n'
              << "log10(0.001) = " << std::log10(0.001) << '\n'
              << "base-5 logarithm of 125 = "
              << std::log10(125) / std::log10(5) << '\n';
 
    // special values
    std::cout << "log10(1) = " << std::log10(1) << '\n'
              << "log10(+Inf) = " << std::log10(INFINITY) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "log10(0) = " << std::log10(0) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_DIVBYZERO))
        std::cout << "    FE_DIVBYZERO raised\n";
}
```

## See also
- [loglogflogl](/cpp/numeric/math/log/)
- [log2log2flog2l](/cpp/numeric/math/log2/)
- [log1plog1pflog1pl](/cpp/numeric/math/log1p/)
- [log10(std::complex)](/cpp/numeric/complex/log10/)
- [log10(std::valarray)](/cpp/numeric/valarray/log10/)
- [C documentation](/c/numeric/math/log10/)
