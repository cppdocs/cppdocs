---
title: "operator==(ranges::chunk_by_view::iterator)"
source_path: "cpp/ranges/chunk_by_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterators.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/& x, const /*iterator*/& y );
```
_(since C++23)_

```cpp
friend constexpr bool operator==( const /*iterator*/& x, std::default_sentinel_t );
```
_(since C++23)_

## Parameters
- `x, y`: iterators to compare

## Return value
The result of comparison.

## Example
This section is incompleteReason: no example
