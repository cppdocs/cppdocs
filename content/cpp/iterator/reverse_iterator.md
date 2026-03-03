---
title: "std::reverse_iterator"
source_path: "cpp/iterator/reverse_iterator"
header: "<iterator>"
category: "iterator"
---

std::reverse_iterator is an iterator adaptor that reverses the direction of a given iterator, which must be at least a [LegacyBidirectionalIterator](/cpp/named_req/bidirectionaliterator/)or model [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/)(since C++20). In other words, when provided with a bidirectional iterator, std::reverse_iterator produces a new iterator that moves from the end to the beginning of the sequence defined by the underlying bidirectional iterator.

## Declarations
```cpp
template< class Iter >
class reverse_iterator;
```

## Notes
std::reverse_iterator does not work with iterators whose dereference returns a reference to a member of *this (so-called “stashing iterators”). An example of a stashing iterator is [MSVC STL's](https://github.com/microsoft/STL/blob/ac129e595f762f11551663f1c7fa5f51444a8c6c/stl/inc/filesystem#L1387-L1585) [std::filesystem::path::iterator](/cpp/filesystem/path/#Member_types).

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <iterator>
 
template<typename T, std::size_t SIZE>
class Stack
{
    T arr[SIZE];
    std::size_t pos = 0;
public:
    T pop()
    {
        return arr[--pos];
    }
 
    Stack& push(const T& t)
    {
        arr[pos++] = t;
        return *this;
    }
 
    // we wish that looping on Stack would be in LIFO order
    // thus we use std::reverse_iterator as an adaptor to existing iterators
    // (which are in this case the simple pointers: [arr, arr + pos)
    auto begin() { return std::reverse_iterator(arr + pos); }
    auto end() { return std::reverse_iterator(arr); }
};
 
int main()
{
    Stack<int, 8> s;
    s.push(5).push(15).push(25).push(35);
    for (int val : s)
        std::cout << val << ' ';
    std::cout << '\n';
}
```

## See also
- [make_reverse_iterator](/cpp/iterator/make_reverse_iterator/)
- [iterator](/cpp/iterator/iterator/)
