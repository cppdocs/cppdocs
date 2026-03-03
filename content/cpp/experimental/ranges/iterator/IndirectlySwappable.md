---
title: "std::experimental::ranges::IndirectlySwappable"
source_path: "cpp/experimental/ranges/iterator/IndirectlySwappable"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

## Declarations
```cpp
template< class I1, class I2 = I1 >
concept bool IndirectlySwappable =
Readable<I1> && Readable<I2> &&
requires(I1&& i1, I2&& i2) {
ranges::iter_swap(std::forward<I1>(i1), std::forward<I2>(i2));
ranges::iter_swap(std::forward<I2>(i2), std::forward<I1>(i1));
ranges::iter_swap(std::forward<I1>(i1), std::forward<I1>(i1));
ranges::iter_swap(std::forward<I2>(i2), std::forward<I2>(i2));
};
```
_(ranges TS)_
