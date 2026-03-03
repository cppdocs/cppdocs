---
title: "deduction guides for std::ranges::subrange"
source_path: "cpp/ranges/subrange/deduction_guides"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

These [deduction guides](/cpp/language/ctad/) are provided for [std::ranges::subrange](/cpp/ranges/subrange/).

## Declarations
```cpp
template< std::input_or_output_iterator I, std::sentinel_for<I> S >
subrange(I, S) -> subrange<I, S>;
```
_(since C++20)_

```cpp
template< std::input_or_output_iterator I, std::sentinel_for<I> S >
subrange(I, S, /*make-unsigned-like-t*/<std::iter_difference_t<I>>) ->
subrange<I, S, ranges::subrange_kind::sized>;
```
_(since C++20)_

```cpp
template< ranges::borrowed_range<R> >
subrange(R&&) ->
subrange<ranges::iterator_t<R>, ranges::sentinel_t<R>,
(ranges::sized_range<R> ||
std::sized_sentinel_for<ranges::sentinel_t<R>,
ranges::iterator_t<R>>) ?
ranges::subrange_kind::sized : ranges::subrange_kind::unsized>;
```
_(since C++20)_

```cpp
template< ranges::borrowed_range<R> >
subrange(R&&, /*make-unsigned-like-t*/<ranges::range_difference_t<R>>) ->
subrange<ranges::iterator_t<R>, ranges::sentinel_t<R>,
ranges::subrange_kind::sized>;
```
_(since C++20)_

## Notes
While constructing the subrange object,

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3404 | C++20 | meaningless deduction guides from pair-like types were provided | removed |
