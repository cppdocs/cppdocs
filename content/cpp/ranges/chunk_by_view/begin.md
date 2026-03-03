---
title: "std::ranges::chunk_by_view<V,Pred>::begin"
source_path: "cpp/ranges/chunk_by_view/begin"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/chunk_by_view/iterator/) to the first element of the [chunk_by_view](/cpp/ranges/chunk_by_view/).

## Declarations
```cpp
constexpr /*iterator*/ begin();
```
_(since C++23)_

## Return value
[Iterator](/cpp/ranges/chunk_by_view/iterator/) to the first element.

## Notes
In order to provide the amortized constant-time complexity required by the [range](/cpp/ranges/range/) concept, this function caches the result within the data member [begin_](/cpp/ranges/chunk_by_view/#begin) for use on subsequent calls.

## Example
This section is incompleteReason: no example

## See also
- [end](/cpp/ranges/chunk_by_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
