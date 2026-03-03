---
title: "std::forward_iterator"
source_path: "cpp/iterator/forward_iterator"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

This concept refines [std::input_iterator](/cpp/iterator/input_iterator/) by requiring that I also model [std::incrementable](/cpp/iterator/incrementable/) (thereby making it suitable for multi-pass algorithms), and guaranteeing that two iterators to the same range can be compared against each other.

## Declarations
```cpp
template< class I >
concept forward_iterator =
std::input_iterator<I> &&
std::derived_from</*ITER_CONCEPT*/<I>, std::forward_iterator_tag> &&
std::incrementable<I> &&
std::sentinel_for<I, I>;
```
_(since C++20)_

## Notes
Unlike the [LegacyForwardIterator](/cpp/named_req/forwarditerator/) requirements, the forward_iterator concept does not require dereference to return a reference.

## Example
```cpp
#include <cstddef>
#include <iterator>
 
struct SimpleForwardIterator
{
    using difference_type = std::ptrdiff_t;
    using value_type = int;
 
    int operator*() const;
 
    SimpleForwardIterator& operator++();
 
    SimpleForwardIterator operator++(int)
    {
        auto tmp = *this;
        ++*this;
        return tmp;
    }
 
    bool operator==(const SimpleForwardIterator&) const;
};
 
static_assert(std::forward_iterator<SimpleForwardIterator>);
```

## See also
- [input_iterator](/cpp/iterator/input_iterator/)
- [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/)
