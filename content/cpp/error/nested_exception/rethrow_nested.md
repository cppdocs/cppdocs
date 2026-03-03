---
title: "std::nested_exception::rethrow_nested"
source_path: "cpp/error/nested_exception/rethrow_nested"
category: "error"
---

Rethrows the stored exception. If there is no stored exceptions (i.e. [nested_ptr()](/cpp/error/nested_exception/nested_ptr/) returns null pointer), then [std::terminate](/cpp/error/terminate/) is called.

## Declarations
```cpp
[[noreturn]] void rethrow_nested() const;
```
_(since C++11) (constexpr since C++26)_

## Return value
(none)
