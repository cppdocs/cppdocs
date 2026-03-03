---
title: "std::pmr::polymorphic_allocator<T>::resource"
source_path: "cpp/memory/polymorphic_allocator/resource"
category: "memory"
since: "C++17"
---

Returns the [memory resource](/cpp/memory/memory_resource/) pointer used by this polymorphic allocator.

## Declarations
```cpp
std::pmr::memory_resource* resource() const;
```
_(since C++17)_

## Return value
The memory resource pointer used by this polymorphic allocator.
