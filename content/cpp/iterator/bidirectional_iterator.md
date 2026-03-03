---
title: "std::bidirectional_iterator"
source_path: "cpp/iterator/bidirectional_iterator"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The concept bidirectional_iterator refines [forward_iterator](/cpp/iterator/forward_iterator/) by adding the ability to move an iterator backward.

## Declarations
```cpp
template< class I >
concept bidirectional_iterator =
std::forward_iterator<I> &&
std::derived_from</*ITER_CONCEPT*/<I>, std::bidirectional_iterator_tag> &&
requires(I i) {
{ --i } -> std::same_as<I&>;
{ i-- } -> std::same_as<I>;
};
```
_(since C++20)_

## Notes
Unlike the [LegacyBidirectionalIterator](/cpp/named_req/bidirectionaliterator/) requirements, the bidirectional_iterator concept does not require dereference to return an lvalue.

## Example
```cpp
#include <cstddef>
#include <iterator>
 
struct SimpleBidiIterator
{
    using difference_type = std::ptrdiff_t;
    using value_type = int;
 
    int operator*() const;
 
    SimpleBidiIterator& operator++();
 
    SimpleBidiIterator operator++(int)
    {
        auto tmp = *this;
        ++*this;
        return tmp;
    }
 
    SimpleBidiIterator& operator--();
 
    SimpleBidiIterator operator--(int)
    {
        auto tmp = *this;
        --*this;
        return tmp;
    }
 
    bool operator==(const SimpleBidiIterator&) const;
};
 
static_assert(std::bidirectional_iterator<SimpleBidiIterator>);
```

## See also
- [forward_iterator](/cpp/iterator/forward_iterator/)
- [input_iterator](/cpp/iterator/input_iterator/)
- [random_access_iterator](/cpp/iterator/random_access_iterator/)
