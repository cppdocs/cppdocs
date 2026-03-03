---
title: "std::ranges::transform_view<V,F>::iterator<Const>::operator++,--,+=,-="
source_path: "cpp/ranges/transform_view/iterator/operator"
category: "ranges"
since: "C++20"
---

Increments or decrements the iterator.

## Declarations
```cpp
constexpr /*iterator*/& operator++();
```
_(since C++20)_

```cpp
constexpr void operator++( int );
```
_(since C++20)_

```cpp
constexpr /*iterator*/ operator++( int )
requires ranges::forward_range<Base>;
```
_(since C++20)_

```cpp
constexpr /*iterator*/& operator--()
requires ranges::bidirectional_range<Base>;
```
_(since C++20)_

```cpp
constexpr /*iterator*/ operator--( int )
requires ranges::bidirectional_range<Base>;
```
_(since C++20)_

```cpp
constexpr /*iterator*/& operator+=( difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++20)_

```cpp
constexpr /*iterator*/& operator-=( difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++20)_

## Parameters
- `n`: position relative to current location
