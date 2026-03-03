---
title: "deduction guides for std::ranges::concat_view"
source_path: "cpp/ranges/concat_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++26"
---

The [deduction guide](/cpp/language/ctad/) is provided for [concat_view](/cpp/ranges/concat_view/) to allow deduction from [ranges](/cpp/ranges/range/).

## Declarations
```cpp
template< class... Rs >
concat_view( Rs&&... ) -> concat_view<views::all_t<Rs>...>;
```
_(since C++26)_

## Example
This section is incompleteReason: no example
