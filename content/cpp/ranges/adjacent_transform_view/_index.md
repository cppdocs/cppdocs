---
title: "std::ranges::views::adjacent_transform, std::ranges::adjacent_transform_view, std::ranges::views::pairwise_transform"
source_path: "cpp/ranges/adjacent_transform_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) adjacent_transform_view is a range adaptor that takes a [view](/cpp/ranges/view/) and an invocable object fun, and produces a [view](/cpp/ranges/view/) whose ith element is a value that is the result of applying fun to each element in [i,i + N) of the original view. F always has [arity](https://en.wikipedia.org/wiki/arity) N.

## Declarations
```cpp
template< ranges::forward_range V, std::move_constructible F, std::size_t N >
requires ranges::view<V> && (N > 0) && std::is_object_v<F> &&
std::regular_invocable<F&,
/*REPEAT*/(ranges::range_reference_t<V>, N)...> &&
/*can-reference*/<std::invoke_result_t<F&,
/*REPEAT*/(ranges::range_reference_t<V>, N)...>>
class adjacent_transform_view
: public ranges::view_interface<adjacent_transform_view<V, F, N>>
```
_(since C++23)_

```cpp
namespace views {
template< std::size_t N >
constexpr /* unspecified */ adjacent_transform = /* unspecified */;
}
```
_(since C++23)_

```cpp
namespace views {
inline constexpr auto pairwise_transform = adjacent_transform<2>;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R, class F >
requires /* see below */
constexpr ranges::view auto adjacent_transform<N>( R&& r, F&& fun );
```
_(since C++23)_

```cpp
template< class F >
constexpr /*range adaptor closure*/ adjacent_transform<N>( F&& fun );
```
_(since C++23)_

## Notes
views::adjacent_transform only accepts foward ranges even when N is 0.

## Example
```cpp
#include <array>
#include <iostream>
#include <ranges>
 
int main()
{
    constexpr static std::array data{1, 2, 3, 4, 5, 6};
    constexpr int window{3};
 
    auto Fun = [](auto... ints) { return (... + ints); };
    // Alternatively, the Fun could be any ternary (if window == 3) callable, e.g.:
    // auto Fun = [](int x, int y, int z) { return x + y + z; };
 
    constexpr auto view = data | std::views::adjacent_transform<window>(Fun);
 
    static_assert(
        view.size() == (data.size() - window + 1)
        && std::array{6, 9, 12, 15}
        == std::array{view[0], view[1], view[2], view[3]}
        && view[0] == Fun(data[0], data[1], data[2])
        && view[1] == Fun(data[1], data[2], data[3])
        && view[2] == Fun(data[2], data[3], data[4])
        && view[3] == Fun(data[3], data[4], data[5])
    );
 
    for (int x : view)
        std::cout << x << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4098 | C++23 | views::adjacent_transform<0> used to accept input-only ranges | made rejected |

## See also
- [ranges::adjacent_viewviews::adjacent](/cpp/ranges/adjacent_view/)
- [view](/cpp/ranges/view/)
- [ranges::transform_viewviews::transform](/cpp/ranges/transform_view/)
- [view](/cpp/ranges/view/)
- [ranges::zip_transform_viewviews::zip_transform](/cpp/ranges/zip_transform_view/)
- [view](/cpp/ranges/view/)
- [ranges::transform](/cpp/algorithm/ranges/transform/)
