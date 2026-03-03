---
title: "std::deque<T,Allocator>::insert_range"
source_path: "cpp/container/deque/insert_range"
category: "container"
since: "C++23"
---

Inserts, in non-reversing order, copies of elements in rg before pos.

## Declarations
```cpp
template< container-compatible-range<T> R >
iterator insert_range( const_iterator pos, R&& rg );
```
_(since C++23)_

## Parameters
- `pos`: iterator before which the content will be inserted (pos may be the end() iterator)
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Return value
An [iterator](/cpp/container/deque/#Member_types) that points at the copy of the first element inserted into deque or at pos if rg is empty.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges-aware construction and insertion

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <iterator>
#include <deque>
#include <list>
 
int main()
{
    auto container = std::deque{1, 2, 3, 4};
    auto pos = std::next(container.begin(), 2);
    assert(*pos == 3);
    const auto rg = std::list{-1, -2, -3};
 
#ifdef __cpp_lib_containers_ranges
    container.insert_range(pos, rg);
#else
    container.insert(pos, rg.cbegin(), rg.cend());
#endif
    assert(std::ranges::equal(container, std::deque{1, 2, -1, -2, -3, 3, 4}));
}
```

## See also
- [insert](/cpp/container/deque/insert/)
- [prepend_range](/cpp/container/deque/prepend_range/)
- [append_range](/cpp/container/deque/append_range/)
