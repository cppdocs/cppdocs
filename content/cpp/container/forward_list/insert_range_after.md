---
title: "std::forward_list<T,Allocator>::insert_range_after"
source_path: "cpp/container/forward_list/insert_range_after"
category: "container"
since: "C++23"
---

Inserts, in non-reversing order, the copies of elements in rg before pos. Each iterator in the range rg is dereferenced exactly once.

## Declarations
```cpp
template< container-compatible-range<T> R >
iterator insert_range_after( const_iterator pos, R&& rg );
```
_(since C++23)_

## Parameters
- `pos`: an iterator after which the content will be inserted
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Return value
An [iterator](/cpp/container/forward_list/#Member_types) that points at the copy of the last element inserted into forward_list or at pos if rg is empty.

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
#include <forward_list>
#include <iterator>
#include <vector>
 
int main()
{
    auto container = std::forward_list{1, 2, 3, 4};
    auto pos = std::next(container.cbegin());
    assert(*pos == 2);
    const auto rg = std::vector{-1, -2, -3};
 
#ifdef __cpp_lib_containers_ranges
    container.insert_range_after(pos, rg);
#else
    container.insert_after(pos, rg.cbegin(), rg.cend());
#endif
 
    assert(std::ranges::equal(container, std::vector{1, 2, -1, -2, -3, 3, 4}));
}
```

## See also
- [prepend_range](/cpp/container/forward_list/prepend_range/)
- [insert_after](/cpp/container/forward_list/insert_after/)
- [emplace_after](/cpp/container/forward_list/emplace_after/)
