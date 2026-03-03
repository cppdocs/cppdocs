---
title: "std::pmr::monotonic_buffer_resource::do_deallocate"
source_path: "cpp/memory/monotonic_buffer_resource/do_deallocate"
category: "memory"
since: "C++17"
---

This function has no effect. Memory used by a [monotonic_buffer_resource](/cpp/memory/monotonic_buffer_resource/), as its name indicates, increases monotonically until the resource is destroyed.

## Declarations
```cpp
virtual void do_deallocate( void* p, std::size_t bytes, std::size_t alignment );
```
_(since C++17)_

## See also
- [deallocate](/cpp/memory/memory_resource/deallocate/)
- [do_deallocate](/cpp/memory/memory_resource/do_deallocate/)
