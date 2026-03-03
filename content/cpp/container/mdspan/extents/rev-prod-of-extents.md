---
title: "std::extents<IndexType,Extents...>::rev-prod-of-extents"
source_path: "cpp/container/mdspan/extents/rev-prod-of-extents"
category: "container"
---

Returns the product of the sizes of extents with index greater than i. The behavior is undefined if i < rank() is false.

## Declarations
```cpp
constexpr std::size_t /*rev-prod-of-extents*/( rank_type i ) const noexcept;
```
_(since C++23) (exposition only*)_

## Parameters
- `i`: an index above which the sizes of corresponding extents will be multiplied together

## Return value
If i + 1 < rank() is true, return the product of [extent](/cpp/container/mdspan/extents/extent/)(k) for all k in range [i + 1,rank()), otherwise 1.

## See also
- [fwd-prod-of-extents](/cpp/container/mdspan/extents/fwd-prod-of-extents/)
