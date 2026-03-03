---
title: "operator==(ranges::join_with_view::iterator, ranges::join_with_view::sentinel)"
source_path: "cpp/ranges/join_with_view/sentinel/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterator of x with the underlying sentinel of y. The comparison returns true if the underlying outer iterator stored in x is the end iterator.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/<Const>& x, const /*sentinel*/& y );
```
_(since C++23)_

## Parameters
- `x`: iterator to compare
- `y`: sentinel to compare

## Return value
x.outer_it_ == y.end_, where outer_it_ denotes the underlying outer iterator, end_ denotes the underlying sentinel.

## Example
This section is incompleteReason: no example
