---
title: "operator==(ranges::adjacent_view::iterator, ranges::adjacent_view::sentinel)"
source_path: "cpp/ranges/adjacent_view/sentinel/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterator of x with the underlying sentinel of y.

## Declarations
```cpp
template< bool OtherConst >
requires std::sentinel_for<ranges::sentinel_t<Base>,
ranges::iterator_t</*maybe-const*/<OtherConst, V>>>
friend constexpr bool operator==( const /*iterator*/<OtherConst>& x,
const /*sentinel*/& y );
```
_(since C++23)_

## Parameters
- `x`: iterator to compare
- `y`: sentinel to compare

## Return value
true if the underlying iterator stored in x is the end iterator.

## Example
This section is incompleteReason: no example
