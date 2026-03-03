---
title: "std::ranges::chunk_view<V>::iterator<Const>::iterator"
source_path: "cpp/ranges/chunk_view/iterator/iterator"
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
requires
Const and
std::convertible_to<ranges::iterator_t<V>, ranges::iterator_t<Base>> and
std::convertible_to<ranges::sentinel_t<V>, ranges::sentinel_t<Base>>;
```
_(since C++23)_

```cpp
private:
constexpr /*iterator*/( Parent* parent,
ranges::iterator_t<Base> current,
ranges::range_difference_t<Base> missing = 0 );
```
_(exposition only*)_

## Parameters
- `i`: an /*iterator*/<false>
- `parent`: a pointer to owning chunk_view
- `current`: an iterator to the begin of current chunk
- `missing`: a difference between expected (n_) and actual size of current chunk

## Example
This section is incompleteReason: no example
