---
title: "std::ranges::adjacent_find"
source_path: "cpp/algorithm/ranges/adjacent_find"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Searches the range [first,last) for the first two consecutive equal elements.

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S, class Proj = std::identity,
std::indirect_binary_predicate<
std::projected<I, Proj>,
std::projected<I, Proj>> Pred = ranges::equal_to >
constexpr I
adjacent_find( I first, S last, Pred pred = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R, class Proj = std::identity,
std::indirect_binary_predicate<
std::projected<ranges::iterator_t<R>, Proj>,
std::projected<ranges::iterator_t<R>, Proj>> Pred = ranges::equal_to >
constexpr ranges::borrowed_iterator_t<R>
adjacent_find( R&& r, Pred pred = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of the elements to examine
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
An iterator to the first of the first pair of identical elements, that is, the first iterator it such that bool([std::invoke](/cpp/utility/functional/invoke/)(pred, [std::invoke](/cpp/utility/functional/invoke/)(proj1, *it), [std::invoke](/cpp/utility/functional/invoke/)(proj, *(it + 1)))) is true.

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <ranges>
 
constexpr bool some_of(auto&& r, auto&& pred) // some but not all
{
    return std::ranges::cend(r) != std::ranges::adjacent_find(r,
        [&pred](auto const& x, auto const& y)
        {
            return pred(x) != pred(y);
        });
}
 
// test some_of
constexpr auto a = {0, 0, 0, 0}, b = {1, 1, 1, 0}, c = {1, 1, 1, 1};
auto is_one = [](auto x){ return x == 1; };
static_assert(!some_of(a, is_one) && some_of(b, is_one) && !some_of(c, is_one));
 
int main()
{
    const auto v = {0, 1, 2, 3, 40, 40, 41, 41, 5}; /*
                                ^^          ^^       */
    namespace ranges = std::ranges;
 
    if (auto it = ranges::adjacent_find(v.begin(), v.end()); it == v.end())
        std::cout << "No matching adjacent elements\n";
    else
        std::cout << "The first adjacent pair of equal elements is at ["
                  << ranges::distance(v.begin(), it) << "] == " << *it << '\n';
 
    if (auto it = ranges::adjacent_find(v, ranges::greater()); it == v.end())
        std::cout << "The entire vector is sorted in ascending order\n";
    else
        std::cout << "The last element in the non-decreasing subsequence is at ["
                  << ranges::distance(v.begin(), it) << "] == " << *it << '\n';
}
```

## See also
- [ranges::unique](/cpp/algorithm/ranges/unique/)
- [adjacent_find](/cpp/algorithm/adjacent_find/)
