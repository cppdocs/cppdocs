---
title: "std::lgamma, std::lgammaf, std::lgammal"
source_path: "cpp/numeric/math/lgamma"
header: "<cmath>"
category: "numeric"
since: "C++26"
---

1-3) Computes the natural logarithm of the absolute value of the [gamma function](https://en.wikipedia.org/wiki/gamma_function) of num.The library provides overloads of std::lgamma for all cv-unqualified floating-point types as the type of the parameter.(since C++23)

## Declarations
```cpp
float lgamma ( float num );
double lgamma ( double num );
long double lgamma ( long double num );
```
_(until C++23)_

```cpp
/*floating-point-type*/
lgamma ( /*floating-point-type*/ num );
```
_(since C++23) (constexpr since C++26)_

```cpp
float lgammaf( float num );
```
_(since C++11) (constexpr since C++26)_

```cpp
long double lgammal( long double num );
```
_(since C++11) (constexpr since C++26)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr /*deduced-simd-t*/<V>
lgamma ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads (since C++11)
```

```cpp
template< class Integer >
double lgamma ( Integer num );
```
_(constexpr since C++26)_

## Parameters
- `num`: floating-point or integer value

## Return value
If no errors occur, the value of the logarithm of the gamma function of num, that is \(\log_{e}|{\int_0^\infty t^{num-1} e^{-t} \mathsf{d}t}|\)loge|∫∞0tnum-1 e-t dt|, is returned.

## Notes
If num is a natural number, std::lgamma(num) is the logarithm of the factorial of num - 1.

The [POSIX version of lgamma](https://pubs.opengroup.org/onlinepubs/9699919799/functions/lgamma.html) is not thread-safe: each execution of the function stores the sign of the gamma function of num in the static external variable signgam. Some implementations provide lgamma_r, which takes a pointer to user-provided storage for singgam as the second parameter, and is thread-safe.

There is a non-standard function named gamma in various implementations, but its definition is inconsistent. For example, glibc and 4.2BSD version of gamma executes lgamma, but 4.4BSD version of gamma executes tgamma.

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::lgamma(num) has the same effect as std::lgamma(static_cast<double>(num)).

## Example
```cpp
#include <cerrno>
#include <cfenv>
#include <cmath>
#include <cstring>
#include <iostream>
 
// #pragma STDC FENV_ACCESS ON
 
const double pi = std::acos(-1); // or std::numbers::pi since C++20
 
int main()
{
    std::cout << "lgamma(10) = " << std::lgamma(10)
              << ", log(9!) = " << std::log(std::tgamma(10))
              << ", exp(lgamma(10)) = " << std::exp(std::lgamma(10)) << '\n'
              << "lgamma(0.5) = " << std::lgamma(0.5)
              << ", log(sqrt(pi)) = " << std::log(std::sqrt(pi)) << '\n';
 
    // special values
    std::cout << "lgamma(1) = " << std::lgamma(1) << '\n'
              << "lgamma(+Inf) = " << std::lgamma(INFINITY) << '\n';
 
    // error handling
    errno = 0;
    std::feclearexcept(FE_ALL_EXCEPT);
 
    std::cout << "lgamma(0) = " << std::lgamma(0) << '\n';
 
    if (errno == ERANGE)
        std::cout << "    errno == ERANGE: " << std::strerror(errno) << '\n';
    if (std::fetestexcept(FE_DIVBYZERO))
        std::cout << "    FE_DIVBYZERO raised\n";
}
```

## See also
- [tgammatgammaftgammal](/cpp/numeric/math/tgamma/)
- [C documentation](/c/numeric/math/lgamma/)
