---
title: "std::experimental::pmr::polymorphic_allocator<T>::allocate"
source_path: "cpp/experimental/polymorphic_allocator/allocate"
category: "experimental"
---

Allocates storage for n objects of type T using the underlying memory resource. Equivalent to

## Declarations
```cpp
T* allocate( std::size_t n );
```
_(library fundamentals TS)_

## Parameters
- `n`: the number of objects to allocate storage for

## Return value
A pointer to the allocated storage.

## See also
- [allocate](/cpp/memory/allocator_traits/allocate/)
- [deallocate](/cpp/experimental/memory_resource/deallocate/)
