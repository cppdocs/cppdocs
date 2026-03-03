---
title: "deduction guides for std::ranges::take_view"
source_path: "cpp/ranges/take_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The [deduction guide](/cpp/language/ctad/) is provided for [std::ranges::take_view](/cpp/ranges/take_view/) to allow deduction from [range](/cpp/ranges/range/) and number of elements.

## Declarations
```cpp
template< class R >
take_view( R&&, ranges::range_difference_t<R> ) -> take_view<views::all_t<R>>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3447 | C++20 | the template parameter R is constrained with range | R is unconstrained(but range_difference_t requires range) |
