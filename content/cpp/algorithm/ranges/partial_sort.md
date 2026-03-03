---
title: "std::ranges::partial_sort"
source_path: "cpp/algorithm/ranges/partial_sort"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Rearranges elements such that the range [first,middle) contains the sorted middle - first smallest elements in the range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::random_access_iterator I, std::sentinel_for<I> S,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<I, Comp, Proj>
constexpr I
partial_sort( I first, I middle, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::random_access_range R,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<ranges::iterator_t<R>, Comp, Proj>
constexpr ranges::borrowed_iterator_t<R>
partial_sort( R&& r, ranges::iterator_t<R> middle, Comp comp = {},
Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel defining the range to sort
- `r`: the range to sort
- `middle`: the iterator defining the last element to be sorted
- `comp`: comparator to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
An iterator equal to last.

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <string>
#include <vector>
 
void print(const auto& v)
{
    for (const char e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
void underscore(int n)
{
    while (n-- > 0)
        std::cout << "^ ";
    std::cout << '\n';
}
 
int main()
{
    static_assert('A' < 'a');
    std::vector<char> v {'x', 'P', 'y', 'C', 'z', 'w', 'P', 'o'};
    print(v);
    const int m {3};
    std::ranges::partial_sort(v, v.begin() + m);
    print(v), underscore(m);
 
    static_assert('1' < 'a');
    std::string s {"3a1b41c5"};
    print(s);
    std::ranges::partial_sort(s.begin(), s.begin() + m, s.end(), std::greater {});
    print(s), underscore(m);
}
```

## See also
- [ranges::partial_sort_copy](/cpp/algorithm/ranges/partial_sort_copy/)
- [ranges::sort](/cpp/algorithm/ranges/sort/)
- [ranges::stable_sort](/cpp/algorithm/ranges/stable_sort/)
- [ranges::nth_element](/cpp/algorithm/ranges/nth_element/)
- [ranges::make_heap](/cpp/algorithm/ranges/make_heap/)
- [ranges::pop_heap](/cpp/algorithm/ranges/pop_heap/)
- [ranges::push_heap](/cpp/algorithm/ranges/push_heap/)
- [ranges::sort_heap](/cpp/algorithm/ranges/sort_heap/)
- [partial_sort](/cpp/algorithm/partial_sort/)
