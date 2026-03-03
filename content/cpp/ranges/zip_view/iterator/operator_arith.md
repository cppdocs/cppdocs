---
title: "std::ranges::zip_view<Views...>::iterator<Const>::operator++,--,+=,-="
source_path: "cpp/ranges/zip_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Increments or decrements each of the underlying is_... iterators in the underlying tuple-like object [current_](/cpp/ranges/zip_view/iterator/#Data_members).

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
requires /*all-forward*/<Const, Views...>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator--()
requires /*all-bidirectional*/<Const, Views...>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator--( int )
requires /*all-bidirectional*/<Const, Views...>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator+=( difference_type n )
requires /*all-random-access*/<Const, Views...>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator-=( difference_type n )
requires /*all-random-access*/<Const, Views...>;
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Example
This section is incompleteReason: no example
