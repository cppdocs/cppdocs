---
title: "std::sample"
source_path: "cpp/algorithm/sample"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Selects n elements from the sequence [first,last) (without replacement) such that each possible sample has equal probability of appearance, and writes those selected elements into the output iterator out. Random numbers are generated using the random number generator g.

## Declarations
```cpp
template< class PopulationIt, class SampleIt, class Distance, class URBG >
SampleIterator sample( PopulationIt first, PopulationIt last,
SampleIt out, Distance n, URBG&& g );
```
_(since C++17)_

## Parameters
- `first, last`: pair of iterators forming the range from which to make the sampling (the population)
- `out`: the output iterator where the samples are written
- `n`: number of samples to make
- `g`: the random number generator used as the source of randomness

## Return value
Returns a copy of out after the last sample that was output, that is, end of the sample range.

## Notes
This function may implement selection sampling or [reservoir sampling](https://en.wikipedia.org/wiki/reservoir_sampling).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <random>
#include <string>
 
int main()
{
    std::string in {"ABCDEFGHIJK"}, out;
    std::sample(in.begin(), in.end(), std::back_inserter(out), 4,
                std::mt19937 {std::random_device{}()});
    std::cout << "Four random letters out of " << in << " : " << out << '\n';
}
```

## See also
- [random_shuffleshuffle](/cpp/algorithm/random_shuffle/)
- [ranges::sample](/cpp/algorithm/ranges/sample/)
