---
title: "operator==(ranges::transform_view::sentinel)"
source_path: "cpp/ranges/transform_view/sentinel/operator_cmp"
category: "ranges"
since: "C++20"
---

Compares the underlying iterator of x with the underlying sentinel of y.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/<Const>& x, const /*sentinel*/& y );
```
_(since C++20)_

## Parameters
- `x`: iterator to compare
- `y`: sentinel to compare

## Return value
x.current_ == y.end_, where current_ denotes the underlying iterator, end_ denotes the underlying sentinel.

## Example
This section is incompleteReason: no example
