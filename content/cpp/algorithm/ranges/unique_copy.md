---
title: "std::ranges::unique_copy, std::ranges::unique_copy_result"
source_path: "cpp/algorithm/ranges/unique_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Copies the elements from the source range [first,last), to the destination range beginning at result in such a way that there are no consecutive equal elements. Only the first element of each group of equal elements is copied.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S, std::weakly_incrementable O,
class Proj = std::identity,
std::indirect_equivalence_relation<std::projected<I, Proj>> C = ranges::equal_to >
requires std::indirectly_copyable<I, O> && (std::forward_iterator<I> ||
(std::input_iterator<O> && std::same_as<std::iter_value_t<I>,
std::iter_value_t<O>>) || std::indirectly_copyable_storable<I, O>)
constexpr unique_copy_result<I, O>
unique_copy( I first, S last, O result, C comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, std::weakly_incrementable O, class Proj = std::identity,
std::indirect_equivalence_relation<std::projected<ranges::iterator_t<R>,
Proj>> C = ranges::equal_to >
requires std::indirectly_copyable<ranges::iterator_t<R>, O> &&
(std::forward_iterator<ranges::iterator_t<R>> ||
(std::input_iterator<O> && std::same_as<ranges::range_value_t<R>,
std::iter_value_t<O>>) ||
std::indirectly_copyable_storable<ranges::iterator_t<R>, O>)
constexpr unique_copy_result<ranges::borrowed_iterator_t<R>, O>
unique_copy( R&& r, O result, C comp = {}, Proj proj = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using unique_copy_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first, last`: the source range of elements
- `r`: the source range of elements
- `result`: the destination range of elements
- `comp`: the binary predicate to compare the projected elements
- `proj`: the projection to apply to the elements

## Return value
{last, result + N}

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <iterator>
#include <list>
#include <string>
#include <type_traits>
 
void print(const auto& rem, const auto& v)
{
    using V = std::remove_cvref_t<decltype(v)>;
    constexpr bool sep{std::is_same_v<typename V::value_type, int>};
    std::cout << rem << std::showpos;
    for (const auto& e : v)
        std::cout << e << (sep ? " " : "");
    std::cout << '\n';
}
 
int main()
{
    std::string s1{"The      string    with many       spaces!"};
    print("s1: ", s1);
 
    std::string s2;
    std::ranges::unique_copy(
        s1.begin(), s1.end(), std::back_inserter(s2),
        [](char c1, char c2) { return c1 == ' ' && c2 == ' '; }
    );
    print("s2: ", s2);
 
    const auto v1 = {-1, +1, +2, -2, -3, +3, -3};
    print("v1: ", v1);
    std::list<int> v2;
    std::ranges::unique_copy(
        v1, std::back_inserter(v2),
        {}, // default comparator std::ranges::equal_to
        [](int x) { return std::abs(x); } // projection
    );
    print("v2: ", v2);
}
```

## See also
- [ranges::unique](/cpp/algorithm/ranges/unique/)
- [ranges::copyranges::copy_if](/cpp/algorithm/ranges/copy/)
- [ranges::adjacent_find](/cpp/algorithm/ranges/adjacent_find/)
- [unique_copy](/cpp/algorithm/unique_copy/)
