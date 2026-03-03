---
title: "std::error_condition::assign"
source_path: "cpp/error/error_condition/assign"
category: "error"
since: "C++11"
---

Assigns contents to an error condition. Sets the error value to val and error category to cat.

## Declarations
```cpp
void assign( int val, const error_category& cat ) noexcept;
```
_(since C++11)_

## Parameters
- `val`: error value
- `cat`: error category

## Return value
(none)
