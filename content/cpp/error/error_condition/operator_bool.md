---
title: "std::error_condition::operator bool"
source_path: "cpp/error/error_condition/operator_bool"
category: "error"
since: "C++11"
---

Checks whether the stored error value is not zero.

## Declarations
```cpp
explicit operator bool() const noexcept;
```
_(since C++11)_

## Return value
true if value != 0, false otherwise.
