---
title: "std::experimental::ranges::RandomAccessRange"
source_path: "cpp/experimental/ranges/range/RandomAccessRange"
header: "<experimental/ranges/range>"
category: "experimental"
---

## Declarations
```cpp
template< class T >
concept bool RandomAccessRange =
BidirectionalRange<T> &&
RandomAccessIterator<ranges::iterator_t<T>>;
```
_(ranges TS)_
