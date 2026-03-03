---
title: "std::output_iterator"
source_path: "cpp/iterator/output_iterator"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The output_iterator concept is a refinement of [input_or_output_iterator](/cpp/iterator/input_or_output_iterator/), adding the requirement that it can be used to write values of type and value category encoded by T (via [indirectly_writable](/cpp/iterator/indirectly_writable/)). [equality_comparable](/cpp/concepts/equality_comparable/) is not required.

## Declarations
```cpp
template< class I, class T >
concept output_iterator =
std::input_or_output_iterator<I> &&
std::indirectly_writable<I, T> &&
requires(I i, T&& t) {
*i++ = std::forward<T>(t); /* not required to be equality-preserving */
};
```
_(since C++20)_

## Notes
Unlike the [LegacyOutputIterator](/cpp/named_req/outputiterator/) requirements, the output_iterator concept does not require that the iterator category tag be defined.

Algorithms on output iterators should be single pass.

## See also
- [input_or_output_iterator](/cpp/iterator/input_or_output_iterator/)
