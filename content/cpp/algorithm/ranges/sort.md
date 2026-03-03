---
title: "std::ranges::sort"
source_path: "cpp/algorithm/ranges/sort"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Sorts the elements in the range [first,last) in non-descending order. The order of equivalent elements is not guaranteed to be preserved.

## Declarations
```cpp
Call signature
```

```cpp
template< std::random_access_iterator I, std::sentinel_for<I> S,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<I, Comp, Proj>
constexpr I
sort( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::random_access_range R, class Comp = ranges::less,
class Proj = std::identity >
requires std::sortable<ranges::iterator_t<R>, Comp, Proj>
constexpr ranges::borrowed_iterator_t<R>
sort( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel defining the range to sort
- `r`: the range to sort
- `comp`: comparison to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
An iterator equal to last.

## Notes
[std::sort](/cpp/algorithm/sort/) uses [std::iter_swap](/cpp/algorithm/iter_swap/) to swap elements, whereas ranges::sort instead uses [ranges::iter_swap](/cpp/iterator/ranges/iter_swap/) (which performs ADL for iter_swap, unlike [std::iter_swap](/cpp/algorithm/iter_swap/))

## Example
```cpp
#include <algorithm>
#include <array>
#include <functional>
#include <iomanip>
#include <iostream>
 
void print(auto comment, auto const& seq, char term = ' ')
{
    for (std::cout << comment << '\n'; auto const& elem : seq)
        std::cout << elem << term;
    std::cout << '\n';
}
 
struct Particle
{
    std::string name; double mass; // MeV
    template<class Os> friend
    Os& operator<<(Os& os, Particle const& p)
    {
        return os << std::left << std::setw(8) << p.name << " : " << p.mass << ' ';
    }
};
 
int main()
{
    std::array s {5, 7, 4, 2, 8, 6, 1, 9, 0, 3};
 
    namespace ranges = std::ranges;
 
    ranges::sort(s);
    print("Sort using the default operator<", s);
 
    ranges::sort(s, ranges::greater());
    print("Sort using a standard library compare function object", s);
 
    struct
    {
        bool operator()(int a, int b) const { return a < b; }
    } customLess;
    ranges::sort(s.begin(), s.end(), customLess);
    print("Sort using a custom function object", s);
 
    ranges::sort(s, [](int a, int b) { return a > b; });
    print("Sort using a lambda expression", s);
 
    Particle particles[]
    {
        {"Electron", 0.511}, {"Muon", 105.66}, {"Tau", 1776.86},
        {"Positron", 0.511}, {"Proton", 938.27}, {"Neutron", 939.57}
    };
    ranges::sort(particles, {}, &Particle::name);
    print("\nSort by name using a projection", particles, '\n');
    ranges::sort(particles, {}, &Particle::mass);
    print("Sort by mass using a projection", particles, '\n');
}
```

## See also
- [ranges::partial_sort](/cpp/algorithm/ranges/partial_sort/)
- [ranges::stable_sort](/cpp/algorithm/ranges/stable_sort/)
- [ranges::partition](/cpp/algorithm/ranges/partition/)
- [sort](/cpp/algorithm/sort/)
