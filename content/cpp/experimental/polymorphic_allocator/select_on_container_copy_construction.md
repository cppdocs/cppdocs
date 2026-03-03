---
title: "std::experimental::pmr::polymorphic_allocator<T>::select_on_container_copy_construction"
source_path: "cpp/experimental/polymorphic_allocator/select_on_container_copy_construction"
category: "experimental"
---

Returns a default-constructed polymorphic_allocator object.

## Declarations
```cpp
polymorphic_allocator select_on_container_copy_construction() const;
```
_(library fundamentals TS)_

## Return value
A default-constructed polymorphic_allocator object.

## Notes
polymorphic_allocators do not propagate on container copy construction.

## See also
- [select_on_container_copy_construction](/cpp/memory/allocator_traits/select_on_container_copy_construction/)
