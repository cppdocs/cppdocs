---
title: "std::ranges::slide_view<V>::iterator<Const>::operator++,--,+=,-="
source_path: "cpp/ranges/slide_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Advances or decrements the [iterator](/cpp/ranges/slide_view/iterator/iterator/).

## Declarations
```cpp
constexpr /*iterator*/& operator++();
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator++( int );
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

## See also
- [operator+operator-](/cpp/ranges/slide_view/iterator/operator_arith2/)
