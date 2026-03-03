---
title: "std::ranges::partition_point"
source_path: "cpp/algorithm/ranges/partition_point"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Examines the partitioned (as if by [ranges::partition](/cpp/algorithm/ranges/partition/)) range [first,last) or r and locates the end of the first partition, that is, the projected element that does not satisfy pred or last if all projected elements satisfy pred.

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
constexpr I
partition_point( I first, S last, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R,
class Proj = std::identity,
std::indirect_unary_predicate<
std::projected<ranges::iterator_t<R>, Proj>> Pred >
constexpr ranges::borrowed_iterator_t<R>
partition_point( R&& r, Pred pred, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel defining the partially-ordered range to examine
- `r`: the partially-ordered range to examine
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
The iterator past the end of the first partition within [first,last) or the iterator equal to last if all projected elements satisfy pred.

## Notes
This algorithm is a more general form of ranges::lower_bound, which can be expressed in terms of ranges::partition_point with the predicate [&](auto const& e) { return [std::invoke](/cpp/utility/functional/invoke/)(pred, e, value); });.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <iterator>
 
auto print_seq = [](auto rem, auto first, auto last)
{
    for (std::cout << rem; first != last; std::cout << *first++ << ' ') {}
    std::cout << '\n';
};
 
int main()
{
    std::array v {1, 2, 3, 4, 5, 6, 7, 8, 9};
 
    auto is_even = [](int i) { return i % 2 == 0; };
 
    std::ranges::partition(v, is_even);
    print_seq("After partitioning, v: ", v.cbegin(), v.cend());
 
    const auto pp = std::ranges::partition_point(v, is_even);
    const auto i = std::ranges::distance(v.cbegin(), pp);
    std::cout << "Partition point is at " << i << "; v[" << i << "] = " << *pp << '\n';
 
    print_seq("First partition (all even elements): ", v.cbegin(), pp);
    print_seq("Second partition (all odd elements): ", pp, v.cend());
}
```

## See also
- [ranges::is_sorted](/cpp/algorithm/ranges/is_sorted/)
- [ranges::lower_bound](/cpp/algorithm/ranges/lower_bound/)
- [partition_point](/cpp/algorithm/partition_point/)
