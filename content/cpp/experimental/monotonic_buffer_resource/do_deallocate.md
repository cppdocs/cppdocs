---
title: "std::experimental::pmr::monotonic_buffer_resource::do_deallocate"
source_path: "cpp/experimental/monotonic_buffer_resource/do_deallocate"
category: "experimental"
---

This function has no effect. Memory used by a monotonic_buffer_resource, as its name indicates, increases monotonically until the resource is destroyed.

## Declarations
```cpp
virtual void do_deallocate( void* p, std::size_t bytes, std::size_t alignment );
```
_(library fundamentals TS)_

## See also
- [deallocate](/cpp/experimental/memory_resource/deallocate/)
- [do_deallocate](/cpp/experimental/memory_resource/do_deallocate/)
