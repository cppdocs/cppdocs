---
title: "std::ranges::adjacent_view<V,N>::iterator<Const>::iterator"
source_path: "cpp/ranges/adjacent_view/iterator/iterator"
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
ranges::convertible_to<ranges::iterator_t<V>, ranges::iterator_t<Base>>;
```
_(since C++23)_

## Parameters
- `i`: an /*iterator*/<false>

## Example
This section is incompleteReason: no example
