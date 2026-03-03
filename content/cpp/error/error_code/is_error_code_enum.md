---
title: "std::is_error_code_enum"
source_path: "cpp/error/error_code/is_error_code_enum"
header: "<system_error>"
category: "error"
since: "C++11"
---

If T is an error code enumeration (such as [std::io_errc](/cpp/io/io_errc/) and [std::future_errc](/cpp/thread/future_errc/)), this template provides the member constant value equal true. For any other type, value is false.

## Declarations
```cpp
template< class T >
struct is_error_code_enum;
```
_(since C++11)_

## See also
- [is_error_condition_enum](/cpp/error/error_condition/is_error_condition_enum/)
- [std::error_condition](/cpp/error/error_condition/)
