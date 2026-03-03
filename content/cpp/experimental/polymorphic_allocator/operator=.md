---
title: "std::experimental::pmr::polymorphic_allocator<T>::operator="
source_path: "cpp/experimental/polymorphic_allocator/operator"
category: "experimental"
---

Copy assigns this polymorphic_allocator. Sets the memory resource pointer of *this to that of rhs.

## Declarations
```cpp
polymorphic_allocator& operator=( const polymorphic_allocator& rhs ) = default;
```
_(library fundamentals TS)_

## Parameters
- `rhs`: another polymorphic_allocator to copy from

## Return value
*this
