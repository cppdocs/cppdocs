---
title: "std::pmr::monotonic_buffer_resource::upstream_resource"
source_path: "cpp/memory/monotonic_buffer_resource/upstream_resource"
category: "memory"
since: "C++17"
---

Returns a pointer to the upstream memory resource. This is the same value as the upstream argument passed to the constructor of this object.

## Declarations
```cpp
std::pmr::memory_resource* upstream_resource() const;
```
_(since C++17)_

## See also
- [(constructor)](/cpp/memory/monotonic_buffer_resource/monotonic_buffer_resource/)
