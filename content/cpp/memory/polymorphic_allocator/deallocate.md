---
title: "std::pmr::polymorphic_allocator<T>::deallocate"
source_path: "cpp/memory/polymorphic_allocator/deallocate"
category: "memory"
since: "C++17"
---

Deallocates the storage pointed to by p, which must have been allocated from a [std::pmr::memory_resource](/cpp/memory/memory_resource/) x that compares equal to *resource() using x.allocate(n * sizeof(T), alignof(T)).

## Declarations
```cpp
void deallocate( T* p, std::size_t n );
```
_(since C++17)_

## Parameters
- `p`: pointer to memory to deallocate
- `n`: the number of objects originally allocated

## See also
- [deallocate_bytes](/cpp/memory/polymorphic_allocator/deallocate_bytes/)
- [deallocate_object](/cpp/memory/polymorphic_allocator/deallocate_object/)
- [delete_object](/cpp/memory/polymorphic_allocator/delete_object/)
- [deallocate](/cpp/memory/allocator_traits/deallocate/)
- [deallocate](/cpp/memory/memory_resource/deallocate/)
