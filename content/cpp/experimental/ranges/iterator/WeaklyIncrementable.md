---
title: "std::experimental::ranges::WeaklyIncrementable"
source_path: "cpp/experimental/ranges/iterator/WeaklyIncrementable"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The concept WeaklyIncrementable<I> specifies the requirements on a type that can be incremented (with the pre- and post-increment operators). The increment operations need not be equality-preserving, and the type need not be [EqualityComparable](/cpp/experimental/ranges/concepts/equalitycomparable/).

## Declarations
```cpp
template< class I >
concept bool WeaklyIncrementable =
Semiregular<I> &&
requires(I i) {
typename ranges::difference_type_t<I>;
requires SignedIntegral<ranges::difference_type_t<I>>;
{ ++i } -> Same<I>&; /* not required to be equality preserving */
i++; /* not required to be equality preserving */
};
```
_(ranges TS)_

## Notes
For WeaklyIncrementable types, a equals b does not imply that ++a equals ++b. Algorithms on such types should be single pass and never attempt to pass through the same value twice.
