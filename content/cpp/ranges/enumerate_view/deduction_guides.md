---
title: "deduction guides for std::ranges::enumerate_view"
source_path: "cpp/ranges/enumerate_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

The [deduction guide](/cpp/language/ctad/) is provided for std::ranges::enumerate_view to allow deduction from [range](/cpp/ranges/range/).

## Declarations
```cpp
template< class R >
enumerate_view( R&& ) -> enumerate_view<views::all_t<R>>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
