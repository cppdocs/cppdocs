---
title: "std::error_code"
source_path: "cpp/error/error_code"
header: "<system_error>"
---

std::error_code represents a platform-dependent error code value. Each std::error_code object holds an error code value originating from the operating system or some low-level interface and a pointer to an object of type [std::error_category](/cpp/error/error_category/), which corresponds to the said interface. The error code values are not required to be unique across different error categories.

## Declarations
```cpp
class error_code;
```
_(since C++11)_

## See also
- [error_condition](/cpp/error/error_condition/)
- [error_category](/cpp/error/error_category/)
- [make_error_code(std::errc)](/cpp/error/errc/make_error_code/)
