---
title: "std::experimental::bad_any_cast"
source_path: "cpp/experimental/any/bad_any_cast"
header: "<experimental/any>"
category: "experimental"
---

Defines a type of object to be thrown by the value-returning forms of [std::experimental::any_cast](/cpp/experimental/any/any_cast/) on failure.

## Declarations
```cpp
class bad_any_cast : public std::bad_cast;
```
_(library fundamentals TS)_

## Parameters
- `other`: another exception object to copy

## Return value
*this

## Notes
Implementations are allowed but not required to override what().
