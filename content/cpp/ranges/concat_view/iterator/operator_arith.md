---
title: "std::ranges::concat_view<Views...>::iterator<Const>::operator++,--,+=,-="
source_path: "cpp/ranges/concat_view/iterator/operator"
category: "ranges"
since: "C++26"
---

Increments or decrements the [iterator](/cpp/ranges/concat_view/iterator/).

## Declarations
```cpp
constexpr /*iterator*/& operator++();
```
_(since C++26)_

```cpp
constexpr void operator++( int );
```
_(since C++26)_

```cpp
constexpr /*iterator*/ operator++( int )
requires /*all-forward*/<Const, Views...>;
```
_(since C++26)_

```cpp
constexpr /*iterator*/& operator--()
requires /*concat-is-bidirectional*/<Const, Views...>;
```
_(since C++26)_

```cpp
constexpr /*iterator*/ operator--( int )
requires /*concat-is-bidirectional*/<Const, Views...>;
```
_(since C++26)_

```cpp
constexpr /*iterator*/& operator+=( difference_type n )
requires /*concat-is-random-access*/<Const, Views...>;
```
_(since C++26)_

```cpp
constexpr /*iterator*/& operator-=( difference_type n )
requires /*concat-is-random-access*/<Const, Views...>;
```
_(since C++26)_

## Parameters
- `n`: position relative to current location

## Return value
As described above.

## Example
This section is incompleteReason: no example
