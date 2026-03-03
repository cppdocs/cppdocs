---
title: "std::experimental::pmr::memory_resource::do_deallocate"
source_path: "cpp/experimental/memory_resource/do_deallocate"
category: "experimental"
---

Deallocates the storage pointed to by p. p shall have been returned by a prior call to allocate(bytes, alignment) on a memory_resource that compares equal to *this, and the storage it points to shall not yet have been deallocated.

## Declarations
```cpp
virtual void* do_deallocate( void* p, std::size_t bytes, std::size_t alignment ) = 0;
```
_(library fundamentals TS)_

## See also
- [deallocate](/cpp/experimental/memory_resource/deallocate/)
