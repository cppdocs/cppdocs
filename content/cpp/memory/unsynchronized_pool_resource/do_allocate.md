---
title: "std::pmr::unsynchronized_pool_resource::do_allocate"
source_path: "cpp/memory/unsynchronized_pool_resource/do_allocate"
category: "memory"
since: "C++17"
---

Allocates storage.

## Declarations
```cpp
virtual void* do_allocate( std::size_t bytes, std::size_t alignment );
```
_(since C++17)_

## Return value
A pointer to allocated storage of at least bytes bytes in size, aligned to the specified alignment if such alignment is supported, and to alignof([std::max_align_t](/cpp/types/max_align_t/)) otherwise.

## See also
- [allocate](/cpp/memory/memory_resource/allocate/)
- [do_allocate](/cpp/memory/memory_resource/do_allocate/)
