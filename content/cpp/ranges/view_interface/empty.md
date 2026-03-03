---
title: "std::ranges::view_interface<D>::empty"
source_path: "cpp/ranges/view_interface/empty"
category: "ranges"
since: "C++20"
---

The default implementation of empty() member function checks whether the object of the derived type's size is 0 (if valid), or whether the beginning iterator and the sentinel compare equal.

## Declarations
```cpp
constexpr bool empty()
requires ranges::sized_range<D> || ranges::forward_range<D>;
```
_(since C++20)_

```cpp
constexpr bool empty() const
requires ranges::sized_range<const D> || ranges::forward_range<const D>;
```
_(since C++20)_

## Return value
true if the size of the object of the derived type is 0 (if D satisfies [std::ranges::sized_range](/cpp/ranges/sized_range/)), or its beginning iterator and the sentinel compare equal, false otherwise.

## Notes
Following derived types may use the default implementation of empty:

Although [std::ranges::basic_istream_view](/cpp/ranges/basic_istream_view/) inherits from [std::ranges::view_interface](/cpp/ranges/view_interface/) and does not declare the empty() member function, it cannot use the default implementation, because it never satisfies neither [std::ranges::sized_range](/cpp/ranges/sized_range/) nor [std::ranges::forward_range](/cpp/ranges/forward_range/).

## Example
```cpp
#include <array>
#include <ranges>
 
int main()
{
    constexpr std::array a{0, 1, 2, 3, 4};
    static_assert(!std::ranges::single_view(a).empty());
    static_assert((a | std::views::take(0)).empty());
    static_assert(!(a | std::views::take(5)).empty());
    static_assert((a | std::views::drop(5)).empty());
    static_assert(!(a | std::views::drop(3)).empty());
    static_assert(std::views::iota(0,0).empty());
    static_assert(!std::views::iota(0).empty());
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3715 | C++20 | empty() only supported forward_range types | sized_range-only types are also supported |

## See also
- [empty](/cpp/iterator/empty/)
- [ranges::empty](/cpp/ranges/empty/)
