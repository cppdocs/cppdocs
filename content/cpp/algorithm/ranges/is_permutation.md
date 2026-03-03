---
title: "std::ranges::is_permutation"
source_path: "cpp/algorithm/ranges/is_permutation"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Returns true if there exists a [permutation](https://en.wikipedia.org/wiki/permutation) of the elements in range [first1,last1) that makes the range equal to [first2,last2) (after application of corresponding projections Proj1, Proj2, and using the binary predicate Pred as a comparator). Otherwise returns false.

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I1, std::sentinel_for<I1> S1,
std::forward_iterator I2, std::sentinel_for<I2> S2,
class Proj1 = std::identity, class Proj2 = std::identity,
std::indirect_equivalence_relation<std::projected<I1, Proj1>,
std::projected<I2, Proj2>>
Pred = ranges::equal_to >
constexpr bool
is_permutation( I1 first1, S1 last1, I2 first2, S2 last2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R1, ranges::forward_range R2,
class Proj1 = std::identity, class Proj2 = std::identity,
std::indirect_equivalence_relation<
std::projected<ranges::iterator_t<R1>, Proj1>,
std::projected<ranges::iterator_t<R2>, Proj2>>
Pred = ranges::equal_to >
constexpr bool
is_permutation( R1&& r1, R2&& r2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

## Parameters
- `first1, last1`: the first range of the elements
- `first2, last2`: the second range of the elements
- `r1`: the first range of the elements
- `r2`: the second range of the elements
- `pred`: predicate to apply to the projected elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
true if the range [first1,last1) is a permutation of the range [first2,last2).

## Notes
The permutation relation is an [equivalence relation](https://en.wikipedia.org/wiki/equivalence_relation).

The ranges::is_permutation can be used in testing, e.g. to check the correctness of rearranging algorithms such as sorting, shuffling, partitioning. If p is an original sequence and q is a "mutated" sequence, then ranges::is_permutation(p, q) == true means that q consist of "the same" elements (maybe permuted) as p.

## Example
```cpp
#include <algorithm>
#include <array>
#include <cmath>
#include <iostream>
#include <ranges>
 
auto& operator<<(auto& os, std::ranges::forward_range auto const& v)
{
    os << "{ ";
    for (const auto& e : v)
        os << e << ' ';
    return os << "}";
}
 
int main()
{
    static constexpr auto r1 = {1, 2, 3, 4, 5};
    static constexpr auto r2 = {3, 5, 4, 1, 2};
    static constexpr auto r3 = {3, 5, 4, 1, 1};
 
    static_assert(
        std::ranges::is_permutation(r1, r1) &&
        std::ranges::is_permutation(r1, r2) &&
        std::ranges::is_permutation(r2, r1) &&
        std::ranges::is_permutation(r1.begin(), r1.end(), r2.begin(), r2.end()));
 
    std::cout
        << std::boolalpha
        << "is_permutation(" << r1 << ", " << r2 << "): "
        << std::ranges::is_permutation(r1, r2) << '\n'
        << "is_permutation(" << r1 << ", " << r3 << "): "
        << std::ranges::is_permutation(r1, r3) << '\n'
 
        << "is_permutation with custom predicate and projections: "
        << std::ranges::is_permutation(
            std::array {-14, -11, -13, -15, -12},  // 1st range
            std::array {'F', 'E', 'C', 'B', 'D'},  // 2nd range
            [](int x, int y) { return abs(x) == abs(y); }, // predicate
            [](int x) { return x + 10; },          // projection for 1st range
            [](char y) { return int(y - 'A'); })   // projection for 2nd range
        << '\n';
}
```

## See also
- [ranges::next_permutation](/cpp/algorithm/ranges/next_permutation/)
- [ranges::prev_permutation](/cpp/algorithm/ranges/prev_permutation/)
- [is_permutation](/cpp/algorithm/is_permutation/)
- [next_permutation](/cpp/algorithm/next_permutation/)
- [prev_permutation](/cpp/algorithm/prev_permutation/)
- [equivalence_relation](/cpp/concepts/equivalence_relation/)
- [relation](/cpp/concepts/relation/)
