---
title: "std::expint, std::expintf, std::expintl"
source_path: "cpp/numeric/special_functions/expint"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1-3) Computes the [Exponential integral](https://en.wikipedia.org/wiki/Exponential_integral) of num.The library provides overloads of std::expint for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
float expint ( float num );
double expint ( double num );
long double expint ( long double num );
```
_(since C++17) (until C++23)_

```cpp
/* floating-point-type */ expint( /* floating-point-type */ num );
```
_(since C++23)_

```cpp
float expintf( float num );
```
_(since C++17)_

```cpp
long double expintl( long double num );
```
_(since C++17)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
double expint ( Integer num );
```
_(since C++17)_

## Parameters
- `num`: floating-point or integer value

## Notes
Implementations that do not support C++17, but support [ISO 29124:2010](/cpp/experimental/special_math/), provide this function if __STDCPP_MATH_SPEC_FUNCS__ is defined by the implementation to a value at least 201003L and if the user defines __STDCPP_WANT_MATH_SPEC_FUNCS__ before including any standard library headers.

Implementations that do not support ISO 29124:2010 but support TR 19768:2007 (TR1), provide this function in the header tr1/cmath and namespace std::tr1.

An implementation of this function is also [available in boost.math](https://www.boost.org/doc/libs/release/libs/math/doc/html/math_toolkit/expint/expint_i.html).

The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::expint(num) has the same effect as std::expint(static_cast<double>(num)).

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>
 
template<int Height = 5, int BarWidth = 1, int Padding = 1, int Offset = 0, class Seq>
void draw_vbars(Seq&& s, const bool DrawMinMax = true)
{
    static_assert(0 < Height and 0 < BarWidth and 0 <= Padding and 0 <= Offset);
 
    auto cout_n = [](auto&& v, int n = 1)
    {
        while (n-- > 0)
            std::cout << v;
    };
 
    const auto [min, max] = std::minmax_element(std::cbegin(s), std::cend(s));
 
    std::vector<std::div_t> qr;
    for (typedef decltype(*std::cbegin(s)) V; V e : s)
        qr.push_back(std::div(std::lerp(V(0), 8 * Height,
                                        (e - *min) / (*max - *min)), 8));
 
    for (auto h{Height}; h-- > 0; cout_n('\n'))
    {
        cout_n(' ', Offset);
 
        for (auto dv : qr)
        {
            const auto q{dv.quot}, r{dv.rem};
            unsigned char d[]{0xe2, 0x96, 0x88, 0}; // Full Block: '█'
            q < h ? d[0] = ' ', d[1] = 0 : q == h ? d[2] -= (7 - r) : 0;
            cout_n(d, BarWidth), cout_n(' ', Padding);
        }
 
        if (DrawMinMax && Height > 1)
            Height - 1 == h ? std::cout << "┬ " << *max:
                          h ? std::cout << "│ "
                            : std::cout << "┴ " << *min;
    }
}
 
int main()
{
    std::cout << "Ei(0) = " << std::expint(0) << '\n'
              << "Ei(1) = " << std::expint(1) << '\n'
              << "Gompertz constant = " << -std::exp(1) * std::expint(-1) << '\n';
 
    std::vector<float> v;
    for (float x{1.f}; x < 8.8f; x += 0.3565f)
        v.push_back(std::expint(x));
    draw_vbars<9, 1, 1>(v);
}
```
