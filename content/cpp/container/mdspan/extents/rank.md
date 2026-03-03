---
title: "std::extents<IndexType,Extents...>::rank"
source_path: "cpp/container/mdspan/extents/rank"
category: "container"
since: "C++23"
---

Returns the number of dimensions in [extents](/cpp/container/mdspan/extents/).

## Declarations
```cpp
static constexpr rank_type rank() const noexcept;
```
_(since C++23)_

## Return value
The number of dimensions.

## Example
```cpp
#include <iostream>
#include <mdspan>
 
int main()
{
    std::extents<int, 1, 2> e1;
    std::extents<int, 3, 4, std::dynamic_extent> e2(5);
    std::cout << e1.rank() << ", " << e2.rank() << '\n';
}
```

## See also
- [rank_dynamic](/cpp/container/mdspan/extents/rank_dynamic/)
- [rank](/cpp/types/rank/)
