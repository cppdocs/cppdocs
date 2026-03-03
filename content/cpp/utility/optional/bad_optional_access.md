---
title: "std::bad_optional_access"
source_path: "cpp/utility/optional/bad_optional_access"
header: "<optional>"
category: "utility"
since: "C++17"
---

Defines a type of object to be thrown by [std::optional::value](/cpp/utility/optional/value/) when accessing an optional object that does not contain a value.

## Declarations
```cpp
class bad_optional_access;
```
_(since C++17)_

## Parameters
- `other`: another exception object to copy

## Return value
*this

## Notes
Implementations are allowed but not required to override what().
