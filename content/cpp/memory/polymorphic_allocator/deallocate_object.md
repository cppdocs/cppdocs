---
title: "std::pmr::polymorphic_allocator<T>::deallocate_object"
source_path: "cpp/memory/polymorphic_allocator/deallocate_object"
category: "memory"
since: "C++20"
---

Deallocates the storage pointed to by p, which must have been allocated from a [std::pmr::memory_resource](/cpp/memory/memory_resource/) x that compares equal to *resource(), using x.allocate(n * sizeof(U), alignof(U)), typically through a call to allocate_object<U>(n).

## Declarations
```cpp
template< class U >
void deallocate_object( U* p, std::size_t n = 1 );
```
_(since C++20)_

## Parameters
- `p`: pointer to memory to deallocate
- `n`: number of objects of type U the memory was for

## Notes
This function was introduced for use with the fully-specialized allocator [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<>, but it may be useful in any specialization.

## See also
- [deallocate_bytes](/cpp/memory/polymorphic_allocator/deallocate_bytes/)
- [delete_object](/cpp/memory/polymorphic_allocator/delete_object/)
- [deallocate](/cpp/memory/allocator_traits/deallocate/)
- [deallocate](/cpp/memory/memory_resource/deallocate/)
