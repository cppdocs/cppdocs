---
title: "std::expected<T,E>::error_or"
source_path: "cpp/utility/expected/error_or"
category: "utility"
since: "C++23"
---

Returns the unexpected value if it exists, otherwise returns default_value.

## Declarations
```cpp
template< class G = E >
constexpr E error_or( G&& default_value ) const&;
```
_(since C++23)_

```cpp
template< class G = E >
constexpr E error_or( G&& default_value ) &&;
```
_(since C++23)_

## Parameters
- `default_value`: the value to use in case *this does not contain an unexpected value

## Example
This section is incompleteReason: no example

## See also
- [error](/cpp/utility/expected/error/)
