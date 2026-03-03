---
title: "std::ranges::search_n"
source_path: "cpp/algorithm/ranges/search_n"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

1) Searches the range [first,last) for the first sequence of count elements whose projected values are each equal to the given value according to the binary predicate pred.

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S, class T,
class Pred = ranges::equal_to, class Proj = std::identity >
requires std::indirectly_comparable<I, const T*, Pred, Proj>
constexpr ranges::subrange<I>
search_n( I first, S last, std::iter_difference_t<I> count,
const T& value, Pred pred = {}, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class Pred = ranges::equal_to, class Proj = std::identity,
class T = std::projected_value_t<I, Proj> >
requires std::indirectly_comparable<I, const T*, Pred, Proj>
constexpr ranges::subrange<I>
search_n( I first, S last, std::iter_difference_t<I> count,
const T& value, Pred pred = {}, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::forward_range R, class T,
class Pred = ranges::equal_to, class Proj = std::identity >
requires std::indirectly_comparable
<ranges::iterator_t<R>, const T*, Pred, Proj>
constexpr ranges::borrowed_subrange_t<R>
search_n( R&& r, ranges::range_difference_t<R> count,
const T& value, Pred pred = {}, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::forward_range R,
class Pred = ranges::equal_to, class Proj = std::identity,
class T = std::projected_value_t<ranges::iterator_t<R>, Proj> >
requires std::indirectly_comparable
<ranges::iterator_t<R>, const T*, Pred, Proj>
constexpr ranges::borrowed_subrange_t<R>
search_n( R&& r, ranges::range_difference_t<R> count,
const T& value, Pred pred = {}, Proj proj = {} );
```
_(since C++26)_

## Parameters
- `first, last`: the range of elements to examine (aka haystack)
- `r`: the range of elements to examine (aka haystack)
- `count`: the length of the sequence to search for
- `value`: the value to search for (aka needle)
- `pred`: the binary predicate that compares the projected elements with value
- `proj`: the projection to apply to the elements of the range to examine

## Return value
If no such subsequence is found, returns std::[ranges::subrange](/cpp/ranges/subrange/){last, last}.

## Notes
An implementation can improve efficiency of the search in average if the iterators model [std::random_access_iterator](/cpp/iterator/random_access_iterator/).

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <complex>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
 
int main()
{
    namespace ranges = std::ranges;
 
    static constexpr auto nums = {1, 2, 2, 3, 4, 1, 2, 2, 2, 1};
    constexpr int count{3};
    constexpr int value{2};
    typedef int count_t, value_t;
 
    constexpr auto result1 = ranges::search_n
    (
        nums.begin(), nums.end(), count, value
    );
    static_assert // found
    (
        result1.size() == count &&
        std::distance(nums.begin(), result1.begin()) == 6 &&
        std::distance(nums.begin(), result1.end()) == 9
    );
 
    constexpr auto result2 = ranges::search_n(nums, count, value);
    static_assert // found
    (
        result2.size() == count &&
        std::distance(nums.begin(), result2.begin()) == 6 &&
        std::distance(nums.begin(), result2.end()) == 9
    );
 
    constexpr auto result3 = ranges::search_n(nums, count, value_t{5});
    static_assert // not found
    (
        result3.size() == 0 &&
        result3.begin() == result3.end() &&
        result3.end() == nums.end()
    );
 
    constexpr auto result4 = ranges::search_n(nums, count_t{0}, value_t{1});
    static_assert // not found
    (
        result4.size() == 0 &&
        result4.begin() == result4.end() &&
        result4.end() == nums.begin()
    );
 
    constexpr char symbol{'B'};
    auto to_ascii = [](const int z) -> char { return 'A' + z - 1; };
    auto is_equ = [](const char x, const char y) { return x == y; };
 
    std::cout << "Find a sub-sequence " << std::string(count, symbol) << " in the ";
    std::ranges::transform(nums, std::ostream_iterator<char>(std::cout, ""), to_ascii);
    std::cout << '\n';
 
    auto result5 = ranges::search_n(nums, count, symbol, is_equ, to_ascii);
    if (not result5.empty())
        std::cout << "Found at position "
                  << ranges::distance(nums.begin(), result5.begin()) << '\n';
 
    std::vector<std::complex<double>> nums2{{4, 2}, {4, 2}, {1, 3}};
    #ifdef __cpp_lib_algorithm_default_value_type
        auto it = ranges::search_n(nums2, 2, {4, 2});
    #else
        auto it = ranges::search_n(nums2, 2, std::complex<double>{4, 2});
    #endif
    assert(it.size() == 2);
}
```

## See also
- [ranges::adjacent_find](/cpp/algorithm/ranges/adjacent_find/)
- [ranges::findranges::find_ifranges::find_if_not](/cpp/algorithm/ranges/find/)
- [ranges::find_end](/cpp/algorithm/ranges/find_end/)
- [ranges::find_first_of](/cpp/algorithm/ranges/find_first_of/)
- [ranges::includes](/cpp/algorithm/ranges/includes/)
- [ranges::mismatch](/cpp/algorithm/ranges/mismatch/)
- [ranges::search](/cpp/algorithm/ranges/search/)
- [search_n](/cpp/algorithm/search_n/)
