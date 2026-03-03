---
title: "std::experimental::pmr::null_memory_resource"
source_path: "cpp/experimental/null_memory_resource"
header: "<experimental/memory_resource>"
category: "experimental"
---

Returns a pointer to a memory_resource that doesn't perform any allocation.

## Declarations
```cpp
memory_resource* null_memory_resource() noexcept;
```
_(library fundamentals TS)_

## Return value
Returns a pointer p to a static storage duration object of a type derived from [std::experimental::pmr::memory_resource](/cpp/experimental/memory_resource/), with the following properties:
