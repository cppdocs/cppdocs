---
title: "std::ranges::ends_with"
source_path: "cpp/algorithm/ranges/ends_with"
header: "<algorithm>"
category: "algorithm"
since: "C++23"
---

Checks whether the second range matches the suffix of the first range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I1, std::sentinel_for<I1> S1,
std::input_iterator I2, std::sentinel_for<I2> S2,
class Pred = ranges::equal_to,
class Proj1 = std::identity, class Proj2 = std::identity >
requires (std::forward_iterator<I1> || std::sized_sentinel_for<S1, I1>) &&
(std::forward_iterator<I2> || std::sized_sentinel_for<S2, I2>) &&
std::indirectly_comparable<I1, I2, Pred, Proj1, Proj2>
constexpr bool ends_with( I1 first1, S1 last1,
I2 first2, S2 last2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++23)_

```cpp
template< ranges::input_range R1, ranges::input_range R2,
class Pred = ranges::equal_to,
class Proj1 = std::identity, class Proj2 = std::identity >
requires (ranges::forward_range<R1> || ranges::sized_range<R1>) &&
(ranges::forward_range<R2> || ranges::sized_range<R2>) &&
std::indirectly_comparable<ranges::iterator_t<R1>,
ranges::iterator_t<R2>,
Pred, Proj1, Proj2>
constexpr bool ends_with( R1&& r1, R2&& r2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++23)_

## Parameters
- `first1, last1`: the range of elements to examine
- `r1`: the range of elements to examine
- `first2, last2`: the range of elements to be used as the suffix
- `r2`: the range of elements to be used as the suffix
- `pred`: the binary predicate that compares the projected elements
- `proj1`: the projection to apply to the elements of the range to examine
- `proj2`: the projection to apply to the elements of the range to be used as the suffix

## Return value
true if the second range matches the suffix of the first range, false otherwise.

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
#include <array>
 
static_assert
(
    ! std::ranges::ends_with("for", "cast") &&
    std::ranges::ends_with("dynamic_cast", "cast") &&
    ! std::ranges::ends_with("as_const", "cast") &&
    std::ranges::ends_with("bit_cast", "cast") &&
    ! std::ranges::ends_with("to_underlying", "cast") &&
    std::ranges::ends_with(std::array{1, 2, 3, 4}, std::array{3, 4}) &&
    ! std::ranges::ends_with(std::array{1, 2, 3, 4}, std::array{4, 5})
);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4105 | C++23 | overload (2) calculated the sizedifference by N1 - N2[1] | changed toN1 - static_cast<decltype(N1)>(N2) |

## See also
- [ranges::starts_with](/cpp/algorithm/ranges/starts_with/)
- [ends_with](/cpp/string/basic_string/ends_with/)
- [ends_with](/cpp/string/basic_string_view/ends_with/)
