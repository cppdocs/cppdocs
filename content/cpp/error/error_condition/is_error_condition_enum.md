---
title: "std::is_error_condition_enum"
source_path: "cpp/error/error_condition/is_error_condition_enum"
header: "<system_error>"
category: "error"
since: "C++11"
---

If T is an error condition enum (such as [std::errc](/cpp/error/errc/)), this template provides the member constant value equal true. For any other type, value is false.

## Declarations
```cpp
template< class T >
struct is_error_condition_enum;
```
_(since C++11)_

## See also
- [is_error_code_enum](/cpp/error/error_code/is_error_code_enum/)
