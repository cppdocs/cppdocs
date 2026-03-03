---
title: "std::ranges::is_sorted"
source_path: "cpp/algorithm/ranges/is_sorted"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Checks if the elements in range [first,last) are sorted in non-descending order.

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_strict_weak_order<std::projected<I, Proj>>
Comp = ranges::less >
constexpr bool
is_sorted( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<ranges::iterator_t<R>, Proj>>
Comp = ranges::less >
constexpr bool
is_sorted( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel defining the range to check if it is sorted
- `r`: the range to check if it is sorted
- `comp`: comparison function to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
true if the elements in the range are sorted according to comp.

## Notes
ranges::is_sorted returns true for empty ranges and ranges of length one.

## Example
```cpp
#include <algorithm>
#include <array>
#include <functional>
#include <iostream>
#include <iterator>
 
int main()
{
    namespace ranges = std::ranges;
 
    std::array digits {3, 1, 4, 1, 5};
 
    ranges::copy(digits, std::ostream_iterator<int>(std::cout, " "));
    ranges::is_sorted(digits)
        ? std::cout << ": sorted\n"
        : std::cout << ": not sorted\n";
 
    ranges::sort(digits);
 
    ranges::copy(digits, std::ostream_iterator<int>(std::cout, " "));
    ranges::is_sorted(ranges::begin(digits), ranges::end(digits))
        ? std::cout << ": sorted\n"
        : std::cout << ": not sorted\n";
 
    ranges::reverse(digits);
 
    ranges::copy(digits, std::ostream_iterator<int>(std::cout, " "));
    ranges::is_sorted(digits, ranges::greater {})
        ? std::cout << ": sorted (with 'greater')\n"
        : std::cout << ": not sorted\n";
}
```

## See also
- [ranges::is_sorted_until](/cpp/algorithm/ranges/is_sorted_until/)
- [is_sorted](/cpp/algorithm/is_sorted/)
