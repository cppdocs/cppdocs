---
title: "std::binomial_distribution<IntType>::param"
source_path: "cpp/numeric/random/binomial_distribution/param"
category: "numeric"
since: "C++11"
---

Manages the associated distribution parameter set.

## Declarations
```cpp
param_type param() const;
```
_(since C++11)_

```cpp
void param( const param_type& params );
```
_(since C++11)_

## Parameters
- `params`: new contents of the associated parameter set

## Example
```cpp
#include <iostream>
#include <random>
 
int main()
{
    std::random_device rd;
    std::mt19937 gen(rd());
    using BinomialDist = std::binomial_distribution<>;
    BinomialDist bino_dis(1, 0.5);
 
    std::cout << "A sample of Binomial(  1, 0.5): " << bino_dis(gen) << '\n';
 
    // Use another parameter set
    bino_dis.param(BinomialDist::param_type(100,0.9));
    std::cout << "A sample of Binomial(100, 0.9): " << bino_dis(gen) << '\n';
}
```
