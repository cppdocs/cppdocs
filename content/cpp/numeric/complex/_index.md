---
title: "std::complex"
source_path: "cpp/numeric/complex"
header: "<complex>"
---

Specializations of std::complex for cv-unqualified standard(until C++23) [floating-point types](/cpp/language/types/#Floating-point_types) are [TriviallyCopyable](/cpp/named_req/TriviallyCopyable/)(since C++23) [LiteralTypes](/cpp/named_req/LiteralType/) for representing and manipulating [complex number](https://en.wikipedia.org/wiki/complex_number).

## Declarations
```cpp
template< class T >
class complex;
```

```cpp
template<> class complex<float>;
```
_(until C++23)_

```cpp
template<> class complex<double>;
```
_(until C++23)_

```cpp
template<> class complex<long double>;
```
_(until C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_constexpr_complex
201711L
(C++20)
constexpr simple complex mathematical functions in <complex>
202306L
(C++26)
More constexpr for <complex>
__cpp_lib_tuple_like
202311L
(C++26)
Add tuple protocol to std::complex

## Example
```cpp
#include <cmath>
#include <complex>
#include <iomanip>
#include <iostream>
#include <ranges>
 
int main()
{
    using namespace std::complex_literals;
    std::cout << std::fixed << std::setprecision(1);
 
    std::complex<double> z1 = 1i * 1i; // imaginary unit squared
    std::cout << "i * i = " << z1 << '\n';
 
    std::complex<double> z2 = std::pow(1i, 2); // imaginary unit squared
    std::cout << "pow(i, 2) = " << z2 << '\n';
 
    const double PI = std::acos(-1); // or std::numbers::pi in C++20
    std::complex<double> z3 = std::exp(1i * PI); // Euler's formula
    std::cout << "exp(i * pi) = " << z3 << '\n';
 
    std::complex<double> z4 = 1.0 + 2i, z5 = 1.0 - 2i; // conjugates
    std::cout << "(1 + 2i) * (1 - 2i) = " << z4 * z5 << '\n';
 
    const auto zz = {0.0 + 1i, 2.0 + 3i, 4.0 + 5i};
#if __cpp_lib_tuple_like >= 202311L
    for (double re : zz | std::views::keys)
        std::cout << re << ' ';
    std::cout << '\n';
    for (double im : zz | std::views::values)
        std::cout << im << ' ';
    std::cout << '\n';
#else
    for (double re : zz | std::views::transform([](auto z){ return z.real(); }))
        std::cout << re << ' ';
    std::cout << '\n';
    for (double im : zz | std::views::transform([](auto z){ return z.imag(); }))
        std::cout << im << ' ';
    std::cout << '\n';
#endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 387 | C++98 | std::complex was not guaranteed to be compatible with C complex | guaranteed to be compatible |

## See also
- [C documentation](/c/numeric/complex/)
