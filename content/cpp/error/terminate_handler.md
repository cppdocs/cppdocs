---
title: "std::terminate_handler"
source_path: "cpp/error/terminate_handler"
header: "<exception>"
category: "error"
---

std::terminate_handler is the function pointer type (pointer to function that takes no arguments and returns void), which is installed and queried by the functions [std::set_terminate](/cpp/error/set_terminate/) and [std::get_terminate](/cpp/error/get_terminate/) and called by [std::terminate](/cpp/error/terminate/).

## Declarations
```cpp
typedef void ( *terminate_handler )();
```

## Example
This section is incompleteReason: no example

## See also
- [terminate](/cpp/error/terminate/)
- [set_terminate](/cpp/error/set_terminate/)
- [std::terminate](/cpp/error/terminate/)
- [get_terminate](/cpp/error/get_terminate/)
