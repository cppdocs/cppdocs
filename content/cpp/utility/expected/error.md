---
title: "std::expected<T,E>::error"
source_path: "cpp/utility/expected/error"
category: "utility"
since: "C++23"
---

Accesses the unexpected value contained in *this.

## Declarations
```cpp
constexpr const E& error() const& noexcept;
```
_(since C++23)_

```cpp
constexpr E& error() & noexcept;
```
_(since C++23)_

```cpp
constexpr const E&& error() const&& noexcept;
```
_(since C++23)_

```cpp
constexpr E&& error() && noexcept;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [error_or](/cpp/utility/expected/error_or/)
- [operator->operator*](/cpp/utility/expected/operator/)
- [value](/cpp/utility/expected/value/)
- [operator boolhas_value](/cpp/utility/expected/operator_bool/)
