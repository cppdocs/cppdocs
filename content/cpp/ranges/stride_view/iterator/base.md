---
title: "std::ranges::stride_view<V>::iterator<Const>::base"
source_path: "cpp/ranges/stride_view/iterator/base"
category: "ranges"
since: "C++23"
---

Returns the underlying iterator. Let [current_](/cpp/ranges/stride_view/iterator/#Data_members) be the underlying iterator.

## Declarations
```cpp
constexpr ranges::iterator_t<Base> base() &&;
```
_(since C++23)_

```cpp
constexpr const ranges::iterator_t<Base>& base() const& noexcept;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
