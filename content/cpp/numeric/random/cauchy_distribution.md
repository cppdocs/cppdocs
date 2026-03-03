---
title: "std::cauchy_distribution"
source_path: "cpp/numeric/random/cauchy_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

Produces random numbers according to a [Cauchy distribution](https://en.wikipedia.org/wiki/Cauchy_distribution) (also called Lorentz distribution):

## Declarations
```cpp
template< class RealType = double >
class cauchy_distribution;
```
_(since C++11)_

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <iomanip>
#include <iostream>
#include <map>
#include <random>
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
    std::random_device rd{};
    std::mt19937 gen{rd()};
 
    auto cauchy = [&gen](const float x0, const float 𝛾)
    {
        std::cauchy_distribution<float> d{x0 /* a */, 𝛾 /* b */};
 
        const int norm = 1'00'00;
        const float cutoff = 0.005f;
 
        std::map<int, int> hist{};
        for (int n = 0; n != norm; ++n)
            ++hist[std::round(d(gen))];
 
        std::vector<float> bars;
        std::vector<int> indices;
        for (auto const& [n, p] : hist)
            if (float x = p * (1.0 / norm); cutoff < x)
            {
                bars.push_back(x);
                indices.push_back(n);
            }
 
        std::cout << "x₀ = " << x0 << ", 𝛾 = " << 𝛾 << ":\n";
        draw_vbars<4,3>(bars);
        for (int n : indices)
            std::cout << std::setw(2) << n << "  ";
        std::cout << "\n\n";
    };
 
    cauchy(/* x₀ = */ -2.0f, /* 𝛾 = */ 0.50f);
    cauchy(/* x₀ = */ +0.0f, /* 𝛾 = */ 1.25f);
}
```
