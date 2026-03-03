---
title: "std::experimental::function<R(Args...)>::get_memory_resource"
source_path: "cpp/experimental/function/get_memory_resource"
category: "experimental"
---

Returns a pointer to the memory resource used by this object to allocate memory.

## Declarations
```cpp
std::experimental::pmr::memory_resource* get_memory_resource() const noexcept;
```
_(library fundamentals TS) (removed in library fundamentals TS v3)_

## Return value
A pointer to the memory resource used by this object to allocate memory.

## See also
- [(constructor)](/cpp/experimental/function/function/)
- [get_allocator](/cpp/experimental/function/get_allocator/)
- [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)
