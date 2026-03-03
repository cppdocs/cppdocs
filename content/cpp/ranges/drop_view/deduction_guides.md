---
title: "deduction guides for std::ranges::drop_view"
source_path: "cpp/ranges/drop_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The [deduction guide](/cpp/language/ctad/) is provided for [std::ranges::drop_view](/cpp/ranges/drop_view/) to allow deduction from [range](/cpp/ranges/range/) and number of elements.

## Declarations
```cpp
template< class R >
drop_view( R&&, ranges::range_difference_t<R> ) -> drop_view<views::all_t<R>>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example
