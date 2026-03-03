---
title: "std::experimental::pmr::set_default_resource"
source_path: "cpp/experimental/set_default_resource"
header: "<experimental/memory_resource>"
category: "experimental"
---

If r is not null, sets the default memory resource pointer to r; otherwise, sets the default memory resource pointer to new_delete_resource().

## Declarations
```cpp
memory_resource* set_default_resource( memory_resource* r ) noexcept;
```
_(library fundamentals TS)_

## Return value
Returns the previous value of the default memory resource pointer.

## See also
- [get_default_resource](/cpp/experimental/get_default_resource/)
- [new_delete_resource](/cpp/experimental/new_delete_resource/)
- [operator new](/cpp/memory/new/operator_new/)
- [operator delete](/cpp/memory/new/operator_delete/)
