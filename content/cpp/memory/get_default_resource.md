---
title: "std::pmr::get_default_resource"
source_path: "cpp/memory/get_default_resource"
header: "<memory_resource>"
category: "memory"
since: "C++17"
---

Gets the default memory resource pointer.

## Declarations
```cpp
std::pmr::memory_resource* get_default_resource() noexcept;
```
_(since C++17)_

## Return value
Returns the value of the default memory resource pointer.

## See also
- [set_default_resource](/cpp/memory/set_default_resource/)
- [std::pmr::memory_resource](/cpp/memory/memory_resource/)
- [new_delete_resource](/cpp/memory/new_delete_resource/)
- [std::pmr::memory_resource](/cpp/memory/memory_resource/)
- [operator new](/cpp/memory/new/operator_new/)
- [operator delete](/cpp/memory/new/operator_delete/)
