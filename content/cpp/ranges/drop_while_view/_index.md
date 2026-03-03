---
title: "std::ranges::views::drop_while, std::ranges::drop_while_view"
source_path: "cpp/ranges/drop_while_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A range adaptor that represents [view](/cpp/ranges/view/) of elements from an underlying sequence, beginning at the first element for which the predicate returns false.

## Declarations
```cpp
template< ranges::view V, class Pred >
requires ranges::input_range<V> &&
std::is_object_v<Pred> &&
std::indirect_unary_predicate<const Pred, ranges::iterator_t<V>>
class drop_while_view
: public ranges::view_interface<drop_while_view<V, Pred>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /* unspecified */ drop_while = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R, class Pred >
requires /* see below */
constexpr ranges::view auto drop_while( R&& r, Pred&& pred );
```
_(since C++20)_

```cpp
template< class Pred >
constexpr /*range adaptor closure*/ drop_while( Pred&& pred );
```
_(since C++20)_

## Notes
In order to provide the amortized constant time complexity required by the [range](/cpp/ranges/range/) concept, the result of [begin](/cpp/ranges/drop_while_view/begin/) is cached within the drop_while_view object. If the underlying range is modified after the first call to begin(), subsequent uses of the drop_while_view object might have unintuitive behavior.

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string>
#include <string_view>
 
using std::operator""sv;
 
[[nodiscard]]
constexpr bool is_space(char p) noexcept
{
    auto ne = [p](auto q) { return p != q; };
    return !!(" \t\n\v\r\f" | std::views::drop_while(ne));
};
 
[[nodiscard("trims the output")]]
constexpr std::string_view trim_left(std::string_view const in) noexcept
{
    auto view = in | std::views::drop_while(is_space);
    return {view.begin(), view.end()};
}
 
[[nodiscard("trims the output")]]
constexpr std::string trim(std::string_view const in)
{
    auto view = in
              | std::views::drop_while(is_space)
              | std::views::reverse
              | std::views::drop_while(is_space)
              | std::views::reverse
              ;
    return {view.begin(), view.end()};
}
 
int main()
{
    static_assert(trim_left(" \n C++23") == "C++23"sv);
 
    constexpr auto src{" \f\n\t\r\vHello, C++20!\f\n\t\r\v "sv};
    static_assert(trim(src) == "Hello, C++20!");
 
    static constexpr auto v = {0, 1, 2, 3, 4, 5};
    for (int n : v | std::views::drop_while([](int i) { return i < 3; }))
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3494 | C++20 | drop_while_view was never a borrowed_range | it is a borrowed_range if its underlying view is |

## See also
- [ranges::drop_viewviews::drop](/cpp/ranges/drop_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
