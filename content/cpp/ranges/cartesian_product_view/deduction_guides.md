---
title: "deduction guides for std::ranges::cartesian_product_view"
source_path: "cpp/ranges/cartesian_product_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

The [deduction guide](/cpp/language/ctad/) is provided for std::ranges::cartesian_product_view to allow deduction from [ranges](/cpp/ranges/range/).

## Declarations
```cpp
template< class... Rs >
cartesian_product_view( Rs&&... ) ->
cartesian_product_view<views::all_t<Rs>...>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
