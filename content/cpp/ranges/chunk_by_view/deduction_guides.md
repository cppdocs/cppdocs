---
title: "deduction guides for std::ranges::chunk_by_view"
source_path: "cpp/ranges/chunk_by_view/deduction_guides"
category: "ranges"
since: "C++23"
---

The [deduction guide](/cpp/language/ctad/) is provided for std::ranges::chunk_by_view to allow deduction from [range](/cpp/ranges/range/) and predicate function.

## Declarations
```cpp
template< class R, class Pred >
chunk_by_view( R&&, Pred ) -> chunk_by_view<views::all_t<R>, Pred>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
