---
title: "std::ranges::take_view<V>::base"
source_path: "cpp/ranges/take_view/base"
category: "ranges"
since: "C++20"
---

Returns a copy of the underlying view.

## Declarations
```cpp
constexpr V base() const& requires std::copy_constructible<V>;
```
_(since C++20)_

```cpp
constexpr V base() &&;
```
_(since C++20)_

## Return value
A copy of the underlying view.

## Example
This section is incompleteReason: no example
