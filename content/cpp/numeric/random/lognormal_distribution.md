---
title: "std::lognormal_distribution"
source_path: "cpp/numeric/random/lognormal_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

The lognormal_distribution random number distribution produces random numbers x > 0 according to a [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution):

## Declarations
```cpp
template< class RealType = double >
class lognormal_distribution;
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
    std::random_device rd;
    std::mt19937 gen(rd());
 
    std::lognormal_distribution<> d(1.6, 0.25);
 
    std::map<int, int> hist;
    for (int n = 0; n < 1e4; ++n)
        ++hist[std::round(d(gen))];
 
    for (std::cout << std::fixed << std::setprecision(1); auto [x, y] : hist)
        std::cout << std::hex << x << ' ' << std::string(y / 200, '*') << '\n';
}
```
