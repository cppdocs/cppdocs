---
title: "std::discrete_distribution"
source_path: "cpp/numeric/random/discrete_distribution"
header: "<random>"
category: "numeric"
since: "C++11"
---

std::discrete_distribution produces random integers on the interval [0,n), where the probability of each individual integer i is defined as wi/S, that is the weight of the ith integer divided by the sum of all n weights.

## Declarations
```cpp
template< class IntType = int >
class discrete_distribution;
```
_(since C++11)_

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <map>
#include <random>
 
int main()
{
    std::random_device rd;
    std::mt19937 gen(rd());
    std::discrete_distribution<> d({40, 10, 10, 40});
    std::map<int, int> map;
 
    for (int n = 0; n < 1e4; ++n)
        ++map[d(gen)];
 
    for (const auto& [num, count] : map)
        std::cout << num << " generated " << std::setw(4) << count << " times\n";
}
```
