---
title: "std::experimental::bad_optional_access"
source_path: "cpp/experimental/optional/bad_optional_access"
header: "<experimental/optional>"
category: "experimental"
---

Defines a type of object to be thrown by [std::experimental::optional::value](/cpp/experimental/optional/value/) when accessing an optional object that does not contain a value.

## Declarations
```cpp
class bad_optional_access;
```
_(library fundamentals TS)_

## Parameters
- `other`: another exception object to copy

## Return value
*this

## Notes
Implementations are allowed but not required to override what().
