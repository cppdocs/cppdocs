---
title: "std::extents<IndexType,Extents...>::static_extent"
source_path: "cpp/container/mdspan/extents/static_extent"
category: "container"
since: "C++23"
---

Returns static extent size of an [extents](/cpp/container/mdspan/extents/) at the rank index i. If the rank index i is a dynamic extent, returns std::dynamic_extent.

## Declarations
```cpp
static constexpr std::size_t static_extent( rank_type i ) noexcept;
```
_(since C++23)_

## Parameters
- `i`: The rank index to get the static extent size of

## Return value
The static extent size or std::dynamic_extent value.

## Example
```cpp
#include <iostream>
#include <mdspan>
 
int main()
{
    std::extents<int, 1, 2> e1;
    std::extents<int, 3, std::dynamic_extent, std::dynamic_extent> e2(4, 5);
    std::cout << e1.static_extent(0) << ", " << e1.static_extent(1) << '\n';
    std::cout << (e2.static_extent(0) == std::dynamic_extent) << ", "
              << (e2.static_extent(1) == std::dynamic_extent) << ", "
              << (e2.static_extent(2) == std::dynamic_extent) << '\n';
}
```

## See also
- [extent](/cpp/container/mdspan/extents/extent/)
- [extent](/cpp/types/extent/)
