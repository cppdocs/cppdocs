---
title: "std::get_unexpected"
source_path: "cpp/error/exception/get_unexpected"
header: "<exception>"
category: "error"
---

Returns the currently installed [std::unexpected_handler](/cpp/error/exception/unexpected_handler/), which may be a null pointer.

## Declarations
```cpp
std::unexpected_handler get_unexpected() noexcept;
```
_(deprecated in C++11) (removed in C++17)_

## Return value
The currently installed [std::unexpected_handler](/cpp/error/exception/unexpected_handler/).

## See also
- [unexpected_handler](/cpp/error/exception/unexpected_handler/)
- [std::unexpected](/cpp/error/unexpected/)
- [set_unexpected](/cpp/error/exception/set_unexpected/)
- [std::unexpected](/cpp/error/unexpected/)
