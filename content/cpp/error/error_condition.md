---
title: "std::error_condition"
source_path: "cpp/error/error_condition"
header: "<system_error>"
category: "error"
since: "C++11"
---

std::error_condition holds a platform-independent value identifying an error condition. Like [std::error_code](/cpp/error/error_code/), it is uniquely identified by an integer value and a [std::error_category](/cpp/error/error_category/), but unlike [std::error_code](/cpp/error/error_code/), the value is not platform-dependent.

## Declarations
```cpp
class error_condition;
```
_(since C++11)_

## Notes
The [comparison](/cpp/error/error_condition/operator_cmp/) between a [std::error_code](/cpp/error/error_code/) and a std::error_condition is defined by their error categories. Notably, an error condition of [std::generic_category](/cpp/error/generic_category/) may compare equal to an error code of a specific category (e.g. [std::system_category](/cpp/error/system_category/)), if they represent the same kind of error.

A [std::errc](/cpp/error/errc/) value can be compared to an error code via implicit conversion to std::error_condition.

Possible output:

## See also
- [error_code](/cpp/error/error_code/)
- [error_category](/cpp/error/error_category/)
- [make_error_condition(std::errc)](/cpp/error/errc/make_error_condition/)
