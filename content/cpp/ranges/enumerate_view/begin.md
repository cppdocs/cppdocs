---
title: "std::ranges::enumerate_view<V>::begin"
source_path: "cpp/ranges/enumerate_view/begin"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/enumerate_view/iterator/) to the first element of the enumerate_view.

## Declarations
```cpp
constexpr auto begin() requires (!/*simple-view*/<V>);
```
_(since C++23)_

```cpp
constexpr auto begin() const requires /*range-with-movable-references*/<const V>;
```
_(since C++23)_

## Return value
Iterator to the first element.

## Example
This section is incompleteReason: no example

## See also
- [end](/cpp/ranges/enumerate_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
