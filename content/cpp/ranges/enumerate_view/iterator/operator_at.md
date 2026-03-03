---
title: "std::ranges::enumerate_view<V>::iterator<Const>::operator[]"
source_path: "cpp/ranges/enumerate_view/iterator/operator_at"
category: "ranges"
since: "C++23"
---

Returns an element at specified relative location.
Equivalent to:
return[reference-type](/cpp/ranges/enumerate_view/iterator/#Member_types)([pos_](/cpp/ranges/enumerate_view/iterator/#Data_members)+ n,[current_](/cpp/ranges/enumerate_view/iterator/#Data_members)[n]);.

## Declarations
```cpp
constexpr auto operator[]( difference_type n ) const
requires ranges::random_access_range<Base>
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Return value
The element at displacement n relative to the current location.

## Example
This section is incompleteReason: no example

## See also
- [operator*](/cpp/ranges/enumerate_view/iterator/operator/)
