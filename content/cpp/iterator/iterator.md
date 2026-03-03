---
title: "std::iterator"
source_path: "cpp/iterator/iterator"
header: "<iterator>"
category: "iterator"
deprecated: "C++17"
---

std::iterator is the base class provided to simplify definitions of the required types for iterators.

## Declarations
```cpp
template<
class Category,
class T,
class Distance = std::ptrdiff_t,
class Pointer = T*,
class Reference = T&
> struct iterator;
```
_(deprecated in C++17)_

## Example
```cpp
#include <algorithm>
#include <iostream>
 
template<long FROM, long TO>
class Range
{
public:
    // member typedefs provided through inheriting from std::iterator
    class iterator : public std::iterator<
                                std::input_iterator_tag, // iterator_category
                                long,                    // value_type
                                long,                    // difference_type
                                const long*,             // pointer
                                long                     // reference
                            > {
        long num = FROM;
    public:
        explicit iterator(long _num = 0) : num(_num) {}
        iterator& operator++() { num = TO >= FROM ? num + 1: num - 1; return *this; }
        iterator operator++(int) { iterator retval = *this; ++(*this); return retval; }
        bool operator==(iterator other) const { return num == other.num; }
        bool operator!=(iterator other) const { return !(*this == other); }
        reference operator*() const { return num; }
    };
    iterator begin() { return iterator(FROM); }
    iterator end() { return iterator(TO >= FROM? TO + 1 : TO - 1); }
};
 
int main()
{
    // std::find requires an input iterator
    auto range = Range<15, 25>();
    auto itr = std::find(range.begin(), range.end(), 18);
    std::cout << *itr << '\n'; // 18
 
    // Range::iterator also satisfies range-based for requirements
    for (long l : Range<3, 5>())
        std::cout << l << ' '; // 3 4 5
    std::cout << '\n';
}
```

## See also
- [iterator_traits](/cpp/iterator/iterator_traits/)
- [input_iterator_tagoutput_iterator_tagforward_iterator_tagbidirectional_iterator_tagrandom_access_iterator_tagcontiguous_iterator_tag](/cpp/iterator/iterator_tags/)
