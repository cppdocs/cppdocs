---
title: "operator==(ranges::chunk_view::inner-iterator)"
source_path: "cpp/ranges/chunk_view/inner_iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the [iterator](/cpp/ranges/chunk_view/inner_iterator/) and the [sentinel](/cpp/iterator/default_sentinel/).

## Declarations
```cpp
friend constexpr bool operator==( const /*inner-iterator*/& x,
std::default_sentinel_t );
```
_(since C++23)_

## Parameters
- `x`: iterator to compare

## Return value
The result of comparison.
