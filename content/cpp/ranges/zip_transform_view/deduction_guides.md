---
title: "deduction guides for std::ranges::zip_transform_view"
source_path: "cpp/ranges/zip_transform_view/deduction_guides"
category: "ranges"
since: "C++23"
---

The [deduction guide](/cpp/language/ctad/) is provided for std::ranges::zip_transform_view to allow deduction from transformation function and [ranges](/cpp/ranges/range/).

## Declarations
```cpp
template< class F, class... Rs >
zip_transform_view( F, Rs&&... ) -> zip_transform_view<F, views::all_t<Rs>...>;
```
_(since C++23)_

## Example
This section is incompleteReason: example
