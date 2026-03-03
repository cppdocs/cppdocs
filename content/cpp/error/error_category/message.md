---
title: "std::error_category::message"
source_path: "cpp/error/error_category/message"
category: "error"
since: "C++11"
---

Returns a string describing the given error condition for the error category represented by *this.

## Declarations
```cpp
virtual std::string message( int condition ) const = 0;
```
_(since C++11)_

## Parameters
- `condition`: specifies the error condition to describe

## Return value
A string describing the given error condition.
