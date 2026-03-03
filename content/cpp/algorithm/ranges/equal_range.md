---
title: "std::ranges::equal_range"
source_path: "cpp/algorithm/ranges/equal_range"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

1) Returns a view containing all elements equivalent to value in the range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class T, class Proj = std::identity,
std::indirect_strict_weak_order
<const T*, std::projected<I, Proj>> Comp = ranges::less >
constexpr ranges::subrange<I> equal_range( I first, S last, const T& value,
Comp comp = {}, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
class T = std::projected_value_t<I, Proj>,
std::indirect_strict_weak_order
<const T*, std::projected<I, Proj>> Comp = ranges::less >
constexpr ranges::subrange<I> equal_range( I first, S last, const T& value,
Comp comp = {}, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::forward_range R,
class T, class Proj = std::identity,
std::indirect_strict_weak_order
<const T*, std::projected<ranges::iterator_t<R>,
Proj>> Comp = ranges::less >
constexpr ranges::borrowed_subrange_t<R>
equal_range( R&& r, const T& value, Comp comp = {}, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::forward_range R,
class Proj = std::identity,
class T = std::projected_value_t<ranges::iterator_t<R>, Proj>,
std::indirect_strict_weak_order
<const T*, std::projected<ranges::iterator_t<R>,
Proj>> Comp = ranges::less >
constexpr ranges::borrowed_subrange_t<R>
equal_range( R&& r, const T& value, Comp comp = {}, Proj proj = {} );
```
_(since C++26)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of the elements to examine
- `value`: value to compare the elements to
- `comp`: if the first argument is less than (i.e. is ordered before) the second
- `proj`: projection to apply to the elements

## Return value
[std::ranges::subrange](/cpp/ranges/subrange/) containing a pair of iterators defining the wanted range, the first pointing to the first element that is not less than value and the second pointing to the first element greater than value.

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
#include <compare>
#include <complex>
#include <iostream>
#include <vector>
 
struct S
{
    int number {};
    char name {};
    // note: name is ignored by these comparison operators
    friend bool operator== (const S s1, const S s2) { return s1.number == s2.number; }
    friend auto operator<=>(const S s1, const S s2) { return s1.number <=> s2.number; }
    friend std::ostream& operator<<(std::ostream& os, S o)
    {
        return os << '{' << o.number << ", '" << o.name << "'}";
    }
};
 
void println(auto rem, const auto& v)
{
    for (std::cout << rem; const auto& e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    // note: not ordered, only partitioned w.r.t. S defined below
    std::vector<S> vec
    {
        {1,'A'}, {2,'B'}, {2,'C'}, {2,'D'}, {4, 'D'}, {4,'G'}, {3,'F'}
    };
 
    const S value{2, '?'};
 
    namespace ranges = std::ranges;
 
    auto a = ranges::equal_range(vec, value);
    println("1. ", a);
 
    auto b = ranges::equal_range(vec.begin(), vec.end(), value);
    println("2. ", b);
 
    auto c = ranges::equal_range(vec, 'D', ranges::less {}, &S::name);
    println("3. ", c);
 
    auto d = ranges::equal_range(vec.begin(), vec.end(), 'D', ranges::less {}, &S::name);
    println("4. ", d);
 
    using CD = std::complex<double>;
    std::vector<CD> nums{{1, 0}, {2, 2}, {2, 1}, {3, 0}, {3, 1}};
    auto cmpz = [](CD x, CD y) { return x.real() < y.real(); };
    #ifdef __cpp_lib_algorithm_default_value_type
        auto p3 = ranges::equal_range(nums, {2, 0}, cmpz);
    #else
        auto p3 = ranges::equal_range(nums, CD{2, 0}, cmpz);
    #endif
    println("5. ", p3);
}
```

## See also
- [ranges::lower_bound](/cpp/algorithm/ranges/lower_bound/)
- [ranges::upper_bound](/cpp/algorithm/ranges/upper_bound/)
- [ranges::binary_search](/cpp/algorithm/ranges/binary_search/)
- [ranges::partition](/cpp/algorithm/ranges/partition/)
- [ranges::equal](/cpp/algorithm/ranges/equal/)
- [equal_range](/cpp/algorithm/equal_range/)
