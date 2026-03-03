---
title: "operator==(ranges::take_while_view::sentinel)"
source_path: "cpp/ranges/take_while_view/sentinel/operator_cmp"
category: "ranges"
since: "C++20"
---

Compares a take_while_view::/*sentinel*/ with an iterator into (possibly const-qualified) view V. The iterator is typically obtained from a call to [take_while_view::begin](/cpp/ranges/take_while_view/begin/).

## Declarations
```cpp
friend constexpr bool operator==( const ranges::iterator_t<Base>& x,
const /*sentinel*/& y );
```
_(since C++20)_

## Parameters
- `x`: iterator to compare
- `y`: sentinel to compare

## Return value
y.end_ == x || ![std::invoke](/cpp/utility/functional/invoke/)(*y.pred_, *x), where end_ denotes the stored sentinel and pred_ denotes the stored pointer to predicate.

## Example
This section is incompleteReason: no example
