---
title: "std::ranges::chunk_by_view<V,Pred>::find_next, std::ranges::chunk_by_view<V,Pred>::find_prev"
source_path: "cpp/ranges/chunk_by_view/helpers"
category: "ranges"
---

Finds the next chunk.

## Declarations
```cpp
constexpr ranges::iterator_t<V>
/*find-next*/( ranges::iterator_t<V> current );
```
_(since C++23) (exposition only*)_

## Parameters
- `current`: the iterator to current element in adapted view

## Return value
An iterator to the next chunk, as described above.
