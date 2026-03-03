---
title: "std::ranges::find_last, std::ranges::find_last_if, std::ranges::find_last_if_not"
source_path: "cpp/algorithm/ranges/find_last"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Returns the last element in the range [first,last) that satisfies specific criteria:

## Declarations
```cpp
Call signature
```

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class T,
class Proj = std::identity >
requires std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T*>
constexpr ranges::subrange<I>
find_last( I first, S last, const T& value, Proj proj = {} );
```
_(since C++23) (until C++26)_

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
class T = std::projected_value_t<I, Proj> >
requires std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T*>
constexpr ranges::subrange<I>
find_last( I first, S last, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::forward_range R,
class T,
class Proj = std::identity >
requires std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T*>
constexpr ranges::borrowed_subrange_t<R>
find_last( R&& r, const T& value, Proj proj = {} );
```
_(since C++23) (until C++26)_

```cpp
template< ranges::forward_range R,
class Proj = std::identity,
class T = std::projected_value_t<iterator_t<R>, Proj> >
requires std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T*>
constexpr ranges::borrowed_subrange_t<R>
find_last( R&& r, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
constexpr ranges::subrange<I>
find_last_if( I first, S last, Pred pred, Proj proj = {} );
```
_(since C++23)_

```cpp
template< ranges::forward_range R,
class Proj = std::identity,
std::indirect_unary_predicate
<std::projected<ranges::iterator_t<R>, Proj>> Pred >
constexpr ranges::borrowed_subrange_t<R>
find_last_if( R&& r, Pred pred, Proj proj = {} );
```
_(since C++23)_

```cpp
template< std::forward_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
constexpr ranges::subrange<I>
find_last_if_not( I first, S last, Pred pred, Proj proj = {} );
```
_(since C++23)_

```cpp
template< ranges::forward_range R,
class Proj = std::identity,
std::indirect_unary_predicate
<std::projected<ranges::iterator_t<R>, Proj>> Pred >
constexpr ranges::borrowed_subrange_t<R>
find_last_if_not( R&& r, Pred pred, Proj proj = {} );
```
_(since C++23)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of the elements to examine
- `value`: value to compare the elements to
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Notes
ranges::find_last, ranges::find_last_if, ranges::find_last_if_not have better efficiency on common implementations if I models [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/) or (better) [random_access_iterator](/cpp/iterator/random_access_iterator/).

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <forward_list>
#include <iomanip>
#include <iostream>
#include <string_view>
 
int main()
{
    namespace ranges = std::ranges;
 
    constexpr static auto v = {1, 2, 3, 1, 2, 3, 1, 2};
 
    {
        constexpr auto i1 = ranges::find_last(v.begin(), v.end(), 3);
        constexpr auto i2 = ranges::find_last(v, 3);
        static_assert(ranges::distance(v.begin(), i1.begin()) == 5);
        static_assert(ranges::distance(v.begin(), i2.begin()) == 5);
    }
    {
        constexpr auto i1 = ranges::find_last(v.begin(), v.end(), -3);
        constexpr auto i2 = ranges::find_last(v, -3);
        static_assert(i1.begin() == v.end());
        static_assert(i2.begin() == v.end());
    }
 
    auto abs = [](int x) { return x < 0 ? -x : x; };
 
    {
        auto pred = [](int x) { return x == 3; };
        constexpr auto i1 = ranges::find_last_if(v.begin(), v.end(), pred, abs);
        constexpr auto i2 = ranges::find_last_if(v, pred, abs);
        static_assert(ranges::distance(v.begin(), i1.begin()) == 5);
        static_assert(ranges::distance(v.begin(), i2.begin()) == 5);
    }
    {
        auto pred = [](int x) { return x == -3; };
        constexpr auto i1 = ranges::find_last_if(v.begin(), v.end(), pred, abs);
        constexpr auto i2 = ranges::find_last_if(v, pred, abs);
        static_assert(i1.begin() == v.end());
        static_assert(i2.begin() == v.end());
    }
 
    {
        auto pred = [](int x) { return x == 1 or x == 2; };
        constexpr auto i1 = ranges::find_last_if_not(v.begin(), v.end(), pred, abs);
        constexpr auto i2 = ranges::find_last_if_not(v, pred, abs);
        static_assert(ranges::distance(v.begin(), i1.begin()) == 5);
        static_assert(ranges::distance(v.begin(), i2.begin()) == 5);
    }
    {
        auto pred = [](int x) { return x == 1 or x == 2 or x == 3; };
        constexpr auto i1 = ranges::find_last_if_not(v.begin(), v.end(), pred, abs);
        constexpr auto i2 = ranges::find_last_if_not(v, pred, abs);
        static_assert(i1.begin() == v.end());
        static_assert(i2.begin() == v.end());
    }
 
    using P = std::pair<std::string_view, int>;
    std::forward_list<P> list
    {
        {"one", 1}, {"two", 2}, {"three", 3},
        {"one", 4}, {"two", 5}, {"three", 6},
    };
    auto cmp_one = [](const std::string_view &s) { return s == "one"; };
 
    // find latest element that satisfy the comparator, and projecting pair::first
    const auto subrange = ranges::find_last_if(list, cmp_one, &P::first);
 
    std::cout << "The found element and the tail after it are:\n";
    for (P const& e : subrange)
        std::cout << '{' << std::quoted(e.first) << ", " << e.second << "} ";
    std::cout << '\n';
 
#if __cpp_lib_algorithm_default_value_type
    const auto i3 = ranges::find_last(list, {"three", 3}); // (2) C++26
#else
    const auto i3 = ranges::find_last(list, P{"three", 3}); // (2) C++23
#endif
    assert(i3.begin()->first == "three" && i3.begin()->second == 3);
}
```

## See also
- [ranges::find_end](/cpp/algorithm/ranges/find_end/)
- [ranges::findranges::find_ifranges::find_if_not](/cpp/algorithm/ranges/find/)
- [ranges::search](/cpp/algorithm/ranges/search/)
- [ranges::includes](/cpp/algorithm/ranges/includes/)
- [ranges::binary_search](/cpp/algorithm/ranges/binary_search/)
- [ranges::containsranges::contains_subrange](/cpp/algorithm/ranges/contains/)
