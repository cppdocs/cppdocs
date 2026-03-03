---
title: "std::ranges::views::adjacent, std::ranges::adjacent_view, std::ranges::views::pairwise"
source_path: "cpp/ranges/adjacent_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) adjacent_view is a range adaptor that takes a [view](/cpp/ranges/view/), and produces a [view](/cpp/ranges/view/) whose ith element (a "window") is a [std::tuple](/cpp/utility/tuple/) that holds N references to the elements of the original view, from ith up to i + N - 1th inclusively.

## Declarations
```cpp
template< ranges::forward_range V, std::size_t N >
requires ranges::view<V> && (N > 0)
class adjacent_view
: public ranges::view_interface<adjacent_view<V, N>>
```
_(since C++23)_

```cpp
namespace views {
template< std::size_t N >
constexpr /* unspecified */ adjacent = /* unspecified */ ;
}
```
_(since C++23)_

```cpp
namespace views {
inline constexpr auto pairwise = adjacent<2>;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
requires /* see below */
constexpr ranges::view auto adjacent<N>( R&& r );
```
_(since C++23)_

## Notes
views::adjacent only accepts forward ranges even when N is 0.

There are similarities between ranges::adjacent_view and ranges::slide_view:

The following table shows the differences between these adaptors:

## Example
```cpp
#include <array>
#include <format>
#include <iostream>
#include <ranges>
#include <tuple>
 
int main()
{
    constexpr std::array v{1, 2, 3, 4, 5, 6};
    std::cout << "v = [1 2 3 4 5 6]\n";
 
    for (int i{}; std::tuple t : v | std::views::adjacent<3>)
    {
        auto [t0, t1, t2] = t;
        std::cout << std::format("e = {:<{}}[{} {} {}]\n", "", 2 * i++, t0, t1, t2);
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4098 | C++23 | views::adjacent<0> used to accept input-only ranges | made rejected |

## See also
- [ranges::adjacent_transform_viewviews::adjacent_transform](/cpp/ranges/adjacent_transform_view/)
- [view](/cpp/ranges/view/)
- [ranges::slide_viewviews::slide](/cpp/ranges/slide_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::chunk_viewviews::chunk](/cpp/ranges/chunk_view/)
- [views](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::stride_viewviews::stride](/cpp/ranges/stride_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
