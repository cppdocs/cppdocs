---
title: "std::pmr::polymorphic_allocator<T>::deallocate_bytes"
source_path: "cpp/memory/polymorphic_allocator/deallocate_bytes"
category: "memory"
since: "C++20"
---

Deallocates the storage pointed to by p, which must have been allocated from a [std::pmr::memory_resource](/cpp/memory/memory_resource/) x that compares equal to *resource(), using x.allocate(nbytes, alignment), typically through a call to allocate_bytes(nbytes, alignment).

## Declarations
```cpp
void deallocate_bytes( void* p,
std::size_t nbytes,
std::size_t alignment = alignof(std::max_align_t) );
```
_(since C++20)_

## Parameters
- `p`: pointer to memory to deallocate
- `nbytes`: the number of bytes originally allocated
- `alignment`: the alignment originally allocated

## Notes
This function was introduced for use with the fully-specialized allocator [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<>, but it may be useful in any specialization.

## See also
- [deallocate_object](/cpp/memory/polymorphic_allocator/deallocate_object/)
- [delete_object](/cpp/memory/polymorphic_allocator/delete_object/)
- [deallocate](/cpp/memory/allocator_traits/deallocate/)
- [deallocate](/cpp/memory/memory_resource/deallocate/)
