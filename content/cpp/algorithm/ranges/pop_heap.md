---
title: "std::ranges::pop_heap"
source_path: "cpp/algorithm/ranges/pop_heap"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Swaps the first element and the last element of the specified [heap](/cpp/algorithm/#Heap_operations) with respect to comp and proj and makes the subrange excluding the first position into a heap with respect to comp and proj. This has the effect of removing the first element from the specified heap.

## Declarations
```cpp
Call signature
```

```cpp
template< std::random_access_iterator I, std::sentinel_for<I> S,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<I, Comp, Proj>
constexpr I pop_heap( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::random_access_range R,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<ranges::iterator_t<R>, Comp, Proj>
constexpr ranges::borrowed_iterator_t<R>
pop_heap( R&& r, Comp comp = {}, Proj proj = {} );
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
#include <iterator>
#include <string_view>
 
template<class I = int*>
void print(std::string_view rem, I first = {}, I last = {},
           std::string_view term = "\n")
{
    for (std::cout << rem; first != last; ++first)
        std::cout << *first << ' ';
    std::cout << term;
}
 
int main()
{
    std::array v{3, 1, 4, 1, 5, 9, 2, 6, 5, 3};
    print("initially, v: ", v.cbegin(), v.cend());
 
    std::ranges::make_heap(v);
    print("make_heap, v: ", v.cbegin(), v.cend());
 
    print("convert heap into sorted array:");
    for (auto n {std::ssize(v)}; n >= 0; --n)
    {
        std::ranges::pop_heap(v.begin(), v.begin() + n);
        print("[ ", v.cbegin(), v.cbegin() + n, "]  ");
        print("[ ", v.cbegin() + n, v.cend(), "]\n");
    }
}
```

## See also
- [ranges::push_heap](/cpp/algorithm/ranges/push_heap/)
- [ranges::is_heap](/cpp/algorithm/ranges/is_heap/)
- [ranges::is_heap_until](/cpp/algorithm/ranges/is_heap_until/)
- [ranges::make_heap](/cpp/algorithm/ranges/make_heap/)
- [ranges::sort_heap](/cpp/algorithm/ranges/sort_heap/)
- [pop_heap](/cpp/algorithm/pop_heap/)
