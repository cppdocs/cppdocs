---
title: "std::optional<T>::value_or"
source_path: "cpp/utility/optional/value_or"
category: "utility"
since: "C++17"
---

Returns the contained value if *this has a value, otherwise returns default_value.

## Declarations
```cpp
template< class U >
constexpr T value_or( U&& default_value ) const&;
```
_(since C++17)_

```cpp
template< class U >
constexpr T value_or( U&& default_value ) &&;
```
_(since C++17)_

## Parameters
- `default_value`: the value to use in case *this is empty

## Return value
The current value if *this has a value, or default_value otherwise.

## Example
```cpp
#include <cstdlib>
#include <iostream>
#include <optional>
 
std::optional<const char*> maybe_getenv(const char* n)
{
    if (const char* x = std::getenv(n))
        return x;
    else
        return {};
}
 
int main()
{
    std::cout << maybe_getenv("SHELL").value_or("(none)") << '\n';
    std::cout << maybe_getenv("MYPWD").value_or("(none)") << '\n';
}
```

## See also
- [value](/cpp/utility/optional/value/)
