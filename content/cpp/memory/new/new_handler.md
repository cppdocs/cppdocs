---
title: "std::new_handler"
source_path: "cpp/memory/new/new_handler"
header: "<new>"
category: "memory"
---

std::new_handler is the function pointer type (pointer to function that takes no arguments and returns void), which is used by the functions [std::set_new_handler](/cpp/memory/new/set_new_handler/) and [std::get_new_handler](/cpp/memory/new/get_new_handler/).

## Declarations
```cpp
typedef void (*new_handler)();
```

## See also
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
- [set_new_handler](/cpp/memory/new/set_new_handler/)
- [get_new_handler](/cpp/memory/new/get_new_handler/)
