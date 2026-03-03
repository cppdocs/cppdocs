---
title: "std::div, std::ldiv, std::lldiv, std::imaxdiv"
source_path: "cpp/numeric/math/div"
header: "<cstdlib>"
category: "numeric"
---

Computes both the quotient and the remainder of the division of the numerator x by the denominator y.

## Declarations
```cpp
std::div_t div( int x, int y );
```
_(constexpr since C++23)_

```cpp
std::ldiv_t div( long x, long y );
```
_(constexpr since C++23)_

```cpp
std::lldiv_t div( long long x, long long y );
```
_(since C++11) (constexpr since C++23)_

```cpp
std::ldiv_t ldiv( long x, long y );
```
_(constexpr since C++23)_

```cpp
std::lldiv_t lldiv( long long x, long long y );
```
_(since C++11) (constexpr since C++23)_

```cpp
std::imaxdiv_t div( std::intmax_t x, std::intmax_t y );
```
_(since C++11) (constexpr since C++23)_

```cpp
std::imaxdiv_t imaxdiv( std::intmax_t x, std::intmax_t y );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `x, y`: integer values

## Return value
If both the remainder and the quotient can be represented as objects of the corresponding type (int, long, long long, [std::intmax_t](/cpp/types/integer/), respectively), returns both as an object of type std::div_t, std::ldiv_t, std::lldiv_t, std::imaxdiv_t defined as follows:

## Notes
Until [CWG issue 614](https://cplusplus.github.io/CWG/issues/614.html) was resolved ([N2757](https://wg21.link/n2757)), the rounding direction of the quotient and the sign of the remainder in the [built-in division and remainder operators](/cpp/language/operator_arithmetic/) was implementation-defined if either of the operands was negative, but it was well-defined in std::div.

On many platforms, a single CPU instruction obtains both the quotient and the remainder, and this function may leverage that, although compilers are generally able to merge nearby / and % where suitable.

## Example
```cpp
#include <cassert>
#include <cmath>
#include <cstdlib>
#include <iostream>
#include <sstream>
#include <string>
 
std::string division_with_remainder_string(int dividend, int divisor)
{
    auto dv = std::div(dividend, divisor);
    assert(dividend == divisor * dv.quot + dv.rem);
    assert(dv.quot == dividend / divisor);
    assert(dv.rem == dividend % divisor);
 
    auto sign = [](int n){ return n > 0 ? 1 : n < 0 ? -1 : 0; };
    assert((dv.rem == 0) or (sign(dv.rem) == sign(dividend)));
 
    return (std::ostringstream() << std::showpos << dividend << " = "
                                 << divisor << " * (" << dv.quot << ") "
                                 << std::showpos << dv.rem).str();
}
 
std::string itoa(int n, int radix /*[2..16]*/)
{
    std::string buf;
    std::div_t dv{}; dv.quot = n;
 
    do
    {
        dv = std::div(dv.quot, radix);
        buf += "0123456789abcdef"[std::abs(dv.rem)]; // string literals are arrays
    }
    while (dv.quot);
 
    if (n < 0)
        buf += '-';
 
    return {buf.rbegin(), buf.rend()};
}
 
int main()
{
    std::cout << division_with_remainder_string(369, 10) << '\n'
              << division_with_remainder_string(369, -10) << '\n'
              << division_with_remainder_string(-369, 10) << '\n'
              << division_with_remainder_string(-369, -10) << "\n\n";
 
    std::cout << itoa(12345, 10) << '\n'
              << itoa(-12345, 10) << '\n'
              << itoa(42, 2) << '\n'
              << itoa(65535, 16) << '\n';
}
```

## See also
- [fmodfmodffmodl](/cpp/numeric/math/fmod/)
- [remainderremainderfremainderl](/cpp/numeric/math/remainder/)
- [remquoremquofremquol](/cpp/numeric/math/remquo/)
- [C documentation](/c/numeric/math/div/)
