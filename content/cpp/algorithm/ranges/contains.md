---
title: "std::ranges::contains, std::ranges::contains_subrange"
source_path: "cpp/algorithm/ranges/contains"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

1) Search-based algorithm that checks whether or not a given range contains a value with iterator-sentinel pairs.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class T,
class Proj = std::identity >
requires std::indirect_binary_predicate<ranges::equal_to, std::projected<I, Proj>,
const T*>
constexpr bool contains( I first, S last, const T& value, Proj proj = {} );
```
_(since C++23) (until C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
class T = std::projected_value_t<I, Proj> >
requires std::indirect_binary_predicate<ranges::equal_to, std::projected<I, Proj>,
const T*>
constexpr bool contains( I first, S last, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::input_range R,
class T,
class Proj = std::identity >
requires std::indirect_binary_predicate<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>,
const T*>
constexpr bool contains( R&& r, const T& value, Proj proj = {} );
```
_(since C++23) (until C++26)_

```cpp
template< ranges::input_range R,
class Proj = std::identity,
class T = std::projected_value_t<ranges::iterator_t<R>, Proj> >
requires std::indirect_binary_predicate<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>,
const T*>
constexpr bool contains( R&& r, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< std::forward_iterator I1, std::sentinel_for<I1> S1,
std::forward_iterator I2, std::sentinel_for<I2> S2,
class Pred = ranges::equal_to,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::indirectly_comparable<I1, I2, Pred, Proj1, Proj2>
constexpr bool contains_subrange( I1 first1, S1 last1, I2 first2, S2 last2,
Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++23)_

```cpp
template< ranges::forward_range R1, ranges::forward_range R2,
class Pred = ranges::equal_to,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::indirectly_comparable<ranges::iterator_t<R1>,
ranges::iterator_t<R2>, Pred, Proj1, Proj2>
constexpr bool contains_subrange( R1&& r1, R2&& r2, Pred pred = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++23)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of the elements to examine
- `value`: value to compare the elements to
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Notes
Up until C++20, we've had to write std::[ranges::find](/cpp/algorithm/ranges/find/)(r, value) != std::[ranges::end](/cpp/ranges/end/)(r) to determine if a single value is inside a range. And to check if a range contains a subrange of interest, we use not std::[ranges::search](/cpp/algorithm/ranges/search/)(haystack, needle).empty(). While this is accurate, it isn't necessarily convenient, and it hardly expresses intent (especially in the latter case). Being able to say std::ranges::contains(r, value) addresses both of these points.

ranges::contains_subrange, same as [ranges::search](/cpp/algorithm/ranges/search/), but as opposed to [std::search](/cpp/algorithm/search/), provides no access to (such as [Boyer-Moore](/cpp/utility/functional/#Searchers)).

## Example
```cpp
#include <algorithm>
#include <array>
#include <complex>
 
namespace ranges = std::ranges;
 
int main()
{
    constexpr auto haystack = std::array{3, 1, 4, 1, 5};
    constexpr auto needle = std::array{1, 4, 1};
    constexpr auto bodkin = std::array{2, 5, 2};
 
    static_assert(
        ranges::contains(haystack, 4) &&
       !ranges::contains(haystack, 6) &&
        ranges::contains_subrange(haystack, needle) &&
       !ranges::contains_subrange(haystack, bodkin)
    );
 
    constexpr std::array<std::complex<double>, 3> nums{{{1, 2}, {3, 4}, {5, 6}}};
    #ifdef __cpp_lib_algorithm_default_value_type
        static_assert(ranges::contains(nums, {3, 4}));
    #else
        static_assert(ranges::contains(nums, std::complex<double>{3, 4}));
    #endif
}
```

## See also
- [ranges::findranges::find_ifranges::find_if_not](/cpp/algorithm/ranges/find/)
- [ranges::search](/cpp/algorithm/ranges/search/)
- [ranges::binary_search](/cpp/algorithm/ranges/binary_search/)
- [ranges::includes](/cpp/algorithm/ranges/includes/)
- [ranges::all_ofranges::any_ofranges::none_of](/cpp/algorithm/ranges/all_any_none_of/)
