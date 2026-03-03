---
title: "std::ranges::enumerate_view<V>::base"
source_path: "cpp/ranges/enumerate_view/base"
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

## Return value
A copy of the underlying view.

## Example
This section is incompleteReason: no example
