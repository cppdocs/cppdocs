---
title: "std::experimental::pmr::unsynchronized_pool_resource::do_deallocate"
source_path: "cpp/experimental/unsynchronized_pool_resource/do_deallocate"
category: "experimental"
---

Returns the memory at p to the pool. It is unspecified if or under what circumstances this operation will result in a call to deallocate() on the upstream memory resource.

## Declarations
```cpp
virtual void do_deallocate( void* p, std::size_t bytes, std::size_t alignment );
```
_(library fundamentals TS)_

## See also
- [deallocate](/cpp/experimental/memory_resource/deallocate/)
- [do_deallocate](/cpp/experimental/memory_resource/do_deallocate/)
