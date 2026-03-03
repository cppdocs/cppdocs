---
title: "std::experimental::ranges::Mergeable"
source_path: "cpp/experimental/ranges/iterator/Mergeable"
category: "experimental"
---

The Mergeable concept specifies the common requirements of algorithms that merge sorted sequences into an output sequence by copying the elements (for example, ).

## Declarations
```cpp
template< class I1, class I2, class Out, class R = ranges::less<>,
class P1 = ranges::identity, class P2 = ranges::identity >
concept bool Mergeable =
InputIterator<I1> &&
InputIterator<I2> &&
WeaklyIncrementable<Out> &&
IndirectlyCopyable<I1, Out> &&
IndirectlyCopyable<I2, Out> &&
IndirectStrictWeakOrder<R, ranges::projected<I1, P1>, ranges::projected<I2, P2>>;
```
_(ranges TS)_
