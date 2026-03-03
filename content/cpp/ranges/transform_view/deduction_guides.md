---
title: "deduction guides for std::ranges::transform_view"
source_path: "cpp/ranges/transform_view/deduction_guides"
category: "ranges"
since: "C++20"
---

The [deduction guide](/cpp/language/ctad/) is provided for [std::ranges::transform_view](/cpp/ranges/transform_view/) to allow deduction from [range](/cpp/ranges/range/) and transformation function.

## Declarations
```cpp
template< class R, class F >
transform_view( R&&, F ) -> transform_view<views::all_t<R>, F>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example
