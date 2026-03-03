---
title: "std::list<T,Allocator>::append_range"
source_path: "cpp/container/list/append_range"
category: "container"
since: "C++23"
---

Inserts copies of elements from the range rg before [end()](/cpp/container/list/end/), in non-reversing order.

## Declarations
```cpp
template< container-compatible-range<T> R >
void append_range( R&& rg );
```
_(since C++23)_

## Parameters
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Return value
(none)

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
#include <cassert>
#include <list>
#include <vector>
 
int main()
{
    auto head = std::list{1, 2, 3, 4};
    const auto tail = std::vector{-5, -6, -7};
#ifdef __cpp_lib_containers_ranges
    head.append_range(tail);
#else
    head.insert(head.end(), tail.cbegin(), tail.cend());
#endif
    assert((head == std::list{1, 2, 3, 4, -5, -6, -7}));
}
```

## See also
- [prepend_range](/cpp/container/list/prepend_range/)
- [insert_range](/cpp/container/list/insert_range/)
- [push_back](/cpp/container/list/push_back/)
- [emplace_back](/cpp/container/list/emplace_back/)
