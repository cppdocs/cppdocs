---
title: "std::vector<T,Allocator>::assign_range"
source_path: "cpp/container/vector/assign_range"
category: "container"
since: "C++23"
---

Replaces elements in the container with a copy of each element in rg.

## Declarations
```cpp
template< container-compatible-range<T> R >
constexpr void assign_range( R&& rg );
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
#include <vector>
#include <list>
 
int main()
{
    const auto source = std::list{2, 7, 1};
    auto destination = std::vector{3, 1, 4};
#ifdef __cpp_lib_containers_ranges
    destination.assign_range(source);
#else
    destination.assign(source.cbegin(), source.cend());
#endif
    assert(std::ranges::equal(source, destination));
}
```

## See also
- [insert_range](/cpp/container/vector/insert_range/)
- [append_range](/cpp/container/vector/append_range/)
- [assign](/cpp/container/vector/assign/)
- [operator=](/cpp/container/vector/operator/)
