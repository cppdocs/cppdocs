---
title: "std::ranges::max_element"
source_path: "cpp/algorithm/ranges/max_element"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Finds the greatest element in the range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S, class Proj = std::identity,
std::indirect_strict_weak_order<std::projected<I, Proj>> Comp = ranges::less >
constexpr I
max_element( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<ranges::iterator_t<R>, Proj>> Comp = ranges::less >
constexpr ranges::borrowed_iterator_t<R>
max_element( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel pair denoting the range to examine
- `r`: the range to examine
- `comp`: comparison to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
Iterator to the greatest element in the range [first,last). If several elements in the range are equivalent to the greatest element, returns the iterator to the first such element. Returns last if the range is empty (i.e. if first == last).

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
 
int main()
{
    namespace ranges = std::ranges;
 
    const auto v = {3, 1, -14, 1, 5, 9, -14, 9};
 
    auto result = ranges::max_element(v.begin(), v.end());
    std::cout << "Max element at pos " << ranges::distance(v.begin(), result) << '\n';
 
    auto abs_compare = [](int a, int b) { return std::abs(a) < std::abs(b); };
    result = ranges::max_element(v, abs_compare);
    std::cout << "Absolute max element at pos "
              << ranges::distance(v.begin(), result) << '\n';
}
```

## See also
- [ranges::min_element](/cpp/algorithm/ranges/min_element/)
- [ranges::minmax_element](/cpp/algorithm/ranges/minmax_element/)
- [ranges::max](/cpp/algorithm/ranges/max/)
- [max_element](/cpp/algorithm/max_element/)
