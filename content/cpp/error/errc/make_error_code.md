---
title: "std::make_error_code(std::errc)"
source_path: "cpp/error/errc/make_error_code"
header: "<system_error>"
category: "error"
since: "C++11"
---

Creates error code value for errc enum e.

## Declarations
```cpp
std::error_code make_error_code( std::errc e ) noexcept;
```
_(since C++11)_

## Parameters
- `e`: error code enum to create error code for

## Return value
Error code corresponding to e.

## See also
- [make_error_code(std::io_errc)](/cpp/io/io_errc/make_error_code/)
- [make_error_code(std::future_errc)](/cpp/thread/future_errc/make_error_code/)
