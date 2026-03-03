---
title: "std::normal_distribution"
source_path: "cpp/numeric/random/normal_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

Generates random numbers according to the [Normal (or Gaussian) random number distribution](https://en.wikipedia.org/wiki/Normal_distribution). It is defined as:

## Declarations
```cpp
template< class RealType = double >
class normal_distribution;
```
_(since C++11)_

## Example
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>
#include <map>
#include <random>
#include <string>
 
int main()
{
    std::random_device rd{};
    std::mt19937 gen{rd()};
 
    // Values near the mean are the most likely. Standard deviation
    // affects the dispersion of generated values from the mean.
    std::normal_distribution d{5.0, 2.0};
 
    // Draw a sample from the normal distribution and round it to an integer.
    auto random_int = [&d, &gen]{ return std::lround(d(gen)); };
 
    std::map<long, unsigned> histogram{};
    for (auto n{10000}; n; --n)
        ++histogram[random_int()];
 
    for (const auto [k, v] : histogram)
        std::cout << std::setw(2) << k << ' ' << std::string(v / 200, '*') << '\n';
}
```
