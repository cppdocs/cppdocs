---
title: "std::ranges::adjacent_transform_view<V,F,N>::iterator<Const>::iterator"
source_path: "cpp/ranges/adjacent_transform_view/iterator/iterator"
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
requires Const &&
std::convertible_to</*inner-iterator*/<false>, /*inner-iterator*/<Const>>;
```
_(since C++23)_

```cpp
private:
constexpr /*iterator*/( Parent& parent, /*inner-iterator*/<Const> inner );
```
_(exposition only*)_

## Parameters
- `i`: an /*iterator*/<false>
- `parent`: an owning object of type adjacent_transform_view
- `inner`: an iterator of type adjacent_transform_view::inner_iterator

## Example
This section is incompleteReason: no example
