---
title: "std::input_iterator"
source_path: "cpp/iterator/input_iterator"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The input_iterator concept is a refinement of [input_or_output_iterator](/cpp/iterator/input_or_output_iterator/), adding the requirement that the referenced values can be read (via [indirectly_readable](/cpp/iterator/indirectly_readable/)) and the requirement that the iterator concept tag be present.

## Declarations
```cpp
template< class I >
concept input_iterator =
std::input_or_output_iterator<I> &&
std::indirectly_readable<I> &&
requires { typename /*ITER_CONCEPT*/<I>; } &&
std::derived_from</*ITER_CONCEPT*/<I>, std::input_iterator_tag>;
```
_(since C++20)_

## Notes
Unlike the [LegacyInputIterator](/cpp/named_req/inputiterator/) requirements, the input_iterator concept does not require [equality_comparable](/cpp/concepts/equality_comparable/), since input iterators are typically compared with sentinels.

## Example
```cpp
#include <cstddef>
#include <iterator>
 
struct SimpleInputIterator
{
    using difference_type = std::ptrdiff_t;
    using value_type = int;
 
    int operator*() const;
 
    SimpleInputIterator& operator++();
    void operator++(int) { ++*this; }
};
 
static_assert(std::input_iterator<SimpleInputIterator>);
```

## See also
- [input_or_output_iterator](/cpp/iterator/input_or_output_iterator/)
- [forward_iterator](/cpp/iterator/forward_iterator/)
