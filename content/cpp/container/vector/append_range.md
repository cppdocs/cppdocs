---
title: "std::vector<T,Allocator>::append_range"
source_path: "cpp/container/vector/append_range"
category: "container"
since: "C++23"
---

Inserts copies of elements from the range rg before [end()](/cpp/container/vector/end/), in non-reversing order.

## Declarations
```cpp
template< container-compatible-range<T> R >
constexpr void append_range( R&& rg );
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
#include <vector>
#include <list>
 
int main()
{
    auto head = std::vector{1, 2, 3, 4};
    const auto tail = std::list{-5, -6, -7};
#ifdef __cpp_lib_containers_ranges
    head.append_range(tail);
#else
    head.insert(head.end(), tail.cbegin(), tail.cend());
#endif
    assert((head == std::vector{1, 2, 3, 4, -5, -6, -7}));
}
```

## See also
- [insert_range](/cpp/container/vector/insert_range/)
- [push_back](/cpp/container/vector/push_back/)
- [emplace_back](/cpp/container/vector/emplace_back/)
