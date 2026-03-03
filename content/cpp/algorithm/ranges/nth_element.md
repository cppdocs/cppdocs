---
title: "std::ranges::nth_element"
source_path: "cpp/algorithm/ranges/nth_element"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Reorders the elements in [first,last) such that:

## Declarations
```cpp
Call signature
```

```cpp
template< std::random_access_iterator I, std::sentinel_for<I> S,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<I, Comp, Proj>
constexpr I
nth_element( I first, I nth, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::random_access_range R,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<iterator_t<R>, Comp, Proj>
constexpr ranges::borrowed_iterator_t<R>
nth_element( R&& r, iterator_t<R> nth, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to reorder
- `r`: the range of elements to reorder
- `nth`: the iterator defining the partition point
- `comp`: comparator used to compare the projected elements
- `proj`: projection to apply to the elements

## Notes
The algorithm used is typically [introselect](https://en.wikipedia.org/wiki/Introselect) although other [selection algorithms](https://en.wikipedia.org/wiki/Selection_algorithm) with suitable average-case complexity are allowed.

## Example
```cpp
#include <algorithm>
#include <array>
#include <functional>
#include <iostream>
#include <ranges>
#include <string_view>
 
void print(std::string_view rem, std::ranges::input_range auto const& a)
{
    for (std::cout << rem; const auto e : a)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::array v{5, 6, 4, 3, 2, 6, 7, 9, 3};
    print("Before nth_element: ", v);
 
    std::ranges::nth_element(v, v.begin() + v.size() / 2);
    print("After nth_element:  ", v);
    std::cout << "The median is: " << v[v.size() / 2] << '\n';
 
    std::ranges::nth_element(v, v.begin() + 1, std::greater<int>());
    print("After nth_element:  ", v);
    std::cout << "The second largest element is: " << v[1] << '\n';
    std::cout << "The largest element is: " << v[0] << "\n\n";
 
    using namespace std::literals;
    std::array names
    {
        "Diva"sv, "Cornelius"sv, "Munro"sv, "Rhod"sv,
        "Zorg"sv, "Korben"sv, "Bender"sv, "Leeloo"sv,
    };
    print("Before nth_element: ", names);
    auto fifth_element{std::ranges::next(names.begin(), 4)};
    std::ranges::nth_element(names, fifth_element);
    print("After nth_element:  ", names);
    std::cout << "The 5th element is: " << *fifth_element << '\n';
}
```

## See also
- [ranges::max_element](/cpp/algorithm/ranges/max_element/)
- [ranges::min_element](/cpp/algorithm/ranges/min_element/)
- [ranges::partition](/cpp/algorithm/ranges/partition/)
- [ranges::partial_sort](/cpp/algorithm/ranges/partial_sort/)
- [nth_element](/cpp/algorithm/nth_element/)
