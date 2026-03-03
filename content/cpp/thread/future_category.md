---
title: "std::future_category"
source_path: "cpp/thread/future_category"
header: "<future>"
category: "thread"
since: "C++11"
---

Obtains a reference to the static error category object for the errors related to futures and promises. The object is required to override the virtual function error_category::name() to return a pointer to the string "future". It is used to identify error codes provided in the exceptions of type [std::future_error](/cpp/thread/future_error/).

## Declarations
```cpp
const std::error_category& future_category() noexcept;
```
_(since C++11)_

## Return value
A reference to the static object of unspecified runtime type, derived from [std::error_category](/cpp/error/error_category/).

## Example
This section is incompleteReason: no example

## See also
- [future_errc](/cpp/thread/future_errc/)
- [future_error](/cpp/thread/future_error/)
- [error_category](/cpp/error/error_category/)
