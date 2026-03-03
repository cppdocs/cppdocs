---
title: "std::pmr::polymorphic_allocator<T>::allocate_bytes"
source_path: "cpp/memory/polymorphic_allocator/allocate_bytes"
category: "memory"
since: "C++20"
---

Allocates nbytes bytes of storage at specified alignment alignment using the underlying memory resource. Equivalent to return resource()->allocate(nbytes, alignment);.

## Declarations
```cpp
void* allocate_bytes( std::size_t nbytes,
std::size_t alignment = alignof(std::max_align_t) );
```
_(since C++20)_

## Parameters
- `nbytes`: the number of bytes to allocate
- `alignment`: the alignment to use

## Return value
A pointer to the allocated storage.

## Notes
This function was introduced for use with the fully-specialized allocator [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<>, but it may be useful in any specialization.

The return type is void* (rather than, e.g., [std::byte](/cpp/types/byte/)*) to support conversion to an arbitrary pointer type U* by static_cast<U*>.

## See also
- [allocate_object](/cpp/memory/polymorphic_allocator/allocate_object/)
- [new_object](/cpp/memory/polymorphic_allocator/new_object/)
- [allocate](/cpp/memory/polymorphic_allocator/allocate/)
- [allocate](/cpp/memory/allocator_traits/allocate/)
- [allocate](/cpp/memory/memory_resource/allocate/)
