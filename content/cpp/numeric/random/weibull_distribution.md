---
title: "std::weibull_distribution"
source_path: "cpp/numeric/random/weibull_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

The weibull_distribution meets the requirements of a [RandomNumberDistribution](/cpp/named_req/randomnumberdistribution/) and produces random numbers according to the [Weibull distribution](https://en.wikipedia.org/wiki/Weibull_distribution):

## Declarations
```cpp
template< class RealType = double >
class weibull_distribution;
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
 
    std::weibull_distribution<> d;
 
    std::map<int, int> hist;
    for (int n = 0; n != 10000; ++n)
        ++hist[std::round(d(gen))];
 
    std::cout << std::fixed << std::setprecision(1) << std::hex;
    for (auto [x, y] : hist)
        std::cout << x << ' ' << std::string(y / 200, '*') << '\n';
}
```
