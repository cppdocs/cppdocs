---
title: "std::experimental::ranges::Permutable"
source_path: "cpp/experimental/ranges/iterator/Permutable"
category: "experimental"
---

The Permutable concept specifies the common requirements of algorithms that reorder elements in place by moving or swapping them (for example, ).

## Declarations
```cpp
template< class I >
concept bool Permutable =
ForwardIterator<I> &&
IndirectlyMovableStorable<I, I> &&
IndirectlySwappable<I, I>;
```
_(ranges TS)_
