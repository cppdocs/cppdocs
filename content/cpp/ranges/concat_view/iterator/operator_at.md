---
title: "std::ranges::concat_view<Views...>::iterator<Const>::operator[]"
source_path: "cpp/ranges/concat_view/iterator/operator_at"
category: "ranges"
since: "C++26"
---

Returns a reference to an element at specified relative location.

## Declarations
```cpp
constexpr decltype(auto) operator[]( difference_type pos ) const
requires /*concat-is-random-access*/<Const, Views...>;
```
_(since C++26)_

## Parameters
- `pos`: position relative to current location

## Return value
*((*this) + pos)

## Example
This section is incompleteReason: no example

## See also
- [operator*](/cpp/ranges/concat_view/iterator/operator/)
