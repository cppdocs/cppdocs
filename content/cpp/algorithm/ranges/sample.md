---
title: "std::ranges::sample"
source_path: "cpp/algorithm/ranges/sample"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Selects M = min(n, last - first) elements from the sequence [first,last) (without replacement) such that each possible sample has equal probability of appearance, and writes those selected elements into the range beginning at out.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
std::weakly_incrementable O, class Gen >
requires (std::forward_iterator<I> || std::random_access_iterator<O>) &&
std::indirectly_copyable<I, O> &&
std::uniform_random_bit_generator<std::remove_reference_t<Gen>>
O sample( I first, S last, O out, std::iter_difference_t<I> n, Gen&& gen );
```
_(since C++20)_

```cpp
template< ranges::input_range R, std::weakly_incrementable O, class Gen >
requires (ranges::forward_range<R> || std::random_access_iterator<O>) &&
std::indirectly_copyable<ranges::iterator_t<R>, O> &&
std::uniform_random_bit_generator<std::remove_reference_t<Gen>>
O sample( R&& r, O out, ranges::range_difference_t<R> n, Gen&& gen );
```
_(since C++20)_

## Parameters
- `first1, last1`: the range from which to make the sampling (the population)
- `r`: the range from which to make the sampling (the population)
- `out`: the output iterator where the samples are written
- `n`: number of samples to take
- `gen`: the random number generator used as the source of randomness

## Return value
An iterator equal to out + M, that is the end of the resulting sample range.

## Notes
This function may implement selection sampling or [reservoir sampling](https://en.wikipedia.org/wiki/reservoir_sampling).

## Example
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <random>
#include <vector>
 
void print(auto const& rem, auto const& v)
{
    std::cout << rem << " = [" << std::size(v) << "] { ";
    for (auto const& e : v)
        std::cout << e << ' ';
    std::cout << "}\n";
}
 
int main()
{
    const auto in = {1, 2, 3, 4, 5, 6};
    print("in", in);
 
    std::vector<int> out;
    const int max = in.size() + 2;
    auto gen = std::mt19937{std::random_device{}()};
 
    for (int n{}; n != max; ++n)
    {
        out.clear();
        std::ranges::sample(in, std::back_inserter(out), n, gen);
        std::cout << "n = " << n;
        print(", out", out);
    }
}
```

## See also
- [ranges::shuffle](/cpp/algorithm/ranges/shuffle/)
- [sample](/cpp/algorithm/sample/)
