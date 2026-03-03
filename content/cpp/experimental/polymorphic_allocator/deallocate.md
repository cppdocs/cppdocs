---
title: "std::experimental::pmr::polymorphic_allocator<T>::deallocate"
source_path: "cpp/experimental/polymorphic_allocator/deallocate"
category: "experimental"
---

Deallocates the storage pointed to by p, which must have been allocated from a [memory_resource](/cpp/experimental/memory_resource/) x that compares equal to *resource() using x.allocate(n * sizeof(T), alignof(T)).

## Declarations
```cpp
void deallocate( T* p, std::size_t n );
```
_(library fundamentals TS)_

## Parameters
- `p`: pointer to memory to deallocate
- `n`: the number of objects originally allocated

## See also
- [deallocate](/cpp/memory/allocator_traits/deallocate/)
- [deallocate](/cpp/experimental/memory_resource/deallocate/)
