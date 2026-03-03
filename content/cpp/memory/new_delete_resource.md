---
title: "std::pmr::new_delete_resource"
source_path: "cpp/memory/new_delete_resource"
header: "<memory_resource>"
category: "memory"
since: "C++17"
---

Returns a pointer to a memory_resource that uses the global [operator new](/cpp/memory/new/operator_new/) and [operator delete](/cpp/memory/new/operator_delete/) to allocate memory.

## Declarations
```cpp
std::pmr::memory_resource* new_delete_resource() noexcept;
```
_(since C++17)_

## Return value
Returns a pointer p to a static storage duration object of a type derived from [std::pmr::memory_resource](/cpp/memory/memory_resource/), with the following properties:
