---
title: "std::ranges::views::empty, std::ranges::empty_view"
source_path: "cpp/ranges/empty_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) A range factory that produces a [view](/cpp/ranges/view/) of no elements of a particular type.

## Declarations
```cpp
template<class T>
requires std::is_object_v<T>
class empty_view : public ranges::view_interface<empty_view<T>>
```
_(since C++20)_

```cpp
namespace views {
template<class T>
constexpr empty_view<T> empty{};
}
```
_(since C++20)_

## Notes
Although empty_view obtains front, back, and operator[] member functions from view_interface, calls to them always result in undefined behavior since an empty_view is always empty.

The inherited operator bool conversion function always returns false.

## Example
```cpp
#include <ranges>
 
int main()
{
    namespace ranges = std::ranges;
 
    ranges::empty_view<long> e;
    static_assert(ranges::empty(e)); // uses operator bool
    static_assert(0 == e.size());
    static_assert(nullptr == e.data());
    static_assert(nullptr == e.begin());
    static_assert(nullptr == e.end());
    static_assert(nullptr == e.cbegin());
    static_assert(nullptr == e.cend());
}
```

## See also
- [optional](/cpp/utility/optional/)
- [ranges::single_viewviews::single](/cpp/ranges/single_view/)
- [view](/cpp/ranges/view/)
- [views::all_tviews::all](/cpp/ranges/all_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
- [ranges::ref_view](/cpp/ranges/ref_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
