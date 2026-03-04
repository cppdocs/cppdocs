---
title: "std::bad_expected_access"
source_path: "cpp/utility/expected/bad_expected_access"
header: "<expected>"
category: "utility"
since: "C++23"
---

1) Defines a type of object to be thrown by [std::expected::value](/cpp/utility/expected/value/) when accessing an expected object that contains an unexpected value. bad_expected_access<E> stores a copy of the unexpected value.

## Declarations
```cpp
template< class E >
class bad_expected_access : public std::bad_expected_access<void>
```
_(since C++23)_

```cpp
template<>
class bad_expected_access<void> : public std::exception
```
_(since C++23)_

## Notes
Pointer to a null-terminated string with explanatory information. The string is suitable for conversion and display as a [std::wstring](/cpp/string/basic_string/). The pointer is guaranteed to be valid at least until the exception object from which it is obtained is destroyed, or until a non-const member function (e.g. copy assignment operator) on the exception object is called.

Implementations are allowed but not required to override what().
