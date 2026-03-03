---
title: "std::deque<T,Allocator>::append_range"
source_path: "cpp/container/deque/append_range"
category: "container"
since: "C++23"
---

Inserts copies of elements from the range rg before [end()](/cpp/container/deque/end/), in non-reversing order.

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
#include <deque>
#include <list>
 
int main()
{
    auto head = std::deque{1, 2, 3, 4};
    const auto tail = std::list{-5, -6, -7};
#ifdef __cpp_lib_containers_ranges
    head.append_range(tail);
#else
    head.insert(head.end(), tail.cbegin(), tail.cend());
#endif
    assert((head == std::deque{1, 2, 3, 4, -5, -6, -7}));
}
```

## See also
- [prepend_range](/cpp/container/deque/prepend_range/)
- [insert_range](/cpp/container/deque/insert_range/)
- [push_back](/cpp/container/deque/push_back/)
- [emplace_back](/cpp/container/deque/emplace_back/)
