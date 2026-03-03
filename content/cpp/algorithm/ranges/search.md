---
title: "std::ranges::search"
source_path: "cpp/algorithm/ranges/search"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Searches for the first occurrence of the sequence of elements [first2,last2) in the range [first1,last1). Elements are compared using binary predicate pred after being projected with proj2 and proj1, respectively.

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I1, std::sentinel_for<I1> S1,
std::forward_iterator I2, std::sentinel_for<I2> S2,
class Pred = ranges::equal_to,
class Proj1 = std::identity,
class Proj2 = std::identity >
requires std::indirectly_comparable<I1, I2, Pred, Proj1, Proj2>
constexpr ranges::subrange<I1>
search( I1 first1, S1 last1, I2 first2, S2 last2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R1, ranges::forward_range R2,
class Pred = ranges::equal_to,
class Proj1 = std::identity,
class Proj2 = std::identity>
requires std::indirectly_comparable<ranges::iterator_t<R1>,
ranges::iterator_t<R2>, Pred, Proj1, Proj2>
constexpr ranges::borrowed_subrange_t<R1>
search( R1&& r1, R2&& r2, Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

## Parameters
- `first1, last1`: the range of elements to examine (aka haystack)
- `first2, last2`: the range of elements to search for (aka needle)
- `r1`: the range of elements to examine (aka haystack)
- `r2`: the range of elements to search for (aka needle)
- `pred`: binary predicate to apply to the projected elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
If no such occurrence is found, [ranges::subrange](/cpp/ranges/subrange/){last1, last1} is returned.

## Example
```cpp
#include <algorithm>
#include <cctype>
#include <iostream>
#include <iterator>
#include <string_view>
 
using namespace std::literals;
 
void print(int id, const auto& haystack, const auto& needle, const auto& found)
{
    std::cout << id << ") search(\"" << haystack << "\", \"" << needle << "\"); ";
    const auto first = std::distance(haystack.begin(), found.begin());
    const auto last = std::distance(haystack.begin(), found.end());
    if (found.empty())
        std::cout << "not found;";
    else
    {
        std::cout << "found: \"";
        for (const auto x : found)
            std::cout << x;
        std::cout << "\";";
    }
    std::cout << " subrange: {" << first << ", " << last << "}\n";
}
 
int main()
{
    constexpr auto haystack {"abcd abcd"sv};
    constexpr auto needle {"bcd"sv};
 
    // the search uses iterator pairs begin()/end():
    constexpr auto found1 = std::ranges::search(
        haystack.begin(), haystack.end(),
        needle.begin(), needle.end());
    print(1, haystack, needle, found1);
 
    // the search uses ranges r1, r2:
    constexpr auto found2 = std::ranges::search(haystack, needle);
    print(2, haystack, needle, found2);
 
    // 'needle' range is empty:
    constexpr auto none {""sv};
    constexpr auto found3 = std::ranges::search(haystack, none);
    print(3, haystack, none, found3);
 
    // 'needle' will not be found:
    constexpr auto awl {"efg"sv};
    constexpr auto found4 = std::ranges::search(haystack, awl);
    print(4, haystack, awl, found4);
 
    // the search uses custom comparator and projections:
    constexpr auto bodkin {"234"sv};
    auto found5 = std::ranges::search(haystack, bodkin,
        [](const int x, const int y) { return x == y; }, // pred
        [](const int x) { return std::toupper(x); }, // proj1
        [](const int y) { return y + 'A' - '1'; }); // proj2
    print(5, haystack, bodkin, found5);
}
```

## See also
- [ranges::adjacent_find](/cpp/algorithm/ranges/adjacent_find/)
- [ranges::findranges::find_ifranges::find_if_not](/cpp/algorithm/ranges/find/)
- [ranges::find_end](/cpp/algorithm/ranges/find_end/)
- [ranges::find_first_of](/cpp/algorithm/ranges/find_first_of/)
- [ranges::containsranges::contains_subrange](/cpp/algorithm/ranges/contains/)
- [ranges::includes](/cpp/algorithm/ranges/includes/)
- [ranges::mismatch](/cpp/algorithm/ranges/mismatch/)
- [ranges::search_n](/cpp/algorithm/ranges/search_n/)
- [search](/cpp/algorithm/search/)
