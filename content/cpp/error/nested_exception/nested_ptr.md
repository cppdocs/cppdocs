---
title: "std::nested_exception::nested_ptr"
source_path: "cpp/error/nested_exception/nested_ptr"
category: "error"
---

Returns a pointer to the stored exception, if any.

## Declarations
```cpp
std::exception_ptr nested_ptr() const noexcept;
```
_(since C++11) (constexpr since C++26)_

## Return value
A std::exception_ptr to the stored exception if one is stored, default-initialized std::exception_ptr otherwise.
