---
title: "std::experimental::ranges::Iterator"
source_path: "cpp/experimental/ranges/iterator/Iterator"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The Iterator concept forms the basis of the iterator concept taxonomy; every iterator satisfies the Iterator requirements.

## Declarations
```cpp
template< class I >
concept bool Iterator =
requires(I i) {
{ *i } -> auto&&; // Requires: i is dereferenceable
} &&
WeaklyIncrementable<I>;
```
_(ranges TS)_

## Notes
Iterator itself only specifies operations for dereferencing and incrementing an iterator. Most algorithms will require additional operations, for example:

The -> auto&& constraint implies that the result type of the deference cannot be void.
