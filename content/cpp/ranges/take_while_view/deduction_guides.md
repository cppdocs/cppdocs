---
title: "deduction guides for std::ranges::take_while_view"
source_path: "cpp/ranges/take_while_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The [deduction guide](/cpp/language/ctad/) is provided for [std::ranges::take_while_view](/cpp/ranges/take_while_view/) to allow deduction from [range](/cpp/ranges/range/) and predicate.

## Declarations
```cpp
template< class R, class Pred >
take_while_view( R&&, Pred ) -> take_while_view<views::all_t<R>, Pred>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example
