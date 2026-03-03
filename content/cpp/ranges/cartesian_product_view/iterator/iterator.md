---
title: "std::ranges::cartesian_product_view<First, Vs...>::iterator<Const>::iterator"
source_path: "cpp/ranges/cartesian_product_view/iterator/iterator"
category: "ranges"
since: "C++23"
---

Construct an iterator.

## Declarations
```cpp
/*iterator*/() = default;
```
_(since C++23)_

```cpp
constexpr /*iterator*/( /*iterator*/<!Const> i )
requires Const && (
std::convertible_to<ranges::iterator_t<First>, ranges::iterator_t<const First>>
&& ... &&
std::convertible_to<ranges::iterator_t<Vs>, ranges::iterator_t<const Vs>>
);
```
_(since C++23)_

```cpp
private:
constexpr /*iterator*/(
/*Parent*/& parent,
std::tuple<ranges::iterator_t</*maybe-const*/<Const, First>>,
ranges::iterator_t</*maybe-const*/<Const, Vs>>...> current );
```
_(exposition only*)_

## Parameters
- `i`: an /*iterator*/<false>

## Example
This section is incompleteReason: no example
