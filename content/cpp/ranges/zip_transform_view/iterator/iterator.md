---
title: "std::ranges::zip_transform_view<F,Views...>::iterator<Const>::iterator"
source_path: "cpp/ranges/zip_transform_view/iterator/iterator"
category: "ranges"
since: "C++23"
---

Construct an iterator.

## Declarations
```cpp
/*iterator*/iterator() = default;
```
_(since C++23)_

```cpp
constexpr /*iterator*/( /*iterator*/<!Const> i )
requires Const &&
std::convertible_to</*ziperator*/<false>, /*ziperator*/<Const>>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/( Parent& parent, /*ziperator*/<Const> inner );
```
_(exposition only*)_

## Parameters
- `i`: an /*iterator*/<false>
- `parent`: a (possibly const-qualified) ranges::zip_transform_view
- `inner`: an iterator of type ziperator<Const>

## Example
This section is incompleteReason: no example
