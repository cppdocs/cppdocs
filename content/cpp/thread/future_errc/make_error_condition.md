---
title: "std::make_error_condition(std::future_errc)"
source_path: "cpp/thread/future_errc/make_error_condition"
header: "<future>"
category: "thread"
since: "C++11"
---

Constructs an [std::error_condition](/cpp/error/error_condition/) object from a value of type [std::future_errc](/cpp/thread/future_errc/) as if by:

## Declarations
```cpp
std::error_condition make_error_condition( std::future_errc e );
```
_(since C++11)_

## Parameters
- `e`: error code number

## Return value
A value of type [std::error_condition](/cpp/error/error_condition/) that holds the error code number from e associated with the error category "future".

## Example
This section is incompleteReason: no example

## See also
- [error_condition](/cpp/error/error_condition/)
- [future_errc](/cpp/thread/future_errc/)
