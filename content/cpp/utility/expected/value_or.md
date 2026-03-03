---
title: "std::expected<T,E>::value_or"
source_path: "cpp/utility/expected/value_or"
category: "utility"
since: "C++23"
---

Returns the expected value if it exists, otherwise returns default_value.

## Declarations
```cpp
Primary template
```

```cpp
template< class U >
constexpr T value_or( U&& default_value ) const&;
```
_(since C++23)_

```cpp
template< class U >
constexpr T value_or( U&& default_value ) &&;
```
_(since C++23)_

## Parameters
- `default_value`: the value to use in case *this does not contain an expected value

## Example
This section is incompleteReason: no example

## See also
- [value](/cpp/utility/expected/value/)
