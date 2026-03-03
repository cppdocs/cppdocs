---
title: "std::ranges::join_with_view<V,Pattern>::join_with_view"
source_path: "cpp/ranges/join_with_view/join_with_view"
category: "ranges"
since: "C++23"
---

Constructs a join_with_view, initializes the underlying view [base_](/cpp/ranges/join_with_view/#base) and the stored pattern [pattern_](/cpp/ranges/join_with_view/#pattern) ﻿.

## Declarations
```cpp
join_with_view()
requires std::default_initializable<V> &&
std::default_initializable<Pattern> = default;
```
_(since C++23)_

```cpp
constexpr explicit join_with_view( V base, Pattern pattern );
```
_(since C++23)_

```cpp
template< ranges::input_range R >
requires std::constructible_from<V, views::all_t<R>> &&
std::constructible_from
<Pattern, ranges::single_view
<ranges::range_value_t</*InnerRng*/>>>
constexpr explicit join_with_view
( R&& r, ranges::range_value_t</*InnerRng*/> e );
```
_(since C++23)_

## Parameters
- `base`: a view of ranges to be flattened
- `pattern`: view to be used as the delimiter
- `e`: element to be used as the delimiter

## Example
This section is incompleteReason: no example
