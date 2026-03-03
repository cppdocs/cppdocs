---
title: "std::get_terminate"
source_path: "cpp/error/get_terminate"
header: "<exception>"
category: "error"
since: "C++11"
---

Returns the currently installed [std::terminate_handler](/cpp/error/terminate_handler/), which may be a null pointer.

## Declarations
```cpp
std::terminate_handler get_terminate() noexcept;
```
_(since C++11)_

## Return value
The currently installed [std::terminate_handler](/cpp/error/terminate_handler/).

## Example
This section is incompleteReason: no example

## See also
- [terminate_handler](/cpp/error/terminate_handler/)
- [std::terminate](/cpp/error/terminate/)
- [set_terminate](/cpp/error/set_terminate/)
- [std::terminate](/cpp/error/terminate/)
