---
title: "std::experimental::optional<T>::value_or"
source_path: "cpp/experimental/optional/value_or"
category: "experimental"
---

Returns the contained value if *this has a value, otherwise returns default_value.

## Declarations
```cpp
template< class U >
constexpr T value_or( U&& default_value ) const&;
```
_(library fundamentals TS)_

```cpp
template< class U >
constexpr T value_or( U&& default_value ) &&;
```
_(library fundamentals TS)_

## Parameters
- `default_value`: the value to use in case *this is empty

## Return value
The current value if *this has a value, or default_value otherwise.

## Example
```cpp
#include <cstdlib>
#include <experimental/optional>
#include <iostream>
 
std::experimental::optional<const char*> maybe_getenv(const char* n)
{
    if (const char* x = std::getenv(n))
        return x;
    else
        return {};
}
 
int main()
{
    std::cout << maybe_getenv("MYPWD").value_or("(none)") << '\n';
}
```

## See also
- [value](/cpp/experimental/optional/value/)
