---
title: "std::ranges::views::slide, std::ranges::slide_view"
source_path: "cpp/ranges/slide_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) slide_view is a range adaptor that takes a [view](/cpp/ranges/view/) and a number n and produces a view whose mth element (a "window") is a view over the mth through (m + n - 1)th elements of the original view.

## Declarations
```cpp
template< ranges::forward_range V >
requires ranges::view<V>
class slide_view
: public ranges::view_interface<slide_view<V>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /* unspecified */ slide = /* unspecified */;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
constexpr ranges::view auto slide( R&& r, ranges::range_difference_t<R> n );
```
_(since C++23)_

```cpp
template< class DifferenceType >
constexpr /* range adaptor object */ slide( DifferenceType&& n );
```
_(since C++23)_

```cpp
Helper concepts
```

```cpp
template< class V >
concept /*slide-caches-nothing*/ =
ranges::random_access_range<V> && ranges::sized_range<V>;
```
_(exposition only*)_

```cpp
template< class V >
concept /*slide-caches-last*/ =
!/*slide-caches-nothing*/<V> &&
ranges::bidirectional_range<V> && ranges::common_range<V>;
```
_(exposition only*)_

```cpp
template< class V >
concept /*slide-caches-first*/ =
!/*slide-caches-nothing*/<V> && !/*slide-caches-last*/<V>;
```
_(exposition only*)_

## Notes
There are similarities between ranges::adjacent_view and ranges::slide_view:

The following table shows the differences between these adaptors:

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
 
auto print_subrange = [](std::ranges::viewable_range auto&& r)
{
    std::cout << '[';
    for (char space[]{0,0}; auto elem : r)
        std::cout << space << elem, *space = ' ';
    std::cout << "] ";
};
 
int main()
{
    const auto v = {1, 2, 3, 4, 5, 6};
 
    std::cout << "All sliding windows of width:\n";
    for (const unsigned width : std::views::iota(1U, 1U + v.size()))
    {
        auto const windows = v | std::views::slide(width);
        std::cout << "W = " << width << ": ";
        std::ranges::for_each(windows, print_subrange);
        std::cout << '\n';
    }
}
```

## See also
- [ranges::adjacent_viewviews::adjacent](/cpp/ranges/adjacent_view/)
- [view](/cpp/ranges/view/)
- [ranges::chunk_viewviews::chunk](/cpp/ranges/chunk_view/)
- [views](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
