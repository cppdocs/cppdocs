---
title: "std::log2, std::log2f, std::log2l"
source_path: "cpp/numeric/math/log2"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the [binary (base-2) logarithm](https://en.wikipedia.org/wiki/Binary_logarithm) of num.The library provides overloads of std::log2 for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float log2 ( float num );
double log2 ( double num );
long double log2 ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
log2 ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float log2f( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double log2l( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
log2 ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double log2 ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the base-2 logarithm of num (log2(num) or lb(num)) is returned.

## Notes
For integer num, the binary logarithm can be interpreted as the zero-based index of the most significant 1 bit in the input.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::log2(num) has the same effect as std::log2(static_cast<double>(num)).

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
    std::cout << "log2(65536) = " << std::log2(65536) << '\n'
              << "log2(0.125) = " << std::log2(0.125) << '\n'
              << "log2(0x020f) = " << std::log2(0x020f)
              << " (highest set bit is in position 9)\n"
              << "base-5 logarithm of 125 = "
              << std::log2(125) / std::log2(5) << '\n';
 
    // special values
    std::cout << "log2(1) = " << std::log2(1) << '\n'
              << "log2(+Inf) = " << std::log2(INFINITY) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "log2(0) = " << std::log2(0) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_DIVBYZERO))
        std::cout << "    FE_DIVBYZERO raised\n";
}
```

## See also
- [loglogflogl](/cpp/numeric/math/log/)
- [log10log10flog10l](/cpp/numeric/math/log10/)
- [log1plog1pflog1pl](/cpp/numeric/math/log1p/)
- [exp2exp2fexp2l](/cpp/numeric/math/exp2/)
- [C documentation](/c/numeric/math/log2/)
