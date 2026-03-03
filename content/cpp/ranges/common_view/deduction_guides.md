---
title: "deduction guides for std::ranges::common_view"
source_path: "cpp/ranges/common_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The [deduction guide](/cpp/language/ctad/) is provided for std::ranges::common_view to allow deduction from [range](/cpp/ranges/range/).

## Declarations
```cpp
template< class R >
common_view( R&& ) -> common_view<views::all_t<R>>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example
