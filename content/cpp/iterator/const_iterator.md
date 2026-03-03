---
title: "std::basic_const_iterator"
source_path: "cpp/iterator/const_iterator"
header: "<iterator>"
category: "iterator"
since: "C++23"
---

std::basic_const_iterator is an iterator adaptor which behaves exactly like the underlying iterator (which must be at least an [LegacyInputIterator](/cpp/named_req/inputiterator/) or model [input_iterator](/cpp/iterator/input_iterator/)), except that dereferencing converts the value returned by the underlying iterator as immutable. Specializations of std::basic_const_iterator are constant iterators, that is, the iterator can never be used as an output iterator because modifying elements is not allowed.

## Declarations
```cpp
template< std::input_iterator Iter >
class basic_const_iterator;
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges_as_const
202207L
(C++23)
std::basic_const_iterator
202311L
(C++23)(DR)
std::basic_const_iterator should follow its underlying type's convertibility

## Example
```cpp
#include <cassert>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector v{1, 2, 3};
    std::vector<int>::iterator i = v.begin();
    *i = 4;   // OK, v[0] == 4 now
    i[1] = 4; // OK, the same as *(i + 1) = 4;
 
    auto ci = std::make_const_iterator(i);
    assert(*ci == 4);   // OK, can read the underlying object
    assert(ci[0] == 4); // OK, ditto
    // *ci = 13;        // Error: location is read-only
    // ci[0] = 13;      // Error: ditto
    ci.base()[0] = 42;  // OK, underlying iterator is writable
    assert(*ci == 42);  // OK, underlying location v[0] was modified
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2836R1 | C++23 | basic_const_iterator doesn't follow its underlying type's convertibility | conversion operator provided |
