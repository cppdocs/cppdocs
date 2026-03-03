---
title: "Assignable wrapper (C++20)"
source_path: "cpp/ranges/copyable_wrapper"
category: "ranges"
---

[ranges::single_view](/cpp/ranges/single_view/), [ranges::repeat_view](/cpp/ranges/repeat_view/),(since C++23) and range adaptors that store an invocable object are specified in terms of an exposition-only class template copyable-box(until C++23)movable-box(since C++23). The name shown here is for exposition purposes only.

## Declarations
```cpp
template< class T >
requires std::copy_constructible<T> && std::is_object_v<T>
class /*copyable-box*/;
```
_(since C++20) (until C++23) (exposition only*)_

```cpp
template< class T >
requires std::move_constructible<T> && std::is_object_v<T>
class /*movable-box*/;
```
_(since C++23) (exposition only*)_

## Notes
A copyable-box(until C++23)movable-box(since C++23) does not contain a value only if

Before [P2325R3](https://wg21.link/P2325R3), the wrapper was called semiregular-box in the standard and always satisfied [semiregular](/cpp/concepts/semiregular/), as the default constructor was always provided (which might construct a valueless wrapper).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2325R3 | C++20 | if T is not default_initializable, the default constructorconstructs a wrapper which does not contain a value | the wrapper is alsonot default_initializable |
| LWG 3572 | C++20 | conditionally different assignment operators were not constexpr | made constexpr |

## See also
- [ranges::single_viewviews::single](/cpp/ranges/single_view/)
- [view](/cpp/ranges/view/)
- [ranges::repeat_viewviews::repeat](/cpp/ranges/repeat_view/)
- [view](/cpp/ranges/view/)
- [ranges::filter_viewviews::filter](/cpp/ranges/filter_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
- [ranges::transform_viewviews::transform](/cpp/ranges/transform_view/)
- [view](/cpp/ranges/view/)
- [ranges::take_while_viewviews::take_while](/cpp/ranges/take_while_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::drop_while_viewviews::drop_while](/cpp/ranges/drop_while_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::zip_transform_viewviews::zip_transform](/cpp/ranges/zip_transform_view/)
- [view](/cpp/ranges/view/)
- [ranges::adjacent_transform_viewviews::adjacent_transform](/cpp/ranges/adjacent_transform_view/)
- [view](/cpp/ranges/view/)
