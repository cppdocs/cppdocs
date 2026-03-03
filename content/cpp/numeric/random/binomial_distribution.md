---
title: "std::binomial_distribution"
source_path: "cpp/numeric/random/binomial_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

Produces random non-negative integer values i, distributed according to discrete probability function:

## Declarations
```cpp
template< class IntType = int >
class binomial_distribution;
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
    // perform 4 trials, each succeeds 1 in 2 times
    std::binomial_distribution<> d(4, 0.5);
 
    std::map<int, int> hist;
    for (int n = 0; n != 10000; ++n)
        ++hist[d(gen)];
 
    for (auto const& [x, y] : hist)
        std::cout << x << ' ' << std::string(y / 100, '*') << '\n';
}
```
