---
title: "std::ranges::mismatch, std::ranges::mismatch_result"
source_path: "cpp/algorithm/ranges/mismatch"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Returns the first mismatching pair of projected elements from two ranges: one defined by [first1,last1) or r1 and another defined by [first2,last2) or r2.

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
constexpr mismatch_result<I1, I2>
mismatch( I1 first1, S1 last1, I2 first2, S2 last2,
Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R1, ranges::input_range R2,
class Pred = ranges::equal_to,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::indirectly_comparable<
ranges::iterator_t<R1>, ranges::iterator_t<R2>, Pred, Proj1, Proj2>
constexpr mismatch_result<ranges::borrowed_iterator_t<R1>,
ranges::borrowed_iterator_t<R2>>
mismatch( R1&& r1, R2&& r2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I1, class I2 >
using mismatch_result = ranges::in_in_result<I1, I2>;
```
_(since C++20)_

## Parameters
- `first1, last1`: an iterator-sentinel pair denoting the first range of the elements to compare
- `r1`: the first range of the elements to compare
- `first2, last2`: an iterator-sentinel pair denoting the second range of the elements to compare
- `r2`: the second range of the elements to compare
- `pred`: predicate to apply to the projected elements
- `proj1`: projection to apply to the first range of elements
- `proj2`: projection to apply to the second range of elements

## Return value
ranges::mismatch_result with iterators to the first two non-equal elements.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <string_view>
 
[[nodiscard]]
constexpr std::string_view mirror_ends(const std::string_view in)
{
    const auto end = std::ranges::mismatch(in, in | std::views::reverse).in1;
    return {in.cbegin(), end};
}
 
int main()
{
    std::cout << mirror_ends("abXYZba") << '\n'
              << mirror_ends("abca") << '\n'
              << mirror_ends("ABBA") << '\n'
              << mirror_ends("level") << '\n';
 
    using namespace std::literals::string_view_literals;
 
    static_assert("123"sv == mirror_ends("123!@#321"));
    static_assert("radar"sv == mirror_ends("radar"));
}
```

## See also
- [ranges::equal](/cpp/algorithm/ranges/equal/)
- [ranges::findranges::find_ifranges::find_if_not](/cpp/algorithm/ranges/find/)
- [ranges::lexicographical_compare](/cpp/algorithm/ranges/lexicographical_compare/)
- [ranges::search](/cpp/algorithm/ranges/search/)
- [mismatch](/cpp/algorithm/mismatch/)
