---
title: "std::experimental::pmr::memory_resource::deallocate"
source_path: "cpp/experimental/memory_resource/deallocate"
category: "experimental"
---

Deallocates the storage pointed to by p. p shall have been returned by a prior call to allocate(bytes, alignment) on a memory_resource that compares equal to *this, and the storage it points to shall not yet have been deallocated.

## Declarations
```cpp
void* deallocate( void* p, std::size_t bytes, std::size_t alignment = alignof(std::max_align_t) );
```
_(library fundamentals TS)_

## See also
- [do_deallocate](/cpp/experimental/memory_resource/do_deallocate/)
