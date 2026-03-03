---
title: "std::ranges::views::enumerate, std::ranges::enumerate_view"
source_path: "cpp/ranges/enumerate_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) enumerate_view is a range adaptor that takes a [view](/cpp/ranges/view/) and produces a view of [tuple](/cpp/utility/tuple/)s. ith element (the tuple) of the resulting sequence holds:
the value equal to i, which is a zero-based index of the element of underlying sequence, andthe reference to the underlying element.

## Declarations
```cpp
template< ranges::view V >
requires /*range-with-movable-references*/<V>
class enumerate_view
: public ranges::view_interface<enumerate_view<V>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /* unspecified */ enumerate = /* unspecified */;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
requires /* see below */
constexpr /* see below */ enumerate( R&& r );
```
_(since C++23)_

```cpp
Helper concepts
```

```cpp
template< class R >
concept /*range-with-movable-references*/ =
ranges::input_range<R> &&
std::move_constructible<ranges::range_reference_t<R>> &&
std::move_constructible<ranges::range_rvalue_reference_t<R>>;
```
_(exposition only*)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges_enumerate
202302L
(C++23)
std::ranges::enumerate_view

## Example
```cpp
#include <iostream>
#include <map>
#include <ranges>
#include <vector>
 
int main()
{
    constexpr static auto v = {'A', 'B', 'C', 'D'};
 
    for (auto const [index, letter] : std::views::enumerate(v))
        std::cout << '(' << index << ':' << letter << ") ";
    std::cout << '\n';
 
#if __cpp_lib_ranges_to_container
    // create a map using the position of each element as key
    auto m = v | std::views::enumerate | std::ranges::to<std::map>();
 
    for (auto const [key, value] : m)
        std::cout << '[' << key << "]:" << value << ' ';
    std::cout << '\n';
#endif
 
    std::vector<int> numbers{1, 3, 5, 7};
 
    // num is mutable even with const, which does not propagate to reference to
    // make it const, use `std::views::enumerate(numbers) | std::views::as_const`
    // or `std::views::enumerate(std::as_const(numbers))`
    for (auto const [index, num] : std::views::enumerate(numbers))
    {
        ++num; // the type is int&
        std::cout << numbers[index] << ' ';
    }
    std::cout << '\n';
}
```

## See also
- [ranges::iota_viewviews::iota](/cpp/ranges/iota_view/)
- [view](/cpp/ranges/view/)
- [ranges::zip_viewviews::zip](/cpp/ranges/zip_view/)
- [view](/cpp/ranges/view/)
- [ranges::elements_viewviews::elements](/cpp/ranges/elements_view/)
- [view](/cpp/ranges/view/)
- [tuple-like](/cpp/utility/tuple/tuple-like/)
- [view](/cpp/ranges/view/)
