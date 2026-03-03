---
title: "std::experimental::pmr::new_delete_resource"
source_path: "cpp/experimental/new_delete_resource"
header: "<experimental/memory_resource>"
category: "experimental"
---

Returns a pointer to a memory_resource that uses the global [operator new](/cpp/memory/new/operator_new/) and [operator delete](/cpp/memory/new/operator_delete/) to allocate memory.

## Declarations
```cpp
memory_resource* new_delete_resource() noexcept;
```
_(library fundamentals TS)_

## Return value
Returns a pointer p to a static storage duration object of a type derived from [std::experimental::pmr::memory_resource](/cpp/experimental/memory_resource/), with the following properties:
