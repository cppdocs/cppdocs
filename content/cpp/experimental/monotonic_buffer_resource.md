---
title: "std::experimental::pmr::monotonic_buffer_resource"
source_path: "cpp/experimental/monotonic_buffer_resource"
header: "<experimental/memory_resource>"
category: "experimental"
---

The class std::experimental::pmr::monotonic_buffer_resource is a special-purpose memory resource class that releases the allocated memory only when the resource is destroyed. It is intended for very fast memory allocations in situations where memory is used to build up a few objects and then is released all at once.

## Declarations
```cpp
class monotonic_buffer_resource : public memory_resource;
```
_(library fundamentals TS)_
