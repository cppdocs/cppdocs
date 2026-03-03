---
title: "std::ranges::split_view<V,Pattern>::find_next"
source_path: "cpp/ranges/split_view/find_next"
category: "ranges"
---

Searches for the next occurrence of pattern in the underlying view. Equivalent to:

## Declarations
```cpp
constexpr ranges::subrange<ranges::iterator_t<V>>
/*find_next*/( ranges::iterator_t<V> it );
```
_(exposition only*)_

## Parameters
- `it`: an iterator to the position at which to start the search

## Return value
A subrange that represents the next position of the pattern, if it was found. An empty subrange otherwise.
