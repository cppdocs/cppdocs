---
title: "std::ranges::views::filter, std::ranges::filter_view"
source_path: "cpp/ranges/filter_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

`std::ranges::filter_view` is the concrete [view](/cpp/ranges/view/) type that exposes only elements satisfying a predicate.

`std::ranges::views::filter` is the range adaptor object used in pipelines and direct adaptor calls to produce a `filter_view`.

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

## Adaptor call signatures
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

## Semantic model
`filter_view` performs lazy filtering: elements are tested against the predicate as iteration advances, and failing elements are skipped.

The adaptor stores a view of the underlying range plus a predicate object. A pipeline such as `r | std::views::filter(pred)` is equivalent in intent to constructing a `filter_view` over `views::all(r)` with `pred`.

The predicate is part of the view object's state. Mutating external state captured by the predicate affects later iterations through the same view.

## Traversal and iterator notes
`filter_view` always models [input_range](/cpp/ranges/input_range/). It models [forward_range](/cpp/ranges/forward_range/), [bidirectional_range](/cpp/ranges/bidirectional_range/), and [common_range](/cpp/ranges/common_range/) when the underlying view models those concepts.

It does not provide random-access traversal because advancing requires predicate checks and possible skipping.

For forward underlying ranges, implementations may cache the first matching position to make repeated `begin()` calls efficient.

## Reference map
| Area | Key entries |
| --- | --- |
| View type and adaptor object | [`std::ranges::filter_view`](/cpp/ranges/filter_view/), [`std::ranges::views::filter`](/cpp/ranges/filter_view/) |
| Iterator surface | [filter_view::iterator](/cpp/ranges/filter_view/iterator/), [filter_view::sentinel](/cpp/ranges/filter_view/sentinel/) |
| Related ranges machinery | [range adaptor closure](/cpp/ranges/range_adaptor_closure/), [viewable_range](/cpp/ranges/viewable_range/), [view_interface](/cpp/ranges/view_interface/) |
| Adjacent views | [take_while_view / views::take_while](/cpp/ranges/take_while_view/), [transform_view / views::transform](/cpp/ranges/transform_view/) |

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3714(P2711R1) | C++20 | the multi-parameter constructor was not explicit | made explicit |
| P2325R3 | C++20 | if `Pred` is not `default_initializable`, the default constructor produced a `filter_view` that did not contain a `Pred` | `filter_view` is also not default-initializable in that case |

## See also
- [ranges::take_while_view, views::take_while](/cpp/ranges/take_while_view/)
- [ranges::transform_view, views::transform](/cpp/ranges/transform_view/)
- [view](/cpp/ranges/view/)
