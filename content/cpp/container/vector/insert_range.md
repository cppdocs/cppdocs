---
title: "std::vector<T,Allocator>::insert_range"
source_path: "cpp/container/vector/insert_range"
category: "container"
since: "C++23"
---

Inserts, in non-reversing order, copies of elements in rg before pos.

## Declarations
```cpp
template< container-compatible-range<T> R >
constexpr iterator insert_range( const_iterator pos, R&& rg );
```
_(since C++23)_

## Parameters
- `pos`: iterator before which the content will be inserted (pos may be the end() iterator)
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Return value
An [iterator](/cpp/container/vector/#Member_types) that points at the copy of the first element inserted into vector or at pos if rg is empty.

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
#include <vector>
#include <list>
 
int main()
{
    auto container = std::vector{1, 2, 3, 4};
    auto pos = std::next(container.begin(), 2);
    assert(*pos == 3);
    const auto rg = std::list{-1, -2, -3};
 
#ifdef __cpp_lib_containers_ranges
    container.insert_range(pos, rg);
#else
    container.insert(pos, rg.cbegin(), rg.cend());
#endif
    assert(std::ranges::equal(container, std::vector{1, 2, -1, -2, -3, 3, 4}));
}
```

## See also
- [insert](/cpp/container/vector/insert/)
- [append_range](/cpp/container/vector/append_range/)
