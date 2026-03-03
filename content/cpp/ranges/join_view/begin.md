---
title: "std::ranges::join_view<V>::begin"
source_path: "cpp/ranges/join_view/begin"
category: "ranges"
since: "C++20"
---

Returns an [iterator](/cpp/ranges/join_view/iterator/) to the first element of the join_view. Given base_ is the underlying view,

## Declarations
```cpp
constexpr auto begin();
```
_(since C++20)_

```cpp
constexpr auto begin() const
requires ranges::input_range<const V> &&
std::is_reference_v<ranges::range_reference_t<const V>>;
```
_(since C++20)_

## Return value
Iterator to the first element.

## Notes
When [ranges::range_reference_t](/cpp/ranges/range_reference_t/)<V> is not a reference type, that is, deferencing an iterator of V returns a prvalue temporary, the join_view is only an [input_range](/cpp/ranges/input_range/), in which case only single-pass iteration is supported, and repeated calls to begin() may not give meaningful results.

## Example
This section is incompleteReason: no example

## See also
- [end](/cpp/ranges/join_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
