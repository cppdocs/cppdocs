---
title: "std::ranges::views::join_with, std::ranges::join_with_view"
source_path: "cpp/ranges/join_with_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) A range adaptor that represents [view](/cpp/ranges/view/) consisting of the sequence obtained from flattening a view of ranges, with every element of the delimiter inserted in between elements of the view. The delimiter can be a single element or a view of elements.

## Declarations
```cpp
template< ranges::input_range V, ranges::forward_range Pattern >
requires ranges::view<V> &&
ranges::input_range<ranges::range_reference_t<V>> &&
ranges::view<Pattern> &&
/*concatable*/<ranges::range_reference_t<V>, Pattern>
class join_with_view :
ranges::view_interface<join_with_view<V, Pattern>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /* unspecified */ join_with = /* unspecified */;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R, class Pattern >
requires /* see below */
constexpr ranges::view auto join_with( R&& r, Pattern&& pattern );
```
_(since C++23)_

```cpp
template< class Pattern >
constexpr /* range adaptor closure */ join_with( Pattern&& pattern );
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges_join_with
202202L
(C++23)
std::ranges::join_with_view

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string_view>
#include <vector>
 
int main()
{
    using namespace std::literals;
 
    std::vector v{"This"sv, "is"sv, "a"sv, "test."sv};
    auto joined = v | std::views::join_with(' ');
 
    for (auto c : joined)
        std::cout << c;
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4074 | C++23 | join_with_view was underconstrained | updated the constraints |

## See also
- [ranges::join_viewviews::join](/cpp/ranges/join_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges](/cpp/ranges/range/)
- [ranges::concat_viewviews::concat](/cpp/ranges/concat_view/)
- [view](/cpp/ranges/view/)
