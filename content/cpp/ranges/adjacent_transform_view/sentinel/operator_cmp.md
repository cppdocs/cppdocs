---
title: "operator==(ranges::adjacent_transform_view::sentinel)"
source_path: "cpp/ranges/adjacent_transform_view/sentinel/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares the underlying iterator of x with the underlying sentinel of y.

## Declarations
```cpp
template< bool OtherConst >
requires std::sentinel_for</*inner-sentinel*/<Const>,
/*inner-iterator*/<OtherConst>>
friend constexpr bool operator==( const /*iterator*/<OtherConst>& x,
const /*sentinel*/& y );
```
_(since C++23)_

## Parameters
- `x`: an iterator to compare
- `y`: a sentinel to compare

## Return value
The result of comparison.

## Example
This section is incompleteReason: no example
