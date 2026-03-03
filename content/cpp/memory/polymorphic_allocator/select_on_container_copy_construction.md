---
title: "std::pmr::polymorphic_allocator<T>::
select_on_container_copy_construction"
source_path: "cpp/memory/polymorphic_allocator/select_on_container_copy_construction"
category: "memory"
since: "C++17"
---

Returns a default-constructed polymorphic_allocator object.

## Declarations
```cpp
polymorphic_allocator select_on_container_copy_construction() const;
```
_(since C++17)_

## Return value
A default-constructed polymorphic_allocator object.

## Notes
polymorphic_allocators do not propagate on container copy construction.

## See also
- [select_on_container_copy_construction](/cpp/memory/allocator_traits/select_on_container_copy_construction/)
