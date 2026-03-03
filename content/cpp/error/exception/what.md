---
title: "std::exception::what"
source_path: "cpp/error/exception/what"
category: "error"
---

Returns the explanatory string.

## Declarations
```cpp
virtual const char* what() const throw();
```
_(until C++11)_

```cpp
virtual const char* what() const noexcept;
```
_(since C++11) (constexpr since C++26)_

## Return value
Pointer to a null-terminated string with explanatory information. The pointer is guaranteed to be valid at least until the exception object from which it is obtained is destroyed, or until a non-const member function on the exception object is called.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 108 | C++98 | it was unspecified when the returned pointer becomes invalid | specified |
