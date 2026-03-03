---
title: "std::experimental::sample"
source_path: "cpp/experimental/sample"
header: "<experimental/algorithm>"
category: "experimental"
---

Selects n elements from the sequence [first,last) such that each possible sample has equal probability of appearance, and writes those selected elements into the output iterator out.

## Declarations
```cpp
template< class PopulationIterator, class SampleIterator,
class Distance, class URBG >
SampleIterator sample( PopulationIterator first, PopulationIterator last,
SampleIterator out, Distance n,
URBG&& g );
```
_(library fundamentals TS)_

```cpp
template< class PopulationIterator, class SampleIterator, class Distance >
SampleIterator sample( PopulationIterator first, PopulationIterator last,
SampleIterator out, Distance n );
```
_(library fundamentals TS v2)_

## Parameters
- `first, last`: pair of iterators forming the range from which to make the sampling (the population)
- `out`: the output iterator where the samples are written. Must not be in the range [first, last)
- `n`: number of samples to make
- `g`: the random number generator used as the source of randomness

## Return value
Returns a copy of out after the last sample that was output, that is, end of the sample range.

## Notes
This function may implement selection sampling or reservoir sampling.

## Example
```cpp
#include <experimental/algorithm>
#include <iostream>
#include <iterator>
#include <random>
#include <string>
 
int main()
{
    std::string in = "abcdefgh", out;
    std::experimental::sample(in.begin(), in.end(), std::back_inserter(out),
                              5, std::mt19937{std::random_device{}()});
    std::cout << "five random letters out of " << in << " : " << out << '\n';
}
```

## See also
- [random_shuffleshuffle](/cpp/algorithm/random_shuffle/)
