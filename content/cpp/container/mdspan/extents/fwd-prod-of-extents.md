---
title: "std::extents<IndexType,Extents...>::fwd-prod-of-extents"
source_path: "cpp/container/mdspan/extents/fwd-prod-of-extents"
category: "container"
---

Returns the product of the sizes of extents with index less than i. The behavior is undefined if i <= rank() is false.

## Declarations
```cpp
constexpr std::size_t /*fwd-prod-of-extents*/( rank_type i ) const noexcept;
```
_(since C++23) (exposition only*)_

## Parameters
- `i`: The end index of the range of extents to be multiplied together.

## Return value
If i > 0 is true, return the product of [extent](/cpp/container/mdspan/extents/extent/)(k) for all k in range [0,i), otherwise 1.

## See also
- [rev-prod-of-extents](/cpp/container/mdspan/extents/rev-prod-of-extents/)
