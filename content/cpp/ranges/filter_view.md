---
title: "std::ranges::views::filter, std::ranges::filter_view"
source_path: "cpp/ranges/filter_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A range adaptor that represents [view](/cpp/ranges/view/) of an underlying sequence without the elements that fail to satisfy a predicate.

## Declarations
```cpp
template< ranges::input_range V,
std::indirect_unary_predicate<ranges::iterator_t<V>> Pred >
requires ranges::view<V> && std::is_object_v<Pred>
class filter_view
: public ranges::view_interface<filter_view<V, Pred>>
```
_(since C++20)_

```cpp
namespace views {
inline constexpr /* unspecified */ filter = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R, class Pred >
requires /* see below */
constexpr ranges::view auto filter( R&& r, Pred&& pred );
```
_(since C++20)_

```cpp
template< class Pred >
constexpr /* range adaptor closure */ filter( Pred&& pred );
```
_(since C++20)_

## Parameters
- `base`: range to filter
- `pred`: predicate to filter out elements

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    auto even = [](int i) { return 0 == i % 2; };
    auto square = [](int i) { return i * i; };
 
    for (int i : std::views::iota(0, 6)
               | std::views::filter(even)
               | std::views::transform(square))
        std::cout << i << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3714(P2711R1) | C++20 | the multi-parameter constructor was not explicit | made explicit |
| P2325R3 | C++20 | if Pred is not default_initializable, the default constructorconstructs a filter_view which does not contain a Pred | the filter_view is alsonot default_initializable |

## See also
- [ranges::take_while_viewviews::take_while](/cpp/ranges/take_while_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
