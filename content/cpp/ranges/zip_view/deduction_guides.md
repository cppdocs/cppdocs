---
title: "deduction guides for std::ranges::zip_view"
source_path: "cpp/ranges/zip_view/deduction_guides"
category: "ranges"
since: "C++23"
---

The [deduction guide](/cpp/language/ctad/) is provided for std::ranges::zip_view to allow deduction from [ranges](/cpp/ranges/range/).

## Declarations
```cpp
template< class... Rs >
zip_view( Rs&&... ) -> zip_view<views::all_t<Rs>...>;
```
_(since C++23)_

## Example
This section is incompleteReason: example
