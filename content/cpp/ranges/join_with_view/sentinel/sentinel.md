---
title: "std::ranges::join_with_view<V,Pattern>::sentinel<Const>::sentinel"
source_path: "cpp/ranges/join_with_view/sentinel/sentinel"
category: "ranges"
since: "C++23"
---

Constructs a sentinel. Overload (3) is called by [end()](/cpp/ranges/join_with_view/end/) of ranges::join_with_view.

## Declarations
```cpp
/*sentinel*/() = default;
```
_(since C++23)_

```cpp
constexpr /*sentinel*/( /*sentinel*/<!Const> i )
requires Const && std::convertible_to<ranges::sentinel_t<V>,
ranges::sentinel_t<const V>>;
```
_(since C++23)_

```cpp
constexpr explicit /*sentinel*/ ( /*Parent*/& parent );
```
_(since C++23) (exposition only*)_

## Parameters
- `i`: a sentinel corresponding to a mutable iterator
- `parent`: a std::ranges::join_with_view object

## Example
This section is incompleteReason: no example
