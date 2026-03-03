---
title: "std::ranges::join_with_view<V,Pattern>::base"
source_path: "cpp/ranges/join_with_view/base"
category: "ranges"
since: "C++23"
---

Returns a copy of the underlying view.

## Declarations
```cpp
constexpr V base() const& requires std::copy_constructible<V>;
```
_(since C++23)_

```cpp
constexpr V base() &&;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
