---
title: "std::seed_seq"
source_path: "cpp/numeric/random/seed_seq"
header: "<random>"
category: "numeric"
since: "C++11"
---

std::seed_seq consumes a sequence of integer-valued data and produces a requested number of 32-bit unsigned integer values, based on the consumed data. The produced values are distributed over the entire 32-bit range even if the consumed values are close.

## Declarations
```cpp
class seed_seq;
```
_(since C++11)_

## Example
```cpp
#include <cstdint>
#include <iostream>
#include <random>
 
int main()
{
    std::seed_seq seq{1, 2, 3, 4, 5};
    std::vector<std::uint32_t> seeds(10);
    seq.generate(seeds.begin(), seeds.end());
    for (std::uint32_t n : seeds)
        std::cout << n << '\n';
}
```
