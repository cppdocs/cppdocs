---
title: "std::random_device"
source_path: "cpp/numeric/random/random_device"
header: "<random>"
category: "numeric"
since: "C++11"
---

std::random_device is a uniformly-distributed integer random number generator that produces non-deterministic random numbers.

## Declarations
```cpp
class random_device;
```
_(since C++11)_

## Notes
A notable implementation where [std::random_device](#top) is deterministic in old versions of MinGW-w64 ([bug 338](https://sourceforge.net/p/mingw-w64/bugs/338/), fixed since GCC 9.2). The latest MinGW-w64 versions can be downloaded from [GCC with the MCF thread model](https://gcc-mcf.lhmouse.com/).

## Example
```cpp
#include <iostream>
#include <map>
#include <random>
#include <string>
 
int main()
{
    std::random_device rd;
    std::map<int, int> hist;
    std::uniform_int_distribution<int> dist(0, 9);
 
    for (int n = 0; n != 20000; ++n)
        ++hist[dist(rd)]; // note: demo only: the performance of many
                          // implementations of random_device degrades sharply
                          // once the entropy pool is exhausted. For practical use
                          // random_device is generally only used to seed
                          // a PRNG such as mt19937
 
    for (auto [x, y] : hist)
        std::cout << x << " : " << std::string(y / 100, '*') << '\n';
}
```
