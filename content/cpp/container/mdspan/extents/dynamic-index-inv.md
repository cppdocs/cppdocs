---
title: "std::extents<IndexType,Extents...>::dynamic-index-inv"
source_path: "cpp/container/mdspan/extents/dynamic-index-inv"
category: "container"
---

Returns the number r such that in range [0,r + 1) there are exactly [0,i + 1) dynamic extents. If i <= rank_dynamic() is false, the behavior is undefined.

## Declarations
```cpp
private:
static constexpr auto /*dynamic-index-inv*/( rank_type i ) noexcept;
```
_(since C++23) (exposition only*)_

## Parameters
- `i`: the index

## Return value
The minimum value of r such that [dynamic-index](/cpp/container/mdspan/extents/dynamic-index/)(r + 1) == i + 1 is true.
