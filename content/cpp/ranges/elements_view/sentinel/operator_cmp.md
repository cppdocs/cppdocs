---
title: "operator==(ranges::elements_view::sentinel)"
source_path: "cpp/ranges/elements_view/sentinel/operator_cmp"
category: "ranges"
since: "C++20"
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
_(since C++20)_

## Parameters
- `x`: iterator to compare
- `y`: sentinel to compare

## Return value
x.base() == y.base().

## Example
This section is incompleteReason: no example
