---
title: "std::ranges::equal"
source_path: "cpp/algorithm/ranges/equal"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Returns true if the projected values of the range [first1,last1) are equal to the projected values of the range [first2,last2), and false otherwise.

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
equal( I1 first1, S1 last1, I2 first2, S2 last2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R1, ranges::input_range R2,
class Pred = ranges::equal_to,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::indirectly_comparable<ranges::iterator_t<R1>, ranges::iterator_t<R2>,
Pred, Proj1, Proj2>
constexpr bool
equal( R1&& r1, R2&& r2, Pred pred = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );
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
If the length of the range [first1,last1) does not equal the length of the range [first2,last2), returns false.

## Notes
ranges::equal should not be used to compare the ranges formed by the iterators from [std::unordered_set](/cpp/container/unordered_set/), [std::unordered_multiset](/cpp/container/unordered_multiset/), [std::unordered_map](/cpp/container/unordered_map/), or [std::unordered_multimap](/cpp/container/unordered_multimap/) because the order in which the elements are stored in those containers may be different even if the two containers store the same elements.

When comparing entire containers or string views for equality, operator== for the corresponding type are usually preferred.

ranges::equal is not guaranteed to be short-circuit. E.g. if the first pair elements of both ranges do not compare equal, the rest of elements may also be compared. Non-short-circuit comparison may happen when the ranges are compared with [std::memcmp](/cpp/string/byte/memcmp/) or implementation-specific vectorized algorithms.

## Example
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <ranges>
#include <string_view>
 
constexpr bool is_palindrome(const std::string_view s)
{
    namespace views = std::views;
    auto forward = s | views::take(s.size() / 2);
    auto backward = s | views::reverse | views::take(s.size() / 2);
    return std::ranges::equal(forward, backward);
}
 
void test(const std::string_view s)
{
    std::cout << std::quoted(s) << " is "
              << (is_palindrome(s) ? "" : "not ")
              << "a palindrome\n";
}
 
int main()
{
    test("radar");
    test("hello");
    static_assert(is_palindrome("ABBA") and not is_palindrome("AC/DC"));
}
```

## See also
- [ranges::findranges::find_ifranges::find_if_not](/cpp/algorithm/ranges/find/)
- [ranges::lexicographical_compare](/cpp/algorithm/ranges/lexicographical_compare/)
- [ranges::mismatch](/cpp/algorithm/ranges/mismatch/)
- [ranges::search](/cpp/algorithm/ranges/search/)
- [ranges::equal_range](/cpp/algorithm/ranges/equal_range/)
- [equal_to](/cpp/utility/functional/equal_to/)
- [equal](/cpp/algorithm/equal/)
