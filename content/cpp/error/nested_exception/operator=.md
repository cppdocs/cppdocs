---
title: "std::nested_exception::operator="
source_path: "cpp/error/nested_exception/operator"
category: "error"
---

Replaces the stored exception with the one held in other.

## Declarations
```cpp
nested_exception& operator=( const nested_exception& other ) noexcept = default;
```
_(since C++11) (constexpr since C++26)_

## Parameters
- `other`: nested exception to replace the contents with

## Return value
*this
