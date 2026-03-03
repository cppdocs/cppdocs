---
title: "std::is_error_code_enum<std::future_errc>"
source_path: "cpp/thread/future_errc/is_error_code_enum"
header: "<future>"
category: "thread"
since: "C++11"
---

Specifies that [std::future_errc](/cpp/thread/future_errc/) is an error code enum. This enables [std::error_code](/cpp/error/error_code/) automatic conversions.

## Declarations
```cpp
template<>
struct is_error_code_enum<std::future_errc> : std::true_type;
```
_(since C++11)_

## See also
- [is_error_code_enum](/cpp/error/error_code/is_error_code_enum/)
