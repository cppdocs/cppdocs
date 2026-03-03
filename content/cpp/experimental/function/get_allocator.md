---
title: "std::experimental::function<R(Args...)>::get_allocator"
source_path: "cpp/experimental/function/get_allocator"
category: "experimental"
---

Returns the [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<> stored at the construction of function object. If no allocator was explicitly specified, the stored allocator is equal to the source allocator in move construction, or is default-constructed otherwise.

## Declarations
```cpp
std::pmr::polymorphic_allocator<> get_allocator() const noexcept;
```
_(library fundamentals TS v3)_

## Return value
The [std::pmr::polymorphic_allocator](/cpp/memory/polymorphic_allocator/)<> stored at the construction of function object.

## See also
- [get_memory_resource](/cpp/experimental/function/get_memory_resource/)
