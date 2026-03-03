---
title: "std::experimental::ranges::Sentinel"
source_path: "cpp/experimental/ranges/iterator/Sentinel"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The Sentinel concept specifies the relationship between an [Iterator](/cpp/experimental/ranges/iterator/iterator/) type and a [Semiregular](/cpp/experimental/ranges/concepts/semiregular/) type whose values denote a range.

## Declarations
```cpp
template< class S, class I >
concept bool Sentinel =
Semiregular<S> && Iterator<I> &&
WeaklyEqualityComparableWith<S, I>;
```
_(ranges TS)_
