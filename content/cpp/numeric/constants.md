---
title: "Mathematical constants"
source_path: "cpp/numeric/constants"
category: "numeric"
---

[1 Constants (since C++20)](#Constants_.28since_C.2B.2B20.29)

## Notes
A program that instantiates a primary template of a mathematical constant variable template is ill-formed.

The standard library specializes mathematical constant variable templates for all floating-point types (i.e. float, doublelong double , and [fixed width floating-point types](/cpp/types/floating-point/)(since C++23)).

A program may partially or explicitly specialize a mathematical constant variable template provided that the specialization depends on a [program-defined type](/cpp/language/type-id/#Program-defined_type).

## Example
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>
#include <limits>
#include <numbers>
#include <string_view>
 
auto egamma_aprox(const unsigned iterations)
{
    long double s{};
    for (unsigned m{2}; m != iterations; ++m)
        if (const long double t{std::riemann_zetal(m) / m}; m % 2)
            s -= t;
        else
            s += t;
    return s;
};
 
int main()
{
    using namespace std::numbers;
    using namespace std::string_view_literals;
 
    const auto x = std::sqrt(inv_pi) / inv_sqrtpi +
        std::ceil(std::exp2(log2e)) + sqrt3 * inv_sqrt3 + std::exp(0);
    const auto v = (phi * phi - phi) + 1 / std::log2(sqrt2) +
        log10e * ln10 + std::pow(e, ln2) - std::cos(pi);    
    std::cout << "The answer is " << x * v << '\n';
 
    constexpr auto γ{"0.577215664901532860606512090082402"sv};
    std::cout
        << "γ as 10⁶ sums of ±ζ(m)/m   = "
        << egamma_aprox(1'000'000) << '\n'
        << "γ as egamma_v<float>       = "
        << std::setprecision(std::numeric_limits<float>::digits10 + 1)
        << egamma_v<float> << '\n'
        << "γ as egamma_v<double>      = "
        << std::setprecision(std::numeric_limits<double>::digits10 + 1)
        << egamma_v<double> << '\n'
        << "γ as egamma_v<long double> = "
        << std::setprecision(std::numeric_limits<long double>::digits10 + 1)
        << egamma_v<long double> << '\n'
        << "γ with " << γ.length() - 1 << " digits precision = " << γ << '\n';
}
```

## See also
- [ratio](/cpp/numeric/ratio/ratio/)
