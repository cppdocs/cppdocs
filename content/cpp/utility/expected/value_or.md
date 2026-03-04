---
title: "std::expected<T,E>::value_or"
source_path: "cpp/utility/expected/value_or"
category: "utility"
since: "C++23"
---

Returns the expected value if it exists, otherwise returns default_value.

## Declarations
### Primary template

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

## Return value
1. For the `const&` overload, `has_value() ? **this : static_cast<T>(std::forward<U>(default_value))`.
2. For the `&&` overload, `has_value() ? std::move(**this) : static_cast<T>(std::forward<U>(default_value))`.

## Notes
These member functions exist only on the primary template. `std::expected<void, E>` does not provide `value_or()`.

1. The `const&` overload requires that `T` is copy-constructible and that `U` is convertible to `T`; otherwise the program is ill-formed.
2. The `&&` overload requires that `T` is move-constructible and that `U` is convertible to `T`; otherwise the program is ill-formed.

## Example
```cpp
#include <expected>
#include <iostream>
#include <string>

std::expected<int, std::string> parse_port(bool ok)
{
    if (ok)
        return 8080;
    return std::unexpected("invalid configuration");
}

int main()
{
    std::cout << parse_port(true).value_or(80) << '\n';
    std::cout << parse_port(false).value_or(80) << '\n';
}
```

## See also
- [value](/cpp/utility/expected/value/)
