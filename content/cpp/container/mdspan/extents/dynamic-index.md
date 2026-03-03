---
title: "std::extents<IndexType,Extents...>::dynamic-index"
source_path: "cpp/container/mdspan/extents/dynamic-index"
category: "container"
---

Returns the number of dynamic extents below index i. If i <= rank() is false, the behavior is undefined.

## Declarations
```cpp
private:
static constexpr auto /*dynamic-index*/( rank_type i ) noexcept;
```
_(since C++23) (exposition only*)_

## Parameters
- `i`: the index

## Return value
The number of Er with r < i for which Er is a dynamic extent.
