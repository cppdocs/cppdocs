---
title: "std::exception"
source_path: "cpp/error/exception"
header: "<exception>"
category: "error"
---

Provides consistent interface to handle errors through the [throw expression](/cpp/language/throw/).

## Declarations
```cpp
class exception;
```

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_constexpr_exceptions
202411L
(C++26)
constexpr for exception types

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 471 | C++98 | there was no requirement on standard library classes derived from std::exception | added |
