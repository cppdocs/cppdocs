---
title: "std::piecewise_linear_distribution"
source_path: "cpp/numeric/random/piecewise_linear_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

std::piecewise_linear_distribution produces random floating-point numbers, which are distributed according to a linear probability density function within each of the several subintervals \(\small{[b_i, b_{i+1})}\)[bi, bi+1). The distribution is such that the probability density at each interval boundary is exactly the predefined value \(\small{p_i}\)pi.

## Declarations
```cpp
template< class RealType = double >
class piecewise_linear_distribution;
```
_(since C++11)_

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <map>
#include <random>
#include <string>
 
int main()
{
    std::random_device rd;
    std::mt19937 gen{rd()};
    // increase the probability from 0 to 5
    // remain flat from 5 to 10
    // decrease from 10 to 15 at the same rate
    std::vector<double> i{0, 5, 10, 15};
    std::vector<double> w{0, 1, 1, 0};
    std::piecewise_linear_distribution<> d{i.begin(), i.end(), w.begin()};
 
    std::map<int, int> hist;
    for (int n{}; n < 1e4; ++n)
        ++hist[d(gen)];
 
    for (auto [x, y] : hist)
        std::cout << std::setw(2) << std::setfill('0') << x
                  << ' ' << std::string(y / 100, '*') << '\n';
}
```
