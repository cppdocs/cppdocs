---
title: "std::is_error_condition_enum<std::errc>"
source_path: "cpp/error/errc/is_error_condition_enum"
header: "<system_error>"
category: "error"
since: "C++11"
---

Specifies that [std::errc](/cpp/error/errc/) is an error condition enum. This enables implicit conversion to [std::error_condition](/cpp/error/error_condition/).

## Declarations
```cpp
template<>
struct is_error_condition_enum<std::errc> : std::true_type;
```
_(since C++11)_

## See also
- [is_error_condition_enum](/cpp/error/error_condition/is_error_condition_enum/)
- [std::error_condition](/cpp/error/error_condition/)
