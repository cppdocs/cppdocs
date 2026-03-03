---
title: "std::pmr::synchronized_pool_resource::upstream_resource"
source_path: "cpp/memory/synchronized_pool_resource/upstream_resource"
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
- [(constructor)](/cpp/memory/synchronized_pool_resource/synchronized_pool_resource/)
