---
title: "deduction guides for std::ranges::chunk_view"
source_path: "cpp/ranges/chunk_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

The [deduction guide](/cpp/language/ctad/) is provided for [ranges::chunk_view](/cpp/ranges/chunk_view/) only if V models the [input_range](/cpp/ranges/input_range/). This guide allows deduction from [range](/cpp/ranges/range/) and number of elements.

## Declarations
```cpp
template< class R >
chunk_view( R&&, ranges::range_difference_t<R> ) -> chunk_view<views::all_t<R>>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
