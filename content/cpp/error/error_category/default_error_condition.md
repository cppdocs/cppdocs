---
title: "std::error_category::default_error_condition"
source_path: "cpp/error/error_category/default_error_condition"
category: "error"
since: "C++11"
---

Returns the error condition for the given error value.

## Declarations
```cpp
virtual std::error_condition default_error_condition( int val ) const noexcept;
```
_(since C++11)_

## Parameters
- `val`: error value for which to return error condition

## Return value
The error condition for the given error code.
