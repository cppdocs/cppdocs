---
title: "std::experimental::ranges::ForwardIterator"
source_path: "cpp/experimental/ranges/iterator/ForwardIterator"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The concept ForwardIterator<I> refines [InputIterator](/cpp/experimental/ranges/iterator/inputiterator/) by adding equality comparison and the multi-pass guarantee.

## Declarations
```cpp
template< class I >
concept bool ForwardIterator =
InputIterator<I> &&
DerivedFrom<ranges::iterator_category_t<I>, ranges::forward_iterator_tag> &&
Incrementable<I> &&
Sentinel<I, I>;
```
_(ranges TS)_

## Notes
A forward iterator cannot be "stashing": it cannot return a reference to an object within itself, because such references would be invalidated by the destruction of the forward iterator.
