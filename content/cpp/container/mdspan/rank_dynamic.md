---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::rank_dynamic"
source_path: "cpp/container/mdspan/rank_dynamic"
category: "container"
since: "C++23"
---

Returns the number of dynamic dimensions in a mdspan. Equivalent to return Extents::rank_dynamic().

## Declarations
```cpp
static constexpr rank_type rank_dynamic() noexcept;
```
_(since C++23)_

## Return value
The number of dynamic dimensions.

## Example
This section is incompleteReason: no example

## See also
- [rank_dynamic](/cpp/container/mdspan/extents/rank_dynamic/)
- [rank](/cpp/container/mdspan/rank/)
