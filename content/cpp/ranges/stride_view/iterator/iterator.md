---
title: "std::ranges::stride_view<V>::iterator<Const>::iterator"
source_path: "cpp/ranges/stride_view/iterator/iterator"
category: "ranges"
since: "C++23"
---

Constructs an [iterator](/cpp/ranges/stride_view/iterator/).

## Declarations
```cpp
/*iterator*/()
requires std::default_initializable<ranges::iterator_t<Base>> = default;
```
_(since C++23)_

```cpp
constexpr /*iterator*/( /*iterator*/<!Const> i )
requires Const and
std::convertible_to<ranges::iterator_t<V>, ranges::iterator_t<Base>> and
std::convertible_to<ranges::sentinel_t<V>, ranges::sentinel_t<Base>>;
```
_(since C++23)_

```cpp
private:
constexpr /*iterator*/( /*Parent*/& parent,
ranges::iterator_t<Base> current,
ranges::range_difference_t<Base> missing = 0 );
```
_(exposition only*)_

## Parameters
- `i`: an /*iterator*/<false>

## Example
This section is incompleteReason: no example
