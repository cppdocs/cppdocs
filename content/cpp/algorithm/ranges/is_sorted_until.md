---
title: "std::ranges::is_sorted_until"
source_path: "cpp/algorithm/ranges/is_sorted_until"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Examines the range [first,last) and finds the largest range beginning at first in which the elements are sorted in non-descending order.

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S, class Proj = std::identity,
std::indirect_strict_weak_order<std::projected<I, Proj>> Comp = ranges::less >
constexpr I
is_sorted_until( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< std::forward_range R, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<ranges::iterator_t<R>, Proj>> Comp = ranges::less >
constexpr ranges::borrowed_iterator_t<R>
is_sorted_until( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel defining the range to find its sorted upper bound
- `r`: the range to find its sorted upper bound
- `comp`: comparison function to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
The upper bound of the largest range beginning at first in which the elements are sorted in non-descending order. That is, the last iterator it for which range [first,it) is sorted.

## Notes
ranges::is_sorted_until returns an iterator equal to last for empty ranges and ranges of length one.

## Example
```cpp
#include <array>
#include <algorithm>
#include <iostream>
#include <iterator>
#include <random>
 
int main()
{
    std::random_device rd;
    std::mt19937 g {rd()};
    std::array nums {3, 1, 4, 1, 5, 9};
 
    constexpr int min_sorted_size = 4;
    int sorted_size = 0;
    do
    {
        std::ranges::shuffle(nums, g);
        const auto sorted_end = std::ranges::is_sorted_until(nums);
        sorted_size = std::ranges::distance(nums.begin(), sorted_end);
 
        std::ranges::copy(nums, std::ostream_iterator<int>(std::cout, " "));
        std::cout << " : " << sorted_size << " leading sorted element(s)\n";
    }
    while (sorted_size < min_sorted_size);
}
```

## See also
- [ranges::is_sorted](/cpp/algorithm/ranges/is_sorted/)
- [is_sorted_until](/cpp/algorithm/is_sorted_until/)
