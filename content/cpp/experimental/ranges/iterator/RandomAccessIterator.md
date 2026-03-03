---
title: "std::experimental::ranges::RandomAccessIterator"
source_path: "cpp/experimental/ranges/iterator/RandomAccessIterator"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The concept RandomAccessIterator<I> refines [BidirectionalIterator](/cpp/experimental/ranges/iterator/bidirectionaliterator/) by adding support for constant time advancement with the +=, +, -=, and - operators, constant time computation of distance with -, and array notation with subscripting.

## Declarations
```cpp
template< class I >
concept bool RandomAccessIterator =
BidirectionalIterator<I> &&
DerivedFrom<ranges::iterator_category_t<I>, ranges::random_access_iterator_tag> &&
StrictTotallyOrdered<I> &&
SizedSentinel<I, I> &&
requires(I i, const I j, const ranges::difference_type_t<I> n) {
{ i += n } -> Same<I>&;
{ j + n } -> Same<I>&&;
{ n + j } -> Same<I>&&;
{ i -= n } -> Same<I>&;
{ j - n } -> Same<I>&&;
j[n];
requires Same<decltype(j[n]), ranges::reference_t<I>>;
};
```
_(ranges TS)_
