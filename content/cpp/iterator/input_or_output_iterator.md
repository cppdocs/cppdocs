---
title: "std::input_or_output_iterator"
source_path: "cpp/iterator/input_or_output_iterator"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The input_or_output_iterator concept forms the basis of the iterator concept taxonomy; every iterator type satisfies the input_or_output_iterator requirements.

## Declarations
```cpp
template< class I >
concept input_or_output_iterator =
requires(I i) {
{ *i } -> /*can-reference*/;
} &&
std::weakly_incrementable<I>;
```
_(since C++20)_

## Notes
input_or_output_iterator itself only specifies operations for dereferencing and incrementing an iterator. Most algorithms will require additional operations, for example:

Unlike the [LegacyIterator](/cpp/named_req/iterator/) requirements, the input_or_output_iterator concept does not require copyability.

*i is required to be equality-preserving, although the increment operations required by [weakly_incrementable](/cpp/iterator/weakly_incrementable/) are not.

## Example
```cpp
#include <cstddef>
#include <iterator>
 
struct SimpleIterator
{
    using difference_type = std::ptrdiff_t;
 
    int operator*();
 
    SimpleIterator& operator++();
    void operator++(int) { ++*this; }
};
 
static_assert(std::input_or_output_iterator<SimpleIterator>);
```
