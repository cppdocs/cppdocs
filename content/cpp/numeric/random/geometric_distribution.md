---
title: "std::geometric_distribution"
source_path: "cpp/numeric/random/geometric_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

Produces random non-negative integer values i, distributed according to discrete probability function:

## Declarations
```cpp
template< class IntType = int >
class geometric_distribution;
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
    std::mt19937 gen(rd());
 
    std::geometric_distribution<> d;
        // same as 
        // std::negative_binomial_distribution<> d(1, 0.5):
 
    std::map<int, int> hist;
    for (int n = 0; n != 10000; ++n)
        ++hist[d(gen)];
 
    for (auto [x, y] : hist)
    {
        const char c = x < 10 ? x + '0' : x - 10 + 'a';
        std::cout << c << ' ' << std::string(y / 100, '*') << '\n';
    }
}
```
