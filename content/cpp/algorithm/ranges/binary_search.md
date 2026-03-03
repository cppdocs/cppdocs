---
title: "std::ranges::binary_search"
source_path: "cpp/algorithm/ranges/binary_search"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

1) Checks if a projected element equivalent to value appears within the range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class T, class Proj = std::identity,
std::indirect_strict_weak_order
<const T*, std::projected<I, Proj>> Comp = ranges::less >
constexpr bool binary_search( I first, S last, const T& value,
Comp comp = {}, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
class T = std::projected_value_t<I, Proj>,
std::indirect_strict_weak_order
<const T*, std::projected<I, Proj>> Comp = ranges::less >
constexpr bool binary_search( I first, S last, const T& value,
Comp comp = {}, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::forward_range R,
class T, class Proj = std::identity,
std::indirect_strict_weak_order
<const T*, std::projected<ranges::iterator_t<R>,
Proj>> Comp = ranges::less >
constexpr bool binary_search( R&& r, const T& value,
Comp comp = {}, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::forward_range R,
class Proj = std::identity,
class T = std::projected_value_t<ranges::iterator_t<R>, Proj>,
std::indirect_strict_weak_order
<const T*, std::projected<ranges::iterator_t<R>,
Proj>> Comp = ranges::less >
constexpr bool binary_search( R&& r, const T& value,
Comp comp = {}, Proj proj = {} );
```
_(since C++26)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of elements to examine
- `value`: value to compare the elements to
- `comp`: comparison function to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
true if an element equal to value is found, false otherwise.

## Notes
std::ranges::binary_search doesn't return an iterator to the found element when an element whose projection equals value is found. If an iterator is desired, std::ranges::lower_bound should be used instead.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <complex>
#include <iostream>
#include <ranges>
#include <vector>
 
int main()
{
    constexpr static auto haystack = {1, 3, 4, 5, 9};
    static_assert(std::ranges::is_sorted(haystack));
 
    for (const int needle : std::views::iota(1)
                          | std::views::take(3))
    {
        std::cout << "Searching for " << needle << ": ";
        std::ranges::binary_search(haystack, needle)
            ? std::cout << "found " << needle << '\n'
            : std::cout << "no dice!\n";
    }
 
    using CD = std::complex<double>;
    std::vector<CD> nums{{1, 1}, {2, 3}, {4, 2}, {4, 3}};
    auto cmpz = [](CD x, CD y){ return abs(x) < abs(y); };
    #ifdef __cpp_lib_algorithm_default_value_type
        assert(std::ranges::binary_search(nums, {4, 2}, cmpz));
    #else
        assert(std::ranges::binary_search(nums, CD{4, 2}, cmpz));
    #endif
}
```

## See also
- [ranges::equal_range](/cpp/algorithm/ranges/equal_range/)
- [ranges::lower_bound](/cpp/algorithm/ranges/lower_bound/)
- [ranges::upper_bound](/cpp/algorithm/ranges/upper_bound/)
- [ranges::containsranges::contains_subrange](/cpp/algorithm/ranges/contains/)
- [binary_search](/cpp/algorithm/binary_search/)
