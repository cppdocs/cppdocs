---
title: "std::ranges::views::transform, std::ranges::transform_view"
source_path: "cpp/ranges/transform_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

`std::ranges::transform_view` is the concrete [view](/cpp/ranges/view/) type that applies a function to each element on demand.

`std::ranges::views::transform` is the range adaptor object used in pipelines and direct adaptor calls to produce a `transform_view`.

## Declarations
```cpp
template< ranges::input_range V,
std::copy_constructible F >
requires ranges::view<V> &&
std::is_object_v<F> &&
std::regular_invocable<F&, ranges::range_reference_t<V>> &&
/* invoke_result_t<F&, range_reference_t<V>>& is a valid type */
class transform_view
: public ranges::view_interface<transform_view<V, F>>
```
_(since C++20) (until C++23)_

```cpp
template< ranges::input_range V,
std::move_constructible F >
requires ranges::view<V> &&
std::is_object_v<F> &&
std::regular_invocable<F&, ranges::range_reference_t<V>> &&
/* invoke_result_t<F&, range_reference_t<V>>& is a valid type */
class transform_view
: public ranges::view_interface<transform_view<V, F>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /*unspecified*/ transform = /*unspecified*/;
}
```
_(since C++20)_

## Adaptor call signatures
```cpp
template< ranges::viewable_range R, class F >
requires /* see below */
constexpr ranges::view auto transform( R&& r, F&& fun );
```
_(since C++20)_

```cpp
template< class F >
constexpr /*range adaptor closure*/ transform( F&& fun );
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <cstdio>
#include <iterator>
#include <ranges>
#include <string>
 
char rot13a(const char x, const char a)
{
    return a + (x - a + 13) % 26;
}
 
char rot13(const char x)
{
    if ('Z' >= x and x >= 'A')
        return rot13a(x, 'A');
 
    if ('z' >= x and x >= 'a')
        return rot13a(x, 'a');
 
    return x;
}
 
int main()
{
    auto show = [](const unsigned char x) { std::putchar(x); };
 
    std::string in{"cppreference.com\n"};
    std::ranges::for_each(in, show);
    std::ranges::for_each(in | std::views::transform(rot13), show);
 
    std::string out;
    std::ranges::copy(std::views::transform(in, rot13), std::back_inserter(out));
    std::ranges::for_each(out, show);
    std::ranges::for_each(out | std::views::transform(rot13), show);
}
```

## Semantic model
`transform_view` is lazy: applying the transformation function happens when elements are accessed through the view, not when the view is created.

The adaptor stores a view of the underlying range and a callable object. A pipeline such as `r | std::views::transform(f)` is equivalent in intent to constructing a `transform_view` over `views::all(r)` with `f`.

`transform_view` does not cache transformed values. Accessing the same position multiple times may invoke the transformation callable multiple times.

## Traversal and iterator notes
`transform_view` models [input_range](/cpp/ranges/input_range/) and can model [forward_range](/cpp/ranges/forward_range/), [bidirectional_range](/cpp/ranges/bidirectional_range/), [random_access_range](/cpp/ranges/random_access_range/), and [common_range](/cpp/ranges/common_range/) when the underlying view supports them.

It can model sized-range behavior (for example, `size()`) when the underlying range is sized.

It is not a contiguous range because dereferencing produces transformed values through the callable rather than exposing underlying storage directly.

## Reference map
| Area | Key entries |
| --- | --- |
| View type and adaptor object | [`std::ranges::transform_view`](/cpp/ranges/transform_view/), [`std::ranges::views::transform`](/cpp/ranges/transform_view/) |
| Main member surface | [transform_view::transform_view](/cpp/ranges/transform_view/transform_view/), [begin](/cpp/ranges/transform_view/begin/), [end](/cpp/ranges/transform_view/end/), [size](/cpp/ranges/transform_view/size/), [base](/cpp/ranges/transform_view/base/) |
| Nested iterator/sentinel surface | [transform_view::iterator](/cpp/ranges/transform_view/iterator/), [iterator::operator*](/cpp/ranges/transform_view/iterator/operator%2A/), [iterator::iter_move](/cpp/ranges/transform_view/iterator/iter_move/), [transform_view::sentinel](/cpp/ranges/transform_view/sentinel/) |
| Related entries | [deduction guides](/cpp/ranges/transform_view/deduction_guides/), [range adaptor closure](/cpp/ranges/range_adaptor_closure/), [ranges::transform algorithm](/cpp/algorithm/ranges/transform/) |

## Notes
`transform_view` changed from requiring a copy-constructible function object to a move-constructible one in C++23. The page includes both declaration forms to show that boundary.

## See also
- [ranges::transform](/cpp/algorithm/ranges/transform/)
- [ranges::filter_view, views::filter](/cpp/ranges/filter_view/)
- [view](/cpp/ranges/view/)
