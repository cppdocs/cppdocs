---
title: "std::log, std::logf, std::logl"
source_path: "cpp/numeric/math/log"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the [natural (base e) logarithm](https://en.wikipedia.org/wiki/Natural_logarithm) of num.The library provides overloads of std::log for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float log ( float num );
double log ( double num );
long double log ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
log ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float logf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double logl( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
log ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double log ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the natural (base-e) logarithm of num (ln(num) or loge(num)) is returned.

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::log(num) has the same effect as std::log(static_cast<double>(num)).

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
    std::cout << "log(1) = " << std::log(1) << '\n'
              << "base-5 logarithm of 125 = " << std::log(125) / std::log(5) << '\n';
 
    // special values
    std::cout << "log(1) = " << std::log(1) << '\n'
              << "log(+Inf) = " << std::log(INFINITY) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "log(0) = " << std::log(0) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_DIVBYZERO))
        std::cout << "    FE_DIVBYZERO raised\n";
}
```

## See also
- [log10log10flog10l](/cpp/numeric/math/log10/)
- [log2log2flog2l](/cpp/numeric/math/log2/)
- [log1plog1pflog1pl](/cpp/numeric/math/log1p/)
- [expexpfexpl](/cpp/numeric/math/exp/)
- [log(std::complex)](/cpp/numeric/complex/log/)
- [log(std::valarray)](/cpp/numeric/valarray/log/)
- [C documentation](/c/numeric/math/log/)
