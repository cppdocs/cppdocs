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
Returns `true` if the object currently contains an expected value and `false` otherwise.

## Notes
A [std::expected](/cpp/utility/expected/) object is never valueless. If has_value() returns true, [operator*()](/cpp/utility/expected/operator/) can be used to access the expected value; otherwise, [error()](/cpp/utility/expected/error/) can be used to access the unexpected value.

## See also
- [operator->, operator*](/cpp/utility/expected/operator/)
- [error](/cpp/utility/expected/error/)
