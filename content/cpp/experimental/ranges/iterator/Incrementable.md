---
title: "std::experimental::ranges::Incrementable"
source_path: "cpp/experimental/ranges/iterator/Incrementable"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The concept Incrementable<I> specifies the requirements on a type that can be incremented (with the pre- and post-increment operators). The increment operations (including those required by [WeaklyIncrementable](/cpp/experimental/ranges/iterator/weaklyincrementable/)) are required to be equality-preserving, and the type is required to be [EqualityComparable](/cpp/experimental/ranges/concepts/equalitycomparable/).

## Declarations
```cpp
template< class I >
concept bool Incrementable =
Regular<I> &&
WeaklyIncrementable<I> &&
requires(I i) {
{ i++ } -> Same<I>&&;
};
```
_(ranges TS)_

## Notes
The requirement that a equals b implies ++a equals ++b allows the use of multi-pass algorithms with Incrementable types.
