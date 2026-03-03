---
title: "std::ranges::join_view<V>::iterator<Const>::operator++,--"
source_path: "cpp/ranges/join_view/iterator/operator"
category: "ranges"
since: "C++20"
---

Increments or decrements the underlying iterator.

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
requires /*ref-is-glvalue*/ && ranges::forward_range<Base> &&
ranges::forward_range<ranges::range_reference_t<Base>>;
```
_(since C++20)_

```cpp
constexpr iterator& operator--()
requires /*ref-is-glvalue*/ && ranges::bidirectional_range<Base> &&
ranges::bidirectional_range<ranges::range_reference_t<Base>> &&
ranges::common_range<ranges::range_reference_t<Base>>;
```
_(since C++20)_

```cpp
constexpr /*iterator*/ operator--( int )
requires /*ref-is-glvalue*/ && ranges::bidirectional_range<Base> &&
ranges::bidirectional_range<ranges::range_reference_t<Base>> &&
ranges::common_range<ranges::range_reference_t<Base>>;
```
_(since C++20)_
