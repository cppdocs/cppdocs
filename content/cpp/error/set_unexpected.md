---
title: "std::set_unexpected"
source_path: "cpp/error/set_unexpected"
header: "<exception>"
category: "error"
---

Makes f the new global [std::unexpected_handler](/cpp/error/exception/unexpected_handler/) and returns the previously installed [std::unexpected_handler](/cpp/error/exception/unexpected_handler/).

## Declarations
```cpp
std::unexpected_handler set_unexpected( std::unexpected_handler f ) throw();
```
_(until C++11)_

```cpp
std::unexpected_handler set_unexpected( std::unexpected_handler f ) noexcept;
```
_(deprecated in C++11) (removed in C++17)_

## Parameters
- `f`: pointer to function of type std::unexpected_handler, or null pointer

## Return value
The previously-installed unexpected handler, or a null pointer value if none was installed.

## See also
- [unexpected](/cpp/error/unexpected/)
- [get_unexpected](/cpp/error/exception/get_unexpected/)
- [unexpected_handler](/cpp/error/exception/unexpected_handler/)
- [std::unexpected](/cpp/error/unexpected/)
