---
title: "std::ranges::views::split, std::ranges::split_view"
source_path: "cpp/ranges/split_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) split_view takes a [view](/cpp/ranges/view/) and a delimiter, and splits the [view](/cpp/ranges/view/) into subranges on the delimiter.

## Declarations
```cpp
template< ranges::forward_range V, ranges::forward_range Pattern >
requires ranges::view<V> &&
ranges::view<Pattern> &&
std::indirectly_comparable<ranges::iterator_t<V>,
ranges::iterator_t<Pattern>,
ranges::equal_to>
class split_view
: public ranges::view_interface<split_view<V, Pattern>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /* unspecified */ split = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R, class Pattern >
requires /* see below */
constexpr ranges::view auto split( R&& r, Pattern&& pattern );
```
_(since C++20)_

```cpp
template< class Pattern >
constexpr /* range adaptor closure */ split( Pattern&& pattern );
```
_(since C++20)_

## Notes
Before [P2210R2](https://wg21.link/P2210R2), split_view used a lazy mechanism for splitting, and thus could not keep the bidirectional, random access, or contiguous properties of the underlying view, or make the iterator type of the inner range same as that of the underlying view. Consequently, it is redesigned by [P2210R2](https://wg21.link/P2210R2), and the lazy mechanism is moved to [lazy_split_view](/cpp/ranges/lazy_split_view/).

The delimiter pattern generally should not be an ordinary string literal, as it will consider the null terminator to be necessary part of the delimiter; therefore, it is advisable to use a [std::string_view](/cpp/string/basic_string_view/) literal instead.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <ranges>
#include <string_view>
 
int main()
{
    using std::operator""sv;
    constexpr auto words{"Hello^_^C++^_^20^_^!"sv};
    constexpr auto delim{"^_^"sv};
 
    for (const auto word : std::views::split(words, delim))
        // with string_view's C++23 range constructor:
        std::cout << std::quoted(std::string_view(word)) << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2210R2 | C++20 | the old split_view was too lazy to be easily used | it is redesigned |

## See also
- [ranges::lazy_split_viewviews::lazy_split](/cpp/ranges/lazy_split_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::join_viewviews::join](/cpp/ranges/join_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges](/cpp/ranges/range/)
