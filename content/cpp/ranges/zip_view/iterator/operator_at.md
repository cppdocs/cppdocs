---
title: "std::ranges::zip_view<Views...>::iterator<Const>::operator[]"
source_path: "cpp/ranges/zip_view/iterator/operator_at"
category: "ranges"
since: "C++23"
---

Obtains a [std::tuple](/cpp/utility/tuple/) that consists of underlying pointed-to elements at given offset relative to current location.

## Declarations
```cpp
constexpr auto operator[]( difference_type n ) const
requires /*all-random-access*/<Const, Views...>;
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Return value
The obtained tuple-like element.

## Example
This section is incompleteReason: no example
