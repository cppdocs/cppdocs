---
title: "std::ranges::views::chunk_by, std::ranges::chunk_by_view"
source_path: "cpp/ranges/chunk_by_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) chunk_by_view is a range adaptor that takes a [view](/cpp/ranges/view/) and an invocable object pred (the binary predicate), and produces a [view](/cpp/ranges/view/) of subranges (chunks), by splitting the underlying view between each pair of adjacent elements for which pred returns false. The first element of each such pair belongs to the previous chunk, and the second element belongs to the next chunk.

## Declarations
```cpp
template< ranges::forward_range V, std::indirect_binary_predicate<iterator_t<V>,
ranges::iterator_t<V>> Pred >
requires ranges::view<V> && std::is_object_v<Pred>
class chunk_by_view
: public ranges::view_interface<chunk_by_view<V, Pred>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /* unspecified */ chunk_by = /* unspecified */ ;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R, class Pred >
requires /* see below */
constexpr ranges::view auto chunk_by( R&& r, Pred&& pred );
```
_(since C++23)_

```cpp
template< class Pred >
constexpr /*range adaptor closure*/ chunk_by( Pred&& pred );
```
_(since C++23)_

## Notes
In order to provide the amortized constant time complexity required by the [range](/cpp/ranges/range/) concept, the result of [begin()](/cpp/ranges/chunk_by_view/begin/) is cached within the chunk_by_view object. If the underlying range is modified after the first call to [begin()](/cpp/ranges/chunk_by_view/begin/), subsequent uses of the chunk_by_view object might have unintuitive behavior.

## Example
```cpp
#include <functional>
#include <iostream>
#include <ranges>
#include <string_view>
 
void print_chunks(auto view, std::string_view separator = ", ")
{
    for (auto const subrange : view)
    {
        std::cout << '[';
        for (std::string_view prefix; auto const& elem : subrange)
            std::cout << prefix << elem, prefix = separator;
        std::cout << "] ";
    }
    std::cout << '\n';
}
 
int main()
{
    std::initializer_list v1 = {1, 2, 3, 1, 2, 3, 3, 3, 1, 2, 3};
    auto fn1 = std::ranges::less{};
    auto view1 = v1 | std::views::chunk_by(fn1);
    print_chunks(view1);
 
    std::initializer_list v2 = {1, 2, 3, 4, 4, 0, 2, 3, 3, 3, 2, 1};
    auto fn2 = std::ranges::not_equal_to{};
    auto view2 = v2 | std::views::chunk_by(fn2);
    print_chunks(view2);
 
    std::string_view v3 = "__cpp_lib_ranges_chunk_by";
    auto fn3 = [](auto x, auto y) { return not(x == '_' or y == '_'); };
    auto view3 = v3 | std::views::chunk_by(fn3);
    print_chunks(view3, "");
 
    std::string_view v4 = "\u007a\u00df\u6c34\u{1f34c}"; // "zß水🍌"
    auto fn4 = [](auto, auto ß) { return 128 == ((128 + 64) & ß); };
    auto view4 = v4 | std::views::chunk_by(fn4);
    print_chunks(view4, "");
}
```

## See also
- [ranges::chunk_viewviews::chunk](/cpp/ranges/chunk_view/)
- [views](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::slide_viewviews::slide](/cpp/ranges/slide_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::stride_viewviews::stride](/cpp/ranges/stride_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
