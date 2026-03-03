---
title: "std::error_condition::message"
source_path: "cpp/error/error_condition/message"
category: "error"
since: "C++11"
---

Returns an explanatory message for the stored error value and error category. Effectively calls category().message(value()).

## Declarations
```cpp
std::string message() const;
```
_(since C++11)_

## Return value
An explanatory message for the stored error value and error category.

## See also
- [message](/cpp/error/error_category/message/)
