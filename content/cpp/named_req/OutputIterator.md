---
title: "C++ named requirements: LegacyOutputIterator"
source_path: "cpp/named_req/OutputIterator"
category: "named_req"
---

A LegacyOutputIterator is a [LegacyIterator](/cpp/named_req/iterator/) that can write to the pointed-to element.

## Notes
The only valid use of operator* with an output iterator is on the left of an assignment: operator* may return a proxy object, which defines a member operator= (which may be a template).

Equality and inequality may not be defined for output iterators. Even if an operator== is defined, x == y need not imply ++x == ++y.

Assignment through the same value of an output iterator happens only once: algorithms on output iterators must be single-pass algorithms.

Assignment through an output iterator is expected to alternate with incrementing. Double-increment is undefined behavior (C++ standard currently claims that double increment is supported, contrary to the STL documentation; this is [LWG issue 2035](https://cplusplus.github.io/LWG/issue2035)).

Pure output-only iterator is allowed to declare its iterator_traits<X>::value_type, iterator_traits<X>::difference_type, iterator_traits<X>::pointer, and iterator_traits<X>::reference to be void (and iterators such as [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/) do just thatexcept for difference_type, which is now defined to satisfy [std::output_iterator](/cpp/iterator/output_iterator/)(since C++20)).

## See also
- [output_iterator](/cpp/iterator/output_iterator/)
- [Iterator library](/cpp/iterator/)
