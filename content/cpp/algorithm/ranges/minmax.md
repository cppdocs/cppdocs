---
title: "std::ranges::minmax, std::ranges::minmax_result"
source_path: "cpp/algorithm/ranges/minmax"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Returns the smallest and the greatest of the given projected values.

## Declarations
```cpp
Call signature
```

```cpp
template< class T, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<const T*, Proj>> Comp = ranges::less >
constexpr ranges::minmax_result<const T&>
minmax( const T& a, const T& b, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< std::copyable T, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<const T*, Proj>> Comp = ranges::less >
constexpr ranges::minmax_result<T>
minmax( std::initializer_list<T> r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
std::indirect_strict_weak_order<
std::projected<ranges::iterator_t<R>, Proj>> Comp = ranges::less >
requires std::indirectly_copyable_storable<ranges::iterator_t<R>, ranges::range_value_t<R>*>
constexpr ranges::minmax_result<ranges::range_value_t<R>>
minmax( R&& r, Comp comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class T >
using minmax_result = ranges::min_max_result<T>;
```
_(since C++20)_

## Parameters
- `a, b`: the values to compare
- `r`: a non-empty range of values to compare
- `comp`: comparison to apply to the projected elements
- `proj`: projection to apply to the elements

## Notes
For overload (1), if one of the parameters is a temporary, the reference returned becomes a dangling reference at the end of the full expression that contains the call to minmax:

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <random>
 
int main()
{
    namespace ranges = std::ranges;
 
    constexpr std::array v{3, 1, 4, 1, 5, 9, 2, 6, 5};
 
    std::random_device rd;
    std::mt19937_64 generator(rd());
    std::uniform_int_distribution<> distribution(0, ranges::distance(v)); // [0..9]
 
    // auto bounds = ranges::minmax(distribution(generator), distribution(generator));
    // UB: dangling references: bounds.min and bounds.max have the type `const int&`.
 
    const int x1 = distribution(generator);
    const int x2 = distribution(generator);
    auto bounds = ranges::minmax(x1, x2); // OK: got references to lvalues x1 and x2
 
    std::cout << "v[" << bounds.min << ":" << bounds.max << "]: ";
    for (int i = bounds.min; i < bounds.max; ++i)
        std::cout << v[i] << ' ';
    std::cout << '\n';
 
    auto [min, max] = ranges::minmax(v);
    std::cout << "smallest: " << min << ", " << "largest: " << max << '\n';
}
```

## See also
- [ranges::min](/cpp/algorithm/ranges/min/)
- [ranges::max](/cpp/algorithm/ranges/max/)
- [ranges::minmax_element](/cpp/algorithm/ranges/minmax_element/)
- [ranges::clamp](/cpp/algorithm/ranges/clamp/)
- [minmax](/cpp/algorithm/minmax/)
