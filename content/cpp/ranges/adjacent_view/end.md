---
title: "std::ranges::adjacent_view<V,N>::end"
source_path: "cpp/ranges/adjacent_view/end"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/adjacent_view/iterator/) or a [sentinel](/cpp/ranges/adjacent_view/sentinel/) representing the end of the [adjacent_view](/cpp/ranges/adjacent_view/).

## Declarations
```cpp
constexpr auto end() requires (!__SimpleView<V>);
```
_(since C++23)_

```cpp
constexpr auto end() const requires ranges::range<const V>;
```
_(since C++23)_

## Return value
An [iterator](/cpp/ranges/adjacent_view/iterator/) to the element following the last element, if the underlying view V models [common_range](/cpp/ranges/common_range/). Otherwise, a [sentinel](/cpp/ranges/adjacent_view/sentinel/) which compares equal to the end iterator.

## Notes
[ranges::adjacent_view](/cpp/ranges/adjacent_view/)<V,N> models [common_range](/cpp/ranges/common_range/) whenever the underlying view V does.

## Example
This section is incompleteReason: no example

## See also
- [begin](/cpp/ranges/adjacent_view/begin/)
- [ranges::end](/cpp/ranges/end/)
