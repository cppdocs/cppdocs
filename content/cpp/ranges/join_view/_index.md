---
title: "std::ranges::views::join, std::ranges::join_view"
source_path: "cpp/ranges/join_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A range adaptor that represents [view](/cpp/ranges/view/) consisting of the sequence obtained from flattening a view of ranges.

## Declarations
```cpp
template< ranges::input_range V >
requires ranges::view<V> and
ranges::input_range<ranges::range_reference_t<V>>
class join_view
: public ranges::view_interface<join_view<V>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /* unspecified */ join = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
requires /* see below */
constexpr ranges::view auto join( R&& r );
```
_(since C++20)_

## Notes
Before [P2328R1](https://wg21.link/P2328R1) was adopted, the inner range type ([ranges::range_reference_t](/cpp/ranges/range_reference_t/)<V>) cannot be a container type (but can be reference to container). For example, it was not allowed to join a [transform_view](/cpp/ranges/transform_view/) of [std::string](/cpp/string/basic_string/) prvalue.

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string_view>
#include <vector>
 
int main()
{
    using namespace std::literals;
 
    const auto bits = {"https:"sv, "//"sv, "cppreference"sv, "."sv, "com"sv};
    for (char const c : bits | std::views::join)
        std::cout << c;
    std::cout << '\n';
 
    const std::vector<std::vector<int>> v{{1, 2}, {3, 4, 5}, {6}, {7, 8, 9}};
    auto jv = std::ranges::join_view(v);
    for (int const e : jv)
        std::cout << e << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3474 | C++20 | views::join(e) returned a copy of e when e is a join_view | returns a nested join_view |
| P2328R1 | C++20 | non-view range prvalues could not be joined by join_view | made joinable |

## See also
- [ranges::join_with_viewviews::join_with](/cpp/ranges/join_with_view/)
- [view](/cpp/ranges/view/)
- [ranges::concat_viewviews::concat](/cpp/ranges/concat_view/)
- [view](/cpp/ranges/view/)
