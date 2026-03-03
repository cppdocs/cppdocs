---
title: "std::extents<IndexType,Extents...>::extent"
source_path: "cpp/container/mdspan/extents/extent"
category: "container"
since: "C++23"
---

Returns dynamic extent size of an [extents](/cpp/container/mdspan/extents/) at a certain rank index.

## Declarations
```cpp
constexpr index_type extent( rank_type i ) const noexcept;
```
_(since C++23)_

## Parameters
- `i`: The rank index to get the extent size of

## Return value
The dynamic extent size of an extents at a certain rank index.

## Example
```cpp
#include <iostream>
#include <mdspan>
 
int main()
{
    std::extents<int, 1, 2> e1;
    std::extents<int, 3, std::dynamic_extent, std::dynamic_extent> e2(4, 5);
    std::cout << e1.extent(0) << ", " << e1.extent(1) << '\n';
    std::cout << e2.extent(0) << ", " << e2.extent(1) << ", " << e2.extent(2) << '\n';
}
```

## See also
- [static_extent](/cpp/container/mdspan/extents/static_extent/)
- [extent](/cpp/types/extent/)
