---
title: "std::list<T,Allocator>::assign_range"
source_path: "cpp/container/list/assign_range"
category: "container"
since: "C++23"
---

Replaces elements in the container with a copy of each element in rg.

## Declarations
```cpp
template< container-compatible-range<T> R >
void assign_range( R&& rg );
```
_(since C++23)_

## Parameters
- `rg`: an input_range with reference type convertible to the element type of the container

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
#include <algorithm>
#include <cassert>
#include <list>
#include <vector>
 
int main()
{
    const auto source = std::vector{2, 7, 1};
    auto destination = std::list{3, 1, 4};
#ifdef __cpp_lib_containers_ranges
    destination.assign_range(source);
#else
    destination.assign(source.cbegin(), source.cend());
#endif
    assert(std::ranges::equal(source, destination));
}
```

## See also
- [insert_range](/cpp/container/list/insert_range/)
- [prepend_range](/cpp/container/list/prepend_range/)
- [append_range](/cpp/container/list/append_range/)
- [assign](/cpp/container/list/assign/)
- [operator=](/cpp/container/list/operator/)
