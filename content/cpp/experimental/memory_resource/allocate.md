---
title: "std::experimental::pmr::memory_resource::allocate"
source_path: "cpp/experimental/memory_resource/allocate"
category: "experimental"
---

Allocates storage with a size of at least bytes bytes. The returned storage is aligned to the specified alignment if such alignment is supported, and to alignof([std::max_align_t](/cpp/types/max_align_t/)) otherwise.

## Declarations
```cpp
void* allocate( std::size_t bytes, std::size_t alignment = alignof(std::max_align_t) );
```
_(library fundamentals TS)_

## See also
- [do_allocate](/cpp/experimental/memory_resource/do_allocate/)
