---
title: "std::extreme_value_distribution"
source_path: "cpp/numeric/random/extreme_value_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

Produces random numbers according to the [Generalized extreme value distribution](https://en.wikipedia.org/wiki/Generalized_extreme_value_distribution) (it is also known as Gumbel Type I, log-Weibull, Fisher-Tippett Type I):

## Declarations
```cpp
template< class RealType = double >
class extreme_value_distribution;
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
 
    std::extreme_value_distribution<> d{-1.618f, 1.618f};
 
    const int norm = 10'000;
    const float cutoff = 0.000'3f;
 
    std::map<int, int> hist{};
    for (int n = 0; n != norm; ++n)
        ++hist[std::round(d(gen))];
 
    std::vector<float> bars;
    std::vector<int> indices;
    for (const auto& [n, p] : hist)
        if (const float x = p * (1.0f / norm); x > cutoff)
        {
            bars.push_back(x);
            indices.push_back(n);
        }
 
    draw_vbars<8,4>(bars);
 
    for (int n : indices)
        std::cout << ' ' << std::setw(2) << n << "  ";
    std::cout << '\n';
}
```
