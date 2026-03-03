---
title: "std::ranges::views::lazy_split, std::ranges::lazy_split_view"
source_path: "cpp/ranges/lazy_split_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) lazy_split_view takes a [view](/cpp/ranges/view/) and a delimiter, and splits the [view](/cpp/ranges/view/) into subranges on the delimiter.
Two major scenarios are supported:
The view is an [input_range](/cpp/ranges/input_range/), the delimiter is a single element (wrapped in a [single_view](/cpp/ranges/single_view/)).The view is a [forward_range](/cpp/ranges/forward_range/), the delimiter is a [view](/cpp/ranges/view/) of elements.

## Declarations
```cpp
template< ranges::input_range V, ranges::forward_range Pattern >
requires ranges::view<V> &&
ranges::view<Pattern> &&
std::indirectly_comparable<ranges::iterator_t<V>,
ranges::iterator_t<Pattern>,
ranges::equal_to> &&
(ranges::forward_range<V> || /*tiny-range*/<Pattern>)
class lazy_split_view
: public ranges::view_interface<lazy_split_view<V, Pattern>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /* unspecified */ lazy_split = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R, class Pattern >
requires /* see below */
constexpr ranges::view auto lazy_split( R&& r, Pattern&& pattern );
```
_(since C++20)_

```cpp
template< class Pattern >
constexpr /* range adaptor closure */ lazy_split( Pattern&& pattern );
```
_(since C++20)_

```cpp
Helper concepts
```

```cpp
template< class R >
concept /*tiny-range*/ =
ranges::sized_range<R> &&
requires { /* is-statically-constexpr-sized */<R>; } &&
(std::remove_reference_t<R>::size() <= 1);
```
_(exposition only*)_

## Notes
The name lazy_split_view is introduced by the post-C++20 defect report [P2210R2](https://wg21.link/P2210R2). It has the same lazy mechanism as that of the old split_view before change.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <string_view>
 
auto print = [](auto const& view)
{
    // `view` is of std::views::lazy_split_view::__outer_iterator::value_type
 
    for (std::cout << "{ "; const auto element : view)
        std::cout << element << ' ';
    std::cout << "} ";
};
 
int main()
{
    constexpr static auto source = {0, 1, 0, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9};
    constexpr int delimiter{0};
    constexpr std::ranges::lazy_split_view outer_view{source, delimiter};
    std::cout << "splits[" << std::ranges::distance(outer_view) << "]:  ";
    for (auto const& inner_view: outer_view)
        print(inner_view);
 
    constexpr std::string_view hello{"Hello C++ 20 !"};
    std::cout << "\n" "substrings: ";
    std::ranges::for_each(hello | std::views::lazy_split(' '), print);
 
    constexpr std::string_view text{"Hello-+-C++-+-20-+-!"};
    constexpr std::string_view delim{"-+-"};
    std::cout << "\n" "substrings: ";
    std::ranges::for_each(text | std::views::lazy_split(delim), print);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2210R2 | C++20 | the old split_view was too lazy to be easily used | moves its functionality to lazy_split_view |

## See also
- [ranges::split_viewviews::split](/cpp/ranges/split_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::join_viewviews::join](/cpp/ranges/join_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges](/cpp/ranges/range/)
