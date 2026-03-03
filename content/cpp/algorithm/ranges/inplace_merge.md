---
title: "std::ranges::inplace_merge"
source_path: "cpp/algorithm/ranges/inplace_merge"
header: "<algorithm>"
category: "algorithm"
---

Merges two consecutive sorted ranges [first,middle) and [middle,last) into one sorted range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::bidirectional_iterator I, std::sentinel_for<I> S,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<I, Comp, Proj>
I inplace_merge( I first, I middle, S last,
Comp comp = {}, Proj proj = {} );
```
_(since C++20) (constexpr since C++26)_

```cpp
template< ranges::bidirectional_range R, class Comp = ranges::less,
class Proj = std::identity >
requires std::sortable<ranges::iterator_t<R>, Comp, Proj>
ranges::borrowed_iterator_t<R>
inplace_merge( R&& r, ranges::iterator_t<R> middle,
Comp comp = {}, Proj proj = {} );
```
_(since C++20) (constexpr since C++26)_

## Parameters
- `first`: the beginning of the first sorted range
- `middle`: the end of the first range and the beginning of the second range
- `last`: the end of the second sorted range
- `r`: the range of elements to merge inplace
- `comp`: comparison to apply to the projected elements
- `proj`: projection to apply to the elements in the range

## Return value
An iterator equal to last.

## Notes
This function attempts to allocate a temporary buffer. If the allocation fails, the less efficient algorithm is chosen.

## Example
```cpp
#include <algorithm>
#include <complex>
#include <functional>
#include <iostream>
#include <iterator>
#include <vector>
 
void print(auto const& v, auto const& rem, int middle = -1)
{
    for (int i{}; auto n : v)
        std::cout << (i++ == middle ? "│ " : "") << n << ' ';
    std::cout << rem << '\n';
}
 
template<std::random_access_iterator I, std::sentinel_for<I> S>
requires std::sortable<I>
void merge_sort(I first, S last)
{
    if (last - first > 1)
    {
        I middle{first + (last - first) / 2};
        merge_sort(first, middle);
        merge_sort(middle, last);
        std::ranges::inplace_merge(first, middle, last);
    }
}
 
int main()
{
    // custom merge-sort demo
    std::vector v{8, 2, 0, 4, 9, 8, 1, 7, 3};
    print(v, ": before sort");
    merge_sort(v.begin(), v.end());
    print(v, ": after sort\n");
 
    // merging with comparison function object and projection
    using CI = std::complex<int>;
    std::vector<CI> r{{0,1}, {0,2}, {0,3}, {1,1}, {1,2}};
    const auto middle{std::ranges::next(r.begin(), 3)};
    auto comp{std::ranges::less{}};
    auto proj{[](CI z) { return z.imag(); }};
 
    print(r, ": before merge", middle - r.begin());
    std::ranges::inplace_merge(r, middle, comp, proj);
    print(r, ": after merge");
}
```

## See also
- [ranges::merge](/cpp/algorithm/ranges/merge/)
- [ranges::set_union](/cpp/algorithm/ranges/set_union/)
- [ranges::is_sorted](/cpp/algorithm/ranges/is_sorted/)
- [ranges::sort](/cpp/algorithm/ranges/sort/)
- [inplace_merge](/cpp/algorithm/inplace_merge/)
