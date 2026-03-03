---
title: "std::ranges::zip_transform_view<F,Views...>::iterator<Const>::operator++,--,+=,-="
source_path: "cpp/ranges/zip_transform_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Increments or decrements the [iterator](/cpp/ranges/zip_transform_view/iterator/).

## Declarations
```cpp
constexpr /*iterator*/& operator++();
```
_(since C++23)_

```cpp
constexpr void operator++( int );
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator++( int )
requires ranges::forward_range<Base>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator--()
requires ranges::bidirectional_range<Base>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator--( int )
requires ranges::bidirectional_range<Base>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator+=( difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator-=( difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Example
This section is incompleteReason: no example
