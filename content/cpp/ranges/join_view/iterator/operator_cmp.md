---
title: "operator==(ranges::join_view::iterator, ranges::join_view::iterator)"
source_path: "cpp/ranges/join_view/iterator/operator_cmp"
category: "ranges"
since: "C++20"
---

Compares the underlying iterators.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/& x, const /*iterator*/& y )
requires
/*ref-is-glvalue*/ &&
std::equality_comparable<ranges::iterator_t<Base>> &&
std::equality_comparable<ranges::iterator_t<ranges::range_reference_t<Base>>>;
```
_(since C++20)_

## Parameters
- `x, y`: iterators to compare

## Return value
Result of comparison.

## Example
This section is incompleteReason: no example

## See also
- [operator==](/cpp/ranges/join_view/sentinel/operator_cmp/)
- [join_view::begin](/cpp/ranges/join_view/begin/)
