---
title: "std::ranges::upper_bound"
source_path: "cpp/algorithm/ranges/upper_bound"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

1) Returns an iterator pointing to the first element in the range [first,last) that is greater than value, or last if no such element is found.
The range [first,last) must be partitioned with respect to the expression or !comp(value, element), i.e., all elements for which the expression is true must precede all elements for which the expression is false. A fully-sorted range meets this criterion.

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class T, class Proj = std::identity,
std::indirect_strict_weak_order
<const T*, std::projected<I, Proj>> Comp = ranges::less >
constexpr I upper_bound( I first, S last, const T& value,
Comp comp = {}, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
class T = std::projected_value_t<I, Proj>,
std::indirect_strict_weak_order
<const T*, std::projected<I, Proj>> Comp = ranges::less >
constexpr I upper_bound( I first, S last, const T& value,
Comp comp = {}, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::forward_range R,
class T, class Proj = std::identity,
std::indirect_strict_weak_order
<const T*, std::projected<ranges::iterator_t<R>,
Proj>> Comp = ranges::less >
constexpr ranges::borrowed_iterator_t<R>
upper_bound( R&& r, const T& value, Comp comp = {}, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::forward_range R,
class Proj = std::identity,
class T = std::projected_value_t<ranges::iterator_t<R>, Proj>,
std::indirect_strict_weak_order
<const T*, std::projected<ranges::iterator_t<R>,
Proj>> Comp = ranges::less >
constexpr ranges::borrowed_iterator_t<R>
upper_bound( R&& r, const T& value, Comp comp = {}, Proj proj = {} );
```
_(since C++26)_

## Parameters
- `first, last`: iterator-sentinel defining the partially-ordered range to examine
- `r`: the partially-ordered range to examine
- `value`: value to compare the elements to
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
Iterator pointing to the first element that is greater than value, or last if no such element is found.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403
(C++26)
List-initialization for algorithms (1,2)

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <complex>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    namespace ranges = std::ranges;
 
    std::vector<int> data{1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6};
 
    {
        auto lower = ranges::lower_bound(data.begin(), data.end(), 4);
        auto upper = ranges::upper_bound(data.begin(), data.end(), 4);
 
        ranges::copy(lower, upper, std::ostream_iterator<int>(std::cout, " "));
        std::cout << '\n';
    }
    {
        auto lower = ranges::lower_bound(data, 3);
        auto upper = ranges::upper_bound(data, 3);
 
        ranges::copy(lower, upper, std::ostream_iterator<int>(std::cout, " "));
        std::cout << '\n';
    }
 
    using CD = std::complex<double>;
    std::vector<CD> nums{{1, 0}, {2, 2}, {2, 1}, {3, 0}, {3, 1}};
    auto cmpz = [](CD x, CD y) { return x.real() < y.real(); };
    #ifdef __cpp_lib_algorithm_default_value_type
        auto it = ranges::upper_bound(nums, {2, 0}, cmpz);
    #else
        auto it = ranges::upper_bound(nums, CD{2, 0}, cmpz);
    #endif
    assert((*it == CD{3, 0}));
}
```

## See also
- [ranges::equal_range](/cpp/algorithm/ranges/equal_range/)
- [ranges::lower_bound](/cpp/algorithm/ranges/lower_bound/)
- [ranges::partition](/cpp/algorithm/ranges/partition/)
- [upper_bound](/cpp/algorithm/upper_bound/)
