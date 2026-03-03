---
title: "std::ranges::lazy_split_view<V,Pattern>::begin"
source_path: "cpp/ranges/lazy_split_view/begin"
category: "ranges"
since: "C++20"
---

Returns an [outer_iterator](/cpp/ranges/lazy_split_view/outer_iterator/) to the first element of the [lazy_split_view](/cpp/ranges/lazy_split_view/lazy_split_view/).

## Declarations
```cpp
constexpr auto begin();
```
_(since C++20)_

```cpp
constexpr auto begin() const
requires ranges::forward_range<V> && ranges::forward_range<const V>;
```
_(since C++20)_

## Return value
[outer_iterator](/cpp/ranges/lazy_split_view/outer_iterator/) to the first element.

## Example
This section is incompleteReason: no example

## See also
- [end](/cpp/ranges/lazy_split_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
