---
title: "std::ranges::elements_view<V,N>::begin"
source_path: "cpp/ranges/elements_view/begin"
category: "ranges"
since: "C++20"
---

Returns an [iterator](/cpp/ranges/elements_view/iterator/) to the first element of the elements_view.

## Declarations
```cpp
constexpr auto begin() requires (!/*simple-view*/<V>);
```
_(since C++20)_

```cpp
constexpr auto begin() const requires ranges::range<const V>;
```
_(since C++20)_

## Return value
Iterator to the first element.

## Example
This section is incompleteReason: no example

## See also
- [end](/cpp/ranges/elements_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
