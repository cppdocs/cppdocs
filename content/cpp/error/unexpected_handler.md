---
title: "std::unexpected_handler"
source_path: "cpp/error/unexpected_handler"
header: "<exception>"
category: "error"
---

std::unexpected_handler is the function pointer type (pointer to function that takes no arguments and returns void), which is installed and queried by the functions [std::set_unexpected](/cpp/error/exception/set_unexpected/) and [std::get_unexpected](/cpp/error/exception/get_unexpected/) and called by [std::unexpected](/cpp/error/unexpected/).

## Declarations
```cpp
typedef void ( *unexpected_handler )();
```
_(deprecated in C++11) (removed in C++17)_

## See also
- [unexpected](/cpp/error/unexpected/)
- [set_unexpected](/cpp/error/exception/set_unexpected/)
- [std::unexpected](/cpp/error/unexpected/)
- [get_unexpected](/cpp/error/exception/get_unexpected/)
