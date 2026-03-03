---
title: "std::ranges::views::take_while, std::ranges::take_while_view"
source_path: "cpp/ranges/take_while_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A range adaptor that represents [view](/cpp/ranges/view/) of the elements from an underlying sequence, starting at the beginning and ending at the first element for which the predicate returns false.

## Declarations
```cpp
template< ranges::view V, class Pred >
requires ranges::input_range<V> &&
std::is_object_v<Pred> &&
std::indirect_unary_predicate<const Pred, ranges::iterator_t<V>>
class take_while_view
: public ranges::view_interface<take_while_view<V, Pred>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /*unspecified*/ take_while = /*unspecified*/;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R, class Pred >
requires /* see below */
constexpr ranges::view auto take_while( R&& r, Pred&& pred );
```
_(since C++20)_

```cpp
template< class Pred >
constexpr /*range adaptor closure*/ take_while( Pred&& pred );
```
_(since C++20)_

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    for (int year : std::views::iota(2020)
                  | std::views::take_while([](int y){ return y < 2026; }))
        std::cout << year << ' ';
    std::cout << '\n';
 
    const char note[]{"Today is yesterday's tomorrow!..."};
    auto not_dot = [](char c){ return c != '.'; };
    for (char x : std::ranges::take_while_view(note, not_dot))
        std::cout << x;
    std::cout << '\n';
}
```

## See also
- [ranges::take_viewviews::take](/cpp/ranges/take_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::drop_while_viewviews::drop_while](/cpp/ranges/drop_while_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
