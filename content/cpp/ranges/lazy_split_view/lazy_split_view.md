---
title: "std::ranges::lazy_split_view<V,Pattern>::lazy_split_view"
source_path: "cpp/ranges/lazy_split_view/lazy_split_view"
category: "ranges"
since: "C++20"
---

Constructs a lazy_split_view.

## Declarations
```cpp
lazy_split_view()
requires std::default_initializable<V> &&
std::default_initializable<Pattern> = default;
```
_(since C++20)_

```cpp
constexpr explicit lazy_split_view( V base, Pattern pattern );
```
_(since C++20)_

```cpp
template< ranges::input_range R >
requires std::constructible_from<V, views::all_t<R>> &&
std::constructible_from<Pattern, ranges::single_view<
ranges::range_value_t<R>>>
constexpr explicit lazy_split_view( R&& r, ranges::range_value_t<R> e );
```
_(since C++20)_

## Parameters
- `base`: the underlying view to be split
- `pattern`: a view to be used as the delimiter
- `e`: an element to be used as the delimiter

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3714(P2711R1) | C++20 | the multi-parameter constructor (2) was not explicit | made explicit |
