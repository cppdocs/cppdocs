---
title: "std::experimental::ranges::BidirectionalRange"
source_path: "cpp/experimental/ranges/range/BidirectionalRange"
header: "<experimental/ranges/range>"
category: "experimental"
---

## Declarations
```cpp
template< class T >
concept bool BidirectionalRange =
ForwardRange<T> &&
BidirectionalIterator<ranges::iterator_t<T>>;
```
_(ranges TS)_
