---
title: "std::experimental::packaged_task<R(Args...)>::get_memory_resource"
source_path: "cpp/experimental/lib_extensions/packaged_task/get_memory_resource"
category: "experimental"
---

Returns a pointer to the memory resource used by this object to allocate memory.

## Declarations
```cpp
std::experimental::pmr::memory_resource* get_memory_resource() const noexcept;
```
_(library fundamentals TS)_

## Return value
A pointer to the memory resource used by this object to allocate memory.

## See also
- [(constructor)](/cpp/experimental/lib_extensions/packaged_task/packaged_task/)
