---
title: "std::ranges::stable_sort"
source_path: "cpp/algorithm/ranges/stable_sort"
header: "<algorithm>"
category: "algorithm"
---

Sorts the elements in the range [first,last) in non-descending order. The order of equivalent elements is stable, i.e. guaranteed to be preserved.

## Declarations
```cpp
Call signature
```

```cpp
template< std::random_access_iterator I, std::sentinel_for<I> S,
class Comp = ranges::less, class Proj = std::identity >
requires std::sortable<I, Comp, Proj>
I stable_sort( I first, S last, Comp comp = {}, Proj proj = {} );
```
_(since C++20) (constexpr since C++26)_

```cpp
template< ranges::random_access_range R, class Comp = ranges::less,
class Proj = std::identity >
requires std::sortable<ranges::iterator_t<R>, Comp, Proj>
ranges::borrowed_iterator_t<R>
stable_sort( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20) (constexpr since C++26)_

## Parameters
- `first, last`: iterator-sentinel defining the range to sort
- `r`: the range to sort
- `comp`: comparison to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
An iterator equal to last.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_constexpr_algorithms
202306L
(C++26)
constexpr stable sorting

## Example
```cpp
#include <algorithm>
#include <array>
#include <functional>
#include <iomanip>
#include <iostream>
 
void print(auto const& seq)
{
    for (auto const& elem : seq)
        std::cout << elem << ' ';
    std::cout << '\n';
}
 
struct Particle
{
    std::string name; double mass; // MeV
    friend std::ostream& operator<<(std::ostream& os, Particle const& p)
    {
        return os << '\n' << std::left << std::setw(8) << p.name << " : " << p.mass;
    }
};
 
int main()
{
    std::array s {5, 7, 4, 2, 8, 6, 1, 9, 0, 3};
 
    // sort using the default operator<
    std::ranges::stable_sort(s);
    print(s);
 
    // sort using a standard library compare function object
    std::ranges::stable_sort(s, std::ranges::greater());
    print(s);
 
    // sort using a custom function object
    struct
    {
        bool operator()(int a, int b) const
        {
            return a < b;
        }
    } customLess;
    std::ranges::stable_sort(s.begin(), s.end(), customLess);
    print(s);
 
    // sort using a lambda expression
    std::ranges::stable_sort(s, [](int a, int b) { return a > b; });
    print(s);
 
    // sort with projection
    Particle particles[]
    {
        {"Electron", 0.511}, {"Muon", 105.66}, {"Tau", 1776.86},
        {"Positron", 0.511}, {"Proton", 938.27}, {"Neutron", 939.57}
    };
    print(particles);
    std::ranges::stable_sort(particles, {}, &Particle::name); //< sort by name
    print(particles);
    std::ranges::stable_sort(particles, {}, &Particle::mass); //< sort by mass
    print(particles);
}
```

## See also
- [ranges::sort](/cpp/algorithm/ranges/sort/)
- [ranges::partial_sort](/cpp/algorithm/ranges/partial_sort/)
- [ranges::stable_partition](/cpp/algorithm/ranges/stable_partition/)
- [stable_sort](/cpp/algorithm/stable_sort/)
