---
title: "std::ranges::shuffle"
source_path: "cpp/algorithm/ranges/shuffle"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Reorders the elements in the given range [first,last) such that each possible permutation of those elements has equal probability of appearance.

## Declarations
```cpp
Call signature
```

```cpp
template< std::random_access_iterator I, std::sentinel_for<I> S, class Gen >
requires std::permutable<I> &&
std::uniform_random_bit_generator<std::remove_reference_t<Gen>>
I shuffle( I first, S last, Gen&& gen );
```
_(since C++20)_

```cpp
template< ranges::random_access_range R, class Gen >
requires std::permutable<ranges::iterator_t<R>> &&
std::uniform_random_bit_generator<std::remove_reference_t<Gen>>
ranges::borrowed_iterator_t<R>
shuffle( R&& r, Gen&& gen );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to shuffle randomly
- `r`: the range of elements to shuffle randomly
- `gen`: the random number generator

## Return value
An iterator equal to last.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <random>
 
void print(const auto& a)
{
    for (const auto e : a)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::array a {'A', 'B', 'C', 'D', 'E', 'F'};
    print(a);
 
    std::random_device rd;
    std::mt19937 gen {rd()};
 
    for (int i {}; i != 3; ++i)
    {
        std::ranges::shuffle(a, gen);
        print(a);
    }
}
```

## See also
- [ranges::next_permutation](/cpp/algorithm/ranges/next_permutation/)
- [ranges::prev_permutation](/cpp/algorithm/ranges/prev_permutation/)
- [random_shuffleshuffle](/cpp/algorithm/random_shuffle/)
