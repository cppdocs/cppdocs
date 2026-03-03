---
title: "std::ranges::find_end"
source_path: "cpp/algorithm/ranges/find_end"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Searches for the last occurrence of the sequence [first2,last2) in the range [first1,last1), after projection with proj1 and proj2 respectively. The projected elements are compared using the binary predicate pred.

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
find_end( I1 first1, S1 last1, I2 first2, S2 last2,
Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R1, ranges::forward_range R2,
class Pred = ranges::equal_to,
class Proj1 = std::identity,
class Proj2 = std::identity >
requires std::indirectly_comparable<ranges::iterator_t<R1>,
ranges::iterator_t<R2>,
Pred, Proj1, Proj2>
constexpr ranges::borrowed_subrange_t<R1>
find_end( R1&& r1, R2&& r2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

## Parameters
- `first1, last1`: the range of elements to examine (aka haystack)
- `first2, last2`: the range of elements to search for (aka needle)
- `r1`: the range of elements to examine (aka haystack)
- `r2`: the range of elements to search for (aka needle)
- `pred`: binary predicate to compare the elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Notes
An implementation can improve efficiency of the search if the input iterators model [std::bidirectional_iterator](/cpp/iterator/bidirectional_iterator/) by searching from the end towards the begin. Modelling the [std::random_access_iterator](/cpp/iterator/random_access_iterator/) may improve the comparison speed. All this however does not change the theoretical complexity of the worst case.

## Example
```cpp
#include <algorithm>
#include <array>
#include <cctype>
#include <iostream>
#include <ranges>
#include <string_view>
 
void print(const auto haystack, const auto needle)
{
    const auto pos = std::distance(haystack.begin(), needle.begin());
    std::cout << "In \"";
    for (const auto c : haystack)
        std::cout << c;
    std::cout << "\" found \"";
    for (const auto c : needle)
        std::cout << c;
    std::cout << "\" at position [" << pos << ".." << pos + needle.size() << ")\n"
        << std::string(4 + pos, ' ') << std::string(needle.size(), '^') << '\n';
}
 
int main()
{
    using namespace std::literals;
    constexpr auto secret{"password password word..."sv};
    constexpr auto wanted{"password"sv};
 
    constexpr auto found1 = std::ranges::find_end(
        secret.cbegin(), secret.cend(), wanted.cbegin(), wanted.cend());
    print(secret, found1);
 
    constexpr auto found2 = std::ranges::find_end(secret, "word"sv);
    print(secret, found2);
 
    const auto found3 = std::ranges::find_end(secret, "ORD"sv,
        [](const char x, const char y) { // uses a binary predicate
            return std::tolower(x) == std::tolower(y);
        });
    print(secret, found3);
 
    const auto found4 = std::ranges::find_end(secret, "SWORD"sv, {}, {},
        [](char c) { return std::tolower(c); }); // projects the 2nd range
    print(secret, found4);
 
    static_assert(std::ranges::find_end(secret, "PASS"sv).empty()); // => not found
}
```

## See also
- [ranges::find_lastranges::find_last_ifranges::find_last_if_not](/cpp/algorithm/ranges/find_last/)
- [ranges::findranges::find_ifranges::find_if_not](/cpp/algorithm/ranges/find/)
- [ranges::find_first_of](/cpp/algorithm/ranges/find_first_of/)
- [ranges::adjacent_find](/cpp/algorithm/ranges/adjacent_find/)
- [ranges::search](/cpp/algorithm/ranges/search/)
- [ranges::search_n](/cpp/algorithm/ranges/search_n/)
- [find_end](/cpp/algorithm/find_end/)
