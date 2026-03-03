---
title: "std::ranges::chunk_by_view<V,Pred>::end"
source_path: "cpp/ranges/chunk_by_view/end"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/chunk_by_view/iterator/) or a [sentinel](/cpp/iterator/default_sentinel/) representing the end of the [chunk_by_view](/cpp/ranges/chunk_by_view/).

## Declarations
```cpp
constexpr auto end();
```
_(since C++23)_

## Return value
An [iterator](/cpp/ranges/chunk_by_view/iterator/) to the element following the last element, or a sentinel which compares equal to the end iterator.

## Notes
end() returns an iterator if and only if the underlying view is a [common_range](/cpp/ranges/common_range/): chunk_by_view<V,Pred> models [common_range](/cpp/ranges/common_range/) whenever V does.

## Example
This section is incompleteReason: no example

## See also
- [begin](/cpp/ranges/chunk_by_view/begin/)
- [ranges::end](/cpp/ranges/end/)
