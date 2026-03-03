---
title: "deduction guides for std::ranges::join_view"
source_path: "cpp/ranges/join_view/deduction_guides"
category: "ranges"
since: "C++20"
---

The [deduction guide](/cpp/language/ctad/) is provided for std::ranges::join_view to allow deduction from [range](/cpp/ranges/range/).

## Declarations
```cpp
template<class R>
explicit join_view(R&&) -> join_view<views::all_t<R>>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example
