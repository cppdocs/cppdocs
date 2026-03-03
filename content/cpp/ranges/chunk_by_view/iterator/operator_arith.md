---
title: "std::ranges::chunk_by_view<V,Pred>::iterator::operator++,--"
source_path: "cpp/ranges/chunk_by_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Increments or decrements the [iterator](/cpp/ranges/chunk_by_view/iterator/iterator/).

## Declarations
```cpp
constexpr /*iterator*/& operator++();
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator++(int);
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator--() requires ranges::bidirectional_range<V>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator--(int) requires ranges::bidirectional_range<V>;
```
_(since C++23)_
