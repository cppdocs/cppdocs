---
title: "std::error_category::name"
source_path: "cpp/error/error_category/name"
category: "error"
since: "C++11"
---

Returns a pointer to a null-terminated byte string that specifies the name of the error category.

## Declarations
```cpp
virtual const char* name() const noexcept = 0;
```
_(since C++11)_

## Return value
Null-terminated byte string specifying the name of the error category.
