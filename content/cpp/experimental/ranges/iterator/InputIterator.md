---
title: "std::experimental::ranges::InputIterator"
source_path: "cpp/experimental/ranges/iterator/InputIterator"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The InputIterator concept is a refinement of [Iterator](/cpp/experimental/ranges/iterator/iterator/), adding the requirement that the referenced values can be read (via [Readable](/cpp/experimental/ranges/iterator/readable/)) and the requirement that the iterator category tag be present.

## Declarations
```cpp
template< class I >
concept bool InputIterator =
Iterator<I> && Readable<I> &&
requires { typename ranges::iterator_category_t<I>; } &&
DerivedFrom<ranges::iterator_category_t<I>, ranges::input_iterator_tag>;
```
_(ranges TS)_

## Notes
Unlike the input iterator requirements in the C++ standard, InputIterator in the Ranges TS does not require [EqualityComparable](/cpp/experimental/ranges/concepts/equalitycomparable/).
