---
title: "std::experimental::ranges::iterator_t, std::experimental::ranges::sentinel_t"
source_path: "cpp/experimental/ranges/range/iterator_t"
header: "<experimental/ranges/range>"
category: "experimental"
---

Obtain the iterator and sentinel types of a range T.

## Declarations
```cpp
template< class T >
using iterator_t = decltype(ranges::begin(std::declval<T&>()));
```
_(ranges TS)_

```cpp
template< class T >
using sentinel_t = decltype(ranges::end(std::declval<T&>()));
```
_(ranges TS)_
