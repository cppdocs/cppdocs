---
title: "std::experimental::ranges::OutputRange"
source_path: "cpp/experimental/ranges/range/OutputRange"
header: "<experimental/ranges/range>"
category: "experimental"
---

## Declarations
```cpp
template< class R, class T >
concept bool OutputRange =
Range<R> && OutputIterator<ranges::iterator_t<R>, T>;
```
_(ranges TS)_
