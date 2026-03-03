---
title: "std::experimental::ranges::BidirectionalIterator"
source_path: "cpp/experimental/ranges/iterator/BidirectionalIterator"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The concept BidirectionalIterator<I> refines [ForwardIterator](/cpp/experimental/ranges/iterator/forwarditerator/) by adding the ability to move an iterator backward.

## Declarations
```cpp
template< class I >
concept bool BidirectionalIterator =
ForwardIterator<I> &&
DerivedFrom<ranges::iterator_category_t<I>, ranges::bidirectional_iterator_tag> &&
requires(I i) {
{ --i } -> Same<I>&;
{ i-- } -> Same<I>&&;
};
```
_(ranges TS)_
