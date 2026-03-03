---
title: "std::ranges::join_with_view<V,Pattern>::iterator<Const>::operator++,--"
source_path: "cpp/ranges/join_with_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Increments or decrements the iterator.

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
requires std::is_reference_v</*InnerBase*/> &&
ranges::forward_range</*Base*/> &&
ranges::forward_range</*InnerBase*/>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator--()
requires std::is_reference_v</*InnerBase*/> &&
ranges::bidirectional_range</*Base*/> &&
ranges::bidirectional_range</*InnerBase*/> &&
ranges::common_range</*InnerBase*/> &&
ranges::bidirectional_range</*PatternBase*/> &&
ranges::common_range</*PatternBase*/>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator--( int )
requires std::is_reference_v</*InnerBase*/> &&
ranges::bidirectional_range</*Base*/> &&
ranges::bidirectional_range</*InnerBase*/> &&
ranges::common_range</*InnerBase*/> &&
ranges::bidirectional_range</*PatternBase*/> &&
ranges::common_range</*PatternBase*/>;
```
_(since C++23)_
