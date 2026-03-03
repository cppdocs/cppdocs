---
title: "std::error_category::equivalent"
source_path: "cpp/error/error_category/equivalent"
category: "error"
since: "C++11"
---

Checks whether error code is equivalent to an error condition for the error category represented by *this.

## Declarations
```cpp
virtual bool equivalent( int code,
const std::error_condition& condition ) const noexcept;
```
_(since C++11)_

```cpp
virtual bool equivalent( const std::error_code& code,
int condition ) const noexcept;
```
_(since C++11)_

## Parameters
- `code`: specifies the error code to compare
- `condition`: specifies the error condition to compare

## Return value
true if the error code is equivalent to the given error condition for the error category represented by *this, false otherwise.
