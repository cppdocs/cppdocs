---
title: "std::ranges::enumerate_view<V>::iterator<Const>::base"
source_path: "cpp/ranges/enumerate_view/iterator/base"
category: "ranges"
since: "C++23"
---

Returns the underlying iterator. Let [current_](/cpp/ranges/enumerate_view/iterator/#Data_members) be the underlying iterator.

## Declarations
```cpp
constexpr const ranges::iterator_t<Base>& base() const& noexcept;
```
_(since C++23)_

```cpp
constexpr ranges::iterator_t<Base> base() &&;
```
_(since C++23)_

## Return value
An iterator to the current element in enumerate_view.

## Example
This section is incompleteReason: no example
