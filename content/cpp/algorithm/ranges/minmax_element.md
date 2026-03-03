---
title: "std::ranges::minmax_element, std::ranges::minmax_element_result"
source_path: "cpp/algorithm/ranges/minmax_element"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Finds the smallest and largest elements in the range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S, class Proj = std::identity,
std::indirect_strict_weak_order<std::projected<I, Proj>> Comp = ranges::less >
constexpr minmax_element_result<I>
minmax_element( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<ranges::iterator_t<R>, Proj>> Comp = ranges::less >
constexpr minmax_element_result<ranges::borrowed_iterator_t<R>>
minmax_element( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I >
using minmax_element_result = ranges::min_max_result<I>;
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel pair denoting the range to examine
- `r`: the range to examine
- `comp`: comparison to apply to the projected elements
- `proj`: projection to apply to the elements.

## Return value
An object consisting of an iterator to the smallest element as the first element and an iterator to the greatest element as the second. Returns {first, first} if the range is empty. If several elements are equivalent to the smallest element, the iterator to the first such element is returned. If several elements are equivalent to the largest element, the iterator to the last such element is returned.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
namespace ranges = std::ranges;
 
int main()
{
    const auto v = {3, 9, 1, 4, 1, 2, 5, 9};
    const auto [min, max] = ranges::minmax_element(v);
    std::cout
        << "min = " << *min << ", at [" << ranges::distance(v.begin(), min) << "]\n"
        << "max = " << *max << ", at [" << ranges::distance(v.begin(), max) << "]\n";
}
```

## See also
- [ranges::min_element](/cpp/algorithm/ranges/min_element/)
- [ranges::max_element](/cpp/algorithm/ranges/max_element/)
- [ranges::minmax](/cpp/algorithm/ranges/minmax/)
- [minmax_element](/cpp/algorithm/minmax_element/)
