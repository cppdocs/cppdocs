---
title: "std::ranges::join_view<V>::iterator<Const>::iterator"
source_path: "cpp/ranges/join_view/iterator/iterator"
category: "ranges"
since: "C++20"
---

Constructs an iterator.

## Declarations
```cpp
/*iterator*/() requires std::default_initializable<OuterIter> &&
std::default_initializable<InnerIter> = default;
```
_(since C++20)_

```cpp
constexpr /*iterator*/( Parent& parent, OuterIter outer );
```
_(since C++20)_

```cpp
constexpr /*iterator*/( /*iterator*/<!Const> i )
requires Const &&
std::convertible_to<ranges::iterator_t<V>, OuterIter> &&
std::convertible_to<ranges::iterator_t<InnerRng>, InnerIter>;
```
_(since C++20)_

## Parameters
- `parent`: a (possibly const-qualified) ranges::join_view
- `outer`: an iterator into (possibly const-qualified) ranges::iterator_t<Base>
- `i`: an /*iterator*/<false>

## Example
This section is incompleteReason: no example
