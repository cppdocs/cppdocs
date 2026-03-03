---
title: "deduction guides for std::ranges::slide_view"
source_path: "cpp/ranges/slide_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

The [deduction guide](/cpp/language/ctad/) is provided for std::ranges::slide_view to allow deduction from [range](/cpp/ranges/range/) and number of elements.

## Declarations
```cpp
template< class R >
slide_view( R&&, ranges::range_difference_t<R> ) -> slide_view<views::all_t<R>>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
