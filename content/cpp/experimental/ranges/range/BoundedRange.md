---
title: "std::experimental::ranges::BoundedRange"
source_path: "cpp/experimental/ranges/range/BoundedRange"
header: "<experimental/ranges/range>"
category: "experimental"
---

## Declarations
```cpp
template< class T >
concept bool BoundedRange =
Range<T> &&
Same<ranges::iterator_t<T>, ranges::sentinel_t<T>>;
```
_(ranges TS)_
