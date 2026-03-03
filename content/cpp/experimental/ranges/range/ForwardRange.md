---
title: "std::experimental::ranges::ForwardRange"
source_path: "cpp/experimental/ranges/range/ForwardRange"
header: "<experimental/ranges/range>"
category: "experimental"
---

## Declarations
```cpp
template< class T >
concept bool ForwardRange =
InputRange<T> && ForwardIterator<ranges::iterator_t<T>>;
```
_(ranges TS)_
