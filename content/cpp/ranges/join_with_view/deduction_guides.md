---
title: "deduction guides for std::ranges::join_with_view"
source_path: "cpp/ranges/join_with_view/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

These [deduction guides](/cpp/language/ctad/) are provided for [join_with_view](/cpp/ranges/join_with_view/) to allow deduction from a range and a delimiter.

## Declarations
```cpp
template< class R, class P >
join_with_view( R&&, P&& ) -> join_with_view<views::all_t<R>, views::all_t<P>>;
```
_(since C++23)_

```cpp
template< class R >
join_with_view( R&&, ranges::range_value_t<ranges::range_reference_t<R>> )
-> join_with_view<views::all_t<R>,
ranges::single_view<
ranges::range_value_t<ranges::range_reference_t<R>>>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
