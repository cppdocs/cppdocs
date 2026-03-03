---
title: "std::ranges::view_interface<D>::size"
source_path: "cpp/ranges/view_interface/size"
category: "ranges"
since: "C++20"
---

The default implementation of size() member function obtains the size of the range by calculating the difference between the sentinel and the beginning iterator.

## Declarations
```cpp
constexpr auto size() requires ranges::forward_range<D> &&
std::sized_sentinel_for<ranges::sentinel_t<D>,
ranges::iterator_t<D>>;
```
_(since C++20)_

```cpp
constexpr auto size() const requires ranges::forward_range<const D> &&
std::sized_sentinel_for<ranges::sentinel_t<const D>,
ranges::iterator_t<const D>>;
```
_(since C++20)_

## Notes
Following derived types may use the default implementation of size():

Following types are derived from [std::ranges::view_interface](/cpp/ranges/view_interface/) and do not declare their own size() member function, but they cannot use the default implementation, because their iterator and sentinel types never satisfy [sized_sentinel_for](/cpp/iterator/sized_sentinel_for/):

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3646 | C++20 | the default implementations of size functions returned a signed type | they return unsigned type |

## See also
- [sizessize](/cpp/iterator/size/)
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
