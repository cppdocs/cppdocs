---
title: "std::ranges::adjacent_transform_view<V,F,N>::end"
source_path: "cpp/ranges/adjacent_transform_view/end"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/adjacent_transform_view/iterator/) or a [sentinel](/cpp/ranges/adjacent_transform_view/sentinel/) representing the end of the [adjacent_transform_view](/cpp/ranges/adjacent_transform_view/).

## Declarations
```cpp
constexpr auto end();
```
_(since C++23)_

```cpp
constexpr auto end() const
requires ranges::range<const InnerView> &&
std::regular_invocable<const F&,
/*REPEAT*/(ranges::range_reference_t<const V>, N)...>;
```
_(since C++23)_

## Return value
An [iterator](/cpp/ranges/adjacent_transform_view/iterator/) to the element following the last element, if the underlying view V models [common_range](/cpp/ranges/common_range/). Otherwise, a [sentinel](/cpp/ranges/adjacent_transform_view/sentinel/) which compares equal to the end iterator.

## Notes
adjacent_transform_view<V,F,N> models [common_range](/cpp/ranges/common_range/) whenever the underlying view V does.

## Example
This section is incompleteReason: no example

## See also
- [begin](/cpp/ranges/adjacent_transform_view/begin/)
- [ranges::end](/cpp/ranges/end/)
