---
title: "std::get_new_handler"
source_path: "cpp/memory/new/get_new_handler"
header: "<new>"
category: "memory"
since: "C++11"
---

Returns the currently installed new-handler, which may be a null pointer.

## Declarations
```cpp
std::new_handler get_new_handler() noexcept;
```
_(since C++11)_

## Return value
The currently installed new-handler, which may be a null pointer value.

## See also
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
- [set_new_handler](/cpp/memory/new/set_new_handler/)
- [new_handler](/cpp/memory/new/new_handler/)
