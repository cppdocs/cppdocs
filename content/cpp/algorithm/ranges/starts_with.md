---
title: "std::ranges::starts_with"
source_path: "cpp/algorithm/ranges/starts_with"
header: "<algorithm>"
category: "algorithm"
since: "C++23"
---

Checks whether the second range matches the prefix of the first range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I1, std::sentinel_for<I1> S1,
std::input_iterator I2, std::sentinel_for<I2> S2,
class Pred = ranges::equal_to,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::indirectly_comparable<I1, I2, Pred, Proj1, Proj2>
constexpr bool
starts_with( I1 first1, S1 last1, I2 first2, S2 last2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++23)_

```cpp
template< ranges::input_range R1, ranges::input_range R2,
class Pred = ranges::equal_to,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::indirectly_comparable<ranges::iterator_t<R1>,
ranges::iterator_t<R2>,
Pred, Proj1, Proj2>
constexpr bool
starts_with( R1&& r1, R2&& r2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++23)_

## Parameters
- `first1, last1`: the range of elements to examine
- `r1`: the range of elements to examine
- `first2, last2`: the range of elements to be used as the prefix
- `r2`: the range of elements to be used as the prefix
- `pred`: the binary predicate that compares the projected elements
- `proj1`: the projection to apply to the elements of the range to examine
- `proj2`: the projection to apply to the elements of the range to be used as the prefix

## Return value
true if the second range matches the prefix of the first range, false otherwise.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges_starts_ends_with
202106L
(C++23)
std::ranges::starts_with, std::ranges::ends_with

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <string_view>
 
int main()
{
    using namespace std::literals;
 
    constexpr auto ascii_upper = [](char8_t c)
    {
        return u8'a' <= c && c <= u8'z' ? static_cast<char8_t>(c + u8'A' - u8'a') : c;
    };
 
    constexpr auto cmp_ignore_case = [=](char8_t x, char8_t y)
    {
        return ascii_upper(x) == ascii_upper(y);
    };
 
    static_assert(std::ranges::starts_with("const_cast", "const"sv));
    static_assert(std::ranges::starts_with("constexpr", "const"sv));
    static_assert(!std::ranges::starts_with("volatile", "const"sv));
 
    std::cout << std::boolalpha
              << std::ranges::starts_with(u8"Constantinopolis", u8"constant"sv,
                                          {}, ascii_upper, ascii_upper) << ' '
              << std::ranges::starts_with(u8"Istanbul", u8"constant"sv,
                                          {}, ascii_upper, ascii_upper) << ' '
              << std::ranges::starts_with(u8"Metropolis", u8"metro"sv,
                                          cmp_ignore_case) << ' '
              << std::ranges::starts_with(u8"Acropolis", u8"metro"sv,
                                          cmp_ignore_case) << '\n';
 
    constexpr static auto v = { 1, 3, 5, 7, 9 };
    constexpr auto odd = [](int x) { return x % 2; };
    static_assert(std::ranges::starts_with(v, std::views::iota(1)
                                            | std::views::filter(odd)
                                            | std::views::take(3)));
}
```

## See also
- [ranges::ends_with](/cpp/algorithm/ranges/ends_with/)
- [ranges::mismatch](/cpp/algorithm/ranges/mismatch/)
- [starts_with](/cpp/string/basic_string/starts_with/)
- [starts_with](/cpp/string/basic_string_view/starts_with/)
