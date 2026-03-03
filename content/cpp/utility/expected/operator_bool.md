---
title: "std::expected<T,E>::operator bool, std::expected<T,E>::has_value"
source_path: "cpp/utility/expected/operator_bool"
category: "utility"
since: "C++23"
---

Checks whether *this represents an expected value.

## Declarations
```cpp
constexpr explicit operator bool() const noexcept;
```
_(since C++23)_

```cpp
constexpr bool has_value() const noexcept;
```
_(since C++23)_

## Return value
[has_val](/cpp/utility/expected/#Data_members)

## Notes
A [std::expected](/cpp/utility/expected/) object is never valueless. If has_value() returns true, [operator*()](/cpp/utility/expected/operator/) can be used to access the expected value; otherwise, [error()](/cpp/utility/expected/error/) can be used to access the unexpected value.

## Example
This section is incompleteReason: no example

## See also
- [operator->operator*](/cpp/utility/expected/operator/)
- [error](/cpp/utility/expected/error/)
