---
title: "std::experimental::ranges::InputRange"
source_path: "cpp/experimental/ranges/range/InputRange"
header: "<experimental/ranges/range>"
category: "experimental"
---

## Declarations
```cpp
template< class T >
concept bool InputRange =
Range<T> && InputIterator<ranges::iterator_t<T>>;
```
_(ranges TS)_
