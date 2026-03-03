---
title: "std::piecewise_constant_distribution"
source_path: "cpp/numeric/random/piecewise_constant_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

std::piecewise_constant_distribution produces random floating-point numbers, which are uniformly distributed within each of the several subintervals [bi, bi+1), each with its own weight wi. The set of interval boundaries and the set of weights are the parameters of this distribution.

## Declarations
```cpp
template< class RealType = double >
class piecewise_constant_distribution;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <map>
#include <random>
#include <string>
 
int main()
{
    std::random_device rd;
    std::mt19937 gen(rd());
    // 50% of the time, generate a random number between 0 and 1
    // 50% of the time, generate a random number between 10 and 15
    std::vector<double> i {0, 1, 10, 15};
    std::vector<double> w {1, 0, 1};
    std::piecewise_constant_distribution<> d(i.begin(), i.end(), w.begin());
 
    std::map<int, int> hist;
    for (int n {}; n < 1e4; ++n)
        ++hist[d(gen)];
 
    for (std::cout << std::hex << std::uppercase; auto [x, y] : hist)
        std::cout << x << ' ' << std::string(y / 100, '*') << '\n';
}
```
