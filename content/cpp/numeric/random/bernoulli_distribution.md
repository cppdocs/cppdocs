---
title: "std::bernoulli_distribution"
source_path: "cpp/numeric/random/bernoulli_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

Produces random boolean values, according to the discrete probability function. The probability of true is

## Declarations
```cpp
class bernoulli_distribution;
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
    // give "true" 1/4 of the time
    // give "false" 3/4 of the time
    std::bernoulli_distribution d(0.25);
 
    std::map<bool, int> hist;
    for (int n = 0; n < 10000; ++n)
        ++hist[d(gen)];
 
    std::cout << std::boolalpha;
    for (auto const& [key, value] : hist)
        std::cout << std::setw(5) << key << ' '
                  << std::string(value / 500, '*') << '\n';
}
```
