---
title: "std::ranges::min_element"
source_path: "cpp/algorithm/ranges/min_element"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Finds the smallest element in the range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S, class Proj = std::identity,
std::indirect_strict_weak_order<std::projected<I, Proj>> Comp = ranges::less >
constexpr I
min_element( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<ranges::iterator_t<R>, Proj>> Comp = ranges::less >
constexpr ranges::borrowed_iterator_t<R>
min_element( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel pair denoting the range to examine
- `r`: the range to examine
- `comp`: comparison to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
Iterator to the smallest element in the range [first,last). If several elements in the range are equivalent to the smallest element, returns the iterator to the first such element. Returns last if the range is empty (i.e., first == last).

## Example
```cpp
#include <algorithm>
#include <array>
#include <cmath>
#include <iostream>
 
int main()
{
    namespace ranges = std::ranges;
 
    std::array v{3, 1, -13, 1, 3, 7, -13};
 
    auto iterator = ranges::min_element(v.begin(), v.end());
    auto position = ranges::distance(v.begin(), iterator);
    std::cout << "min element is v[" << position << "] == " << *iterator << '\n';
 
    auto abs_compare = [](int a, int b) { return (std::abs(a) < std::abs(b)); };
    iterator = ranges::min_element(v, abs_compare);
    position = ranges::distance(v.begin(), iterator);
    std::cout << "|min| element is v[" << position << "] == " << *iterator << '\n';
}
```

## See also
- [ranges::max_element](/cpp/algorithm/ranges/max_element/)
- [ranges::minmax_element](/cpp/algorithm/ranges/minmax_element/)
- [ranges::max](/cpp/algorithm/ranges/max/)
- [min_element](/cpp/algorithm/min_element/)
