---
title: "std::ranges::elements_view<V,N>::end"
source_path: "cpp/ranges/elements_view/end"
category: "ranges"
since: "C++20"
---

Returns a [sentinel](/cpp/ranges/elements_view/sentinel/) or an [iterator](/cpp/ranges/elements_view/iterator/) representing the end of the elements_view.

## Declarations
```cpp
constexpr auto end() requires (!/*simple-view*/<V> && !ranges::common_range<V>);
```
_(since C++20)_

```cpp
constexpr auto end() requires (!/*simple-view*/<V> && ranges::common_range<V>);
```
_(since C++20)_

```cpp
constexpr auto end() const requires ranges::range<const V>;
```
_(since C++20)_

```cpp
constexpr auto end() const requires ranges::common_range<const V>;
```
_(since C++20)_

## Notes
end() returns an iterator if and only if the underlying view is a [common_range](/cpp/ranges/common_range/): elements_view<V,F> models [common_range](/cpp/ranges/common_range/) whenever V does.

## Example
This section is incompleteReason: no example

## See also
- [begin](/cpp/ranges/elements_view/begin/)
- [ranges::end](/cpp/ranges/end/)
