---
title: "std::ranges::sort_heap"
source_path: "cpp/algorithm/ranges/sort_heap"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

[Sorts](/cpp/algorithm/#Requirements) the elements in the specified range with respect to comp and proj, where the range originally represents a [heap](/cpp/algorithm/#Heap_operations) with respect to comp and proj. The sorted range no longer maintains the heap property.

## Declarations
```cpp
Call signature
```

```cpp
template< std::random_access_iterator I, std::sentinel_for<I> S,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<I, Comp, Proj>
constexpr I sort_heap( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::random_access_range R,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<ranges::iterator_t<R>, Comp, Proj>
constexpr ranges::borrowed_iterator_t<R>
sort_heap( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the iterator and sentinel designating the range of elements to modify
- `r`: the range of elements to modify
- `comp`: comparator to apply to the projected elements
- `proj`: projection to apply to the elements

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
 
void print(auto const& rem, const auto& v)
{
    std::cout << rem;
    for (const auto i : v)
        std::cout << i << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::array v{3, 1, 4, 1, 5, 9};
    print("original array:  ", v);
 
    std::ranges::make_heap(v);
    print("after make_heap: ", v);
 
    std::ranges::sort_heap(v);
    print("after sort_heap: ", v);
}
```

## See also
- [ranges::is_heap](/cpp/algorithm/ranges/is_heap/)
- [ranges::is_heap_until](/cpp/algorithm/ranges/is_heap_until/)
- [ranges::make_heap](/cpp/algorithm/ranges/make_heap/)
- [ranges::pop_heap](/cpp/algorithm/ranges/pop_heap/)
- [ranges::push_heap](/cpp/algorithm/ranges/push_heap/)
- [sort_heap](/cpp/algorithm/sort_heap/)
