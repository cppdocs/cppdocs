---
title: "std::exponential_distribution"
source_path: "cpp/numeric/random/exponential_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

Produces random non-negative floating-point values \(\small x\)x, distributed according to probability density function:

## Declarations
```cpp
template< class RealType = double >
class exponential_distribution;
```
_(since C++11)_

## Notes
Some implementations may occasionally return infinity if RealType is float. This is [LWG issue 2524](https://cplusplus.github.io/LWG/issue2524).

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
    std::mt19937 gen(rd());
 
    // if particles decay once per second on average,
    // how much time, in seconds, until the next one?
    std::exponential_distribution<> d(1);
 
    std::map<int, int> hist;
    for (int n = 0; n != 10000; ++n)
        ++hist[2 * d(gen)];
 
    for (auto const& [x, y] : hist)
        std::cout << std::fixed << std::setprecision(1)
                  << x / 2.0 << '-' << (x + 1) / 2.0 << ' '
                  << std::string(y / 200, '*') << '\n';
}
```
