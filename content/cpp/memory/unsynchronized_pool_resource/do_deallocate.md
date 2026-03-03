---
title: "std::pmr::unsynchronized_pool_resource::do_deallocate"
source_path: "cpp/memory/unsynchronized_pool_resource/do_deallocate"
category: "memory"
since: "C++17"
---

Returns the memory at p to the pool. It is unspecified if or under what circumstances this operation will result in a call to deallocate() on the upstream memory resource.

## Declarations
```cpp
virtual void do_deallocate( void* p, std::size_t bytes, std::size_t alignment );
```
_(since C++17)_

## See also
- [deallocate](/cpp/memory/memory_resource/deallocate/)
- [do_deallocate](/cpp/memory/memory_resource/do_deallocate/)
