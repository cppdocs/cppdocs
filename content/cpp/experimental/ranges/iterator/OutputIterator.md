---
title: "std::experimental::ranges::OutputIterator"
source_path: "cpp/experimental/ranges/iterator/OutputIterator"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The OutputIterator concept is a refinement of [Iterator](/cpp/experimental/ranges/iterator/iterator/), adding the requirement that it can be used to write values of values of type and value category encoded by T (via [Writable](/cpp/experimental/ranges/iterator/writable/)). [EqualityComparable](/cpp/experimental/ranges/concepts/equalitycomparable/) is not required.

## Declarations
```cpp
template< class I, class T >
concept bool OutputIterator =
Iterator<I> && Writable<I, T> &&
requires(I i, T&& t) {
*i++ = std::forward<T>(t); // not required to be equality preserving
};
```
_(ranges TS)_

## Notes
Unlike the output iterator requirements in the C++ standard, OutputIterator in the Ranges TS does not require that the iterator category tag be defined.

Algorithms on output iterators should be single pass.
