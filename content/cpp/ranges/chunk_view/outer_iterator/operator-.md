---
title: "operator-(ranges::chunk_view::outer-iterator)"
source_path: "cpp/ranges/chunk_view/outer_iterator/operator"
category: "ranges"
since: "C++23"
---

Calculates the distance (in number of chunks) between the [iterator](/cpp/ranges/chunk_view/outer_iterator/) and [sentinel](/cpp/iterator/default_sentinel/).

## Declarations
```cpp
friend constexpr difference_type operator-( std::default_sentinel_t s,
const /*outer-iterator*/& i )
requires ranges::sized_sentinel_for<ranges::sentinel_t<V>,
ranges::iterator_t<V>>;
```
_(since C++23)_

```cpp
friend constexpr difference_type operator-( const /*outer-iterator*/& i,
std::default_sentinel_t s )
requires ranges::sized_sentinel_for<ranges::sentinel_t<V>,
ranges::iterator_t<V>>;
```
_(since C++23)_

## Parameters
- `i`: the iterator
- `s`: the sentinel

## Return value
The distance between given iterator and sentinel.

## Example
This section is incompleteReason: no example

## See also
- [operator++](/cpp/ranges/chunk_view/outer_iterator/operator_inc/)
