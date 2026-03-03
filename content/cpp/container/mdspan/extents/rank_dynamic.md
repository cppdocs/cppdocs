---
title: "std::extents<IndexType,Extents...>::rank_dynamic"
source_path: "cpp/container/mdspan/extents/rank_dynamic"
category: "container"
since: "C++23"
---

Returns the number of dynamic dimensions in [extents](/cpp/container/mdspan/extents/).

## Declarations
```cpp
static constexpr rank_type rank_dynamic() const noexcept;
```
_(since C++23)_

## Return value
The number of dynamic dimensions.

## Example
```cpp
#include <iostream>
#include <mdspan>
 
int main()
{
    std::extents<int, 1, 2> e1;
    std::extents<int, 3, 4, std::dynamic_extent> e2(5);
    std::extents<int, std::dynamic_extent, 7, std::dynamic_extent> e3(6, 8);
    std::cout << e1.rank_dynamic() << ", "
              << e2.rank_dynamic() << ", "
              << e3.rank_dynamic() << '\n';
}
```

## See also
- [rank](/cpp/container/mdspan/extents/rank/)
- [rank](/cpp/types/rank/)
