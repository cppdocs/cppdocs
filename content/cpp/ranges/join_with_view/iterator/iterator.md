---
title: "std::ranges::join_with_view<V,Pattern>::iterator<Const>::iterator"
source_path: "cpp/ranges/join_with_view/iterator/iterator"
category: "ranges"
since: "C++23"
---

Construct an iterator. Overloads (3,4) are called by [begin()](/cpp/ranges/join_with_view/begin/) and [end()](/cpp/ranges/join_with_view/end/) of ranges::join_with_view.

## Declarations
```cpp
/*iterator*/() = default;
```
_(since C++23)_

```cpp
constexpr /*iterator*/( /*iterator*/<!Const> i )
requires Const &&
std::convertible_to<ranges::iterator_t<V>, /*OuterIter*/> &&
std::convertible_to<ranges::iterator_t</*InnerRng*/>,
/*InnerIter*/> &&
std::convertible_to<ranges::iterator_t<Pattern>, /*PatternIter*/>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/( /*Parent*/& parent, /*OuterIter*/ outer )
requires std::forward_range</*Base*/>;
```
_(since C++23) (exposition only*)_

```cpp
constexpr explicit /*iterator*/( /*Parent*/ parent )
requires (!std::forward_range</*Base*/>);
```
_(since C++23) (exposition only*)_

## Parameters
- `i`: a mutable iterator
- `parent`: a std::ranges::join_with_view object
- `outer`: an iterator into the underlying range of parent

## Example
This section is incompleteReason: no example
