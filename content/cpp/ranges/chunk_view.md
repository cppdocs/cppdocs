---
title: "std::ranges::views::chunk, std::ranges::chunk_view"
source_path: "cpp/ranges/chunk_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

chunk_view takes a [view](/cpp/ranges/view/) and a number n and produces a range of views (the chunks) of the original view, such that each chunk, except maybe the last one, has the size n. These chunks are non-overlapping, successive sub-ranges of the elements of the original view, in order.

## Declarations
```cpp
template< ranges::view V >
requires ranges::input_range<V>
class chunk_view
: public ranges::view_interface<chunk_view<V>>
```
_(since C++23)_

```cpp
template< ranges::view V >
requires ranges::forward_range<V>
class chunk_view<V>
: public ranges::view_interface<chunk_view<V>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /* unspecified */ chunk = /* unspecified */;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
constexpr ranges::view auto chunk( R&& r, ranges::range_difference_t<R> n );
```
_(since C++23)_

```cpp
template< class DifferenceType >
constexpr /*range adaptor closure*/ chunk( DifferenceType&& n );
```
_(since C++23)_

```cpp
Helper templates
```

```cpp
template< class I >
constexpr I /*div-ceil*/( I num, I denom );
```
_(exposition only*)_

## Notes
If V models [input_range](/cpp/ranges/input_range/) ([1](#Version_1)), chunk_view's iterator has a dedicated type: [outer_iterator::value_type](/cpp/ranges/chunk_view/outer_iterator/value_type/) that is itself an input view.

If V models [forward_range](/cpp/ranges/forward_range/) or stronger ([2](#Version_2)), chunk_view defers to views::take for its value_type.

If V models [bidirectional_range](/cpp/ranges/bidirectional_range/) or stronger ranges ([2](#Version_2)), the need to calculate size the last chunk correctly (from the end [iterator](/cpp/ranges/chunk_view/iterator/)) requires the underlying range type V to be [sized_range](/cpp/ranges/sized_range/).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
 
auto print_subrange = [](std::ranges::viewable_range auto&& r)
{
    std::cout << '[';
    for (int pos{}; auto elem : r)
        std::cout << (pos++ ? " " : "") << elem;
    std::cout << "] ";
};
 
int main()
{
    const auto v = {1, 2, 3, 4, 5, 6};
 
    for (const unsigned width : std::views::iota(1U, 2U + v.size()))
    {
        auto const chunks = v | std::views::chunk(width);
        std::cout << "chunk(" << width << "): ";
        std::ranges::for_each(chunks, print_subrange);
        std::cout << '\n';
    }
}
```

## See also
- [ranges::chunk_by_viewviews::chunk_by](/cpp/ranges/chunk_by_view/)
- [view](/cpp/ranges/view/)
- [ranges::adjacent_viewviews::adjacent](/cpp/ranges/adjacent_view/)
- [view](/cpp/ranges/view/)
- [ranges::slide_viewviews::slide](/cpp/ranges/slide_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
