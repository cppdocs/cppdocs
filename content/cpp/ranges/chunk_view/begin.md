---
title: "std::ranges::chunk_view<V>::begin"
source_path: "cpp/ranges/chunk_view/begin"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/chunk_view/iterator/) to the first element of the chunk_view.

## Declarations
```cpp
V models only input_range
```

```cpp
constexpr __outer_iterator begin();
```
_(since C++23)_

```cpp
V models forward_range
```

```cpp
constexpr auto begin() requires (!__simple_view<V>);
```
_(since C++23)_

```cpp
constexpr auto begin() const requires ranges::forward_range<const V>;
```
_(since C++23)_

## Return value
An iterator to the first element of the [chunk_view](/cpp/ranges/chunk_view/), as described above.

## Example
This section is incompleteReason: no example

## See also
- [end](/cpp/ranges/chunk_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
