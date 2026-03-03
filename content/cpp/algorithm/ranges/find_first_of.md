---
title: "std::ranges::find_first_of"
source_path: "cpp/algorithm/ranges/find_first_of"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Searches the range [first1,last1) for any of the elements in the range [first2,last2), after projecting the ranges with proj1 and proj2 respectively. The projected elements are compared using the binary predicate pred.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I1, std::sentinel_for<I1> S1,
std::forward_iterator I2, std::sentinel_for<I2> S2,
class Pred = ranges::equal_to,
class Proj1 = std::identity,
class Proj2 = std::identity >
requires std::indirectly_comparable<I1, I2, Pred, Proj1, Proj2>
constexpr I1
find_first_of( I1 first1, S1 last1, I2 first2, S2 last2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R1, ranges::forward_range R2,
class Pred = ranges::equal_to,
class Proj1 = std::identity,
class Proj2 = std::identity >
requires std::indirectly_comparable<ranges::iterator_t<R1>,
ranges::iterator_t<R2>,
Pred, Proj1, Proj2>
constexpr ranges::borrowed_iterator_t<R1>
find_first_of( R1&& r1, R2&& r2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

## Parameters
- `first1, last1`: the range of elements to examine (aka haystack)
- `first2, last2`: the range of elements to search for (aka needles)
- `r1`: the range of elements to examine (aka haystack)
- `r2`: the range of elements to search for (aka needles)
- `pred`: binary predicate to compare the elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
Iterator to the first element in the range [first1,last1) that is equal to an element from the range [first2,last2) after projection. If no such element is found, an iterator comparing equal to last1 is returned.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
 
int main()
{
    namespace rng = std::ranges;
 
    constexpr static auto haystack = {1, 2, 3, 4};
    constexpr static auto needles  = {0, 3, 4, 3};
 
    constexpr auto found1 = rng::find_first_of(haystack.begin(), haystack.end(),
                                               needles.begin(), needles.end());
    static_assert(std::distance(haystack.begin(), found1) == 2);
 
    constexpr auto found2 = rng::find_first_of(haystack, needles);
    static_assert(std::distance(haystack.begin(), found2) == 2);
 
    constexpr static auto negatives = {-6, -3, -4, -3};
    constexpr auto not_found = rng::find_first_of(haystack, negatives);
    static_assert(not_found == haystack.end());
 
    constexpr auto found3 = rng::find_first_of(haystack, negatives,
        [](int x, int y) { return x == -y; }); // uses a binary comparator
    static_assert(std::distance(haystack.begin(), found3) == 2);
 
    struct P { int x, y; };
    constexpr static auto p1 = {P{1, -1}, P{2, -2}, P{3, -3}, P{4, -4}};
    constexpr static auto p2 = {P{5, -5}, P{6, -3}, P{7, -5}, P{8, -3}};
 
    // Compare only P::y data members by projecting them:
    const auto found4 = rng::find_first_of(p1, p2, {}, &P::y, &P::y);
    std::cout << "First equivalent element {" << found4->x << ", " << found4->y
              << "} was found at position " << std::distance(p1.begin(), found4)
              << ".\n";
}
```

## See also
- [find_first_of](/cpp/algorithm/find_first_of/)
- [ranges::adjacent_find](/cpp/algorithm/ranges/adjacent_find/)
- [ranges::findranges::find_ifranges::find_if_not](/cpp/algorithm/ranges/find/)
- [ranges::find_end](/cpp/algorithm/ranges/find_end/)
- [ranges::search](/cpp/algorithm/ranges/search/)
- [ranges::search_n](/cpp/algorithm/ranges/search_n/)
