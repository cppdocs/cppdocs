---
title: "std::experimental::optional<T>::value"
source_path: "cpp/experimental/optional/value"
category: "experimental"
---

Returns the contained value.

## Declarations
```cpp
constexpr T& value() &;
constexpr const T & value() const &;
```
_(library fundamentals TS)_

```cpp
constexpr T&& value() &&;
constexpr const T&& value() const &&;
```
_(library fundamentals TS)_

## Return value
A reference to the contained value.

## Notes
The dereference operator [operator*()](/cpp/experimental/optional/operator/) does not check if this optional contains a value, which may be more efficient than value().

## Example
```cpp
#include <experimental/optional>
#include <iostream>
 
int main()
{
    std::experimental::optional<int> opt = {};
 
    try
    {
        int n = opt.value();
    }
    catch (const std::logic_error& e)
    {
        std::cout << e.what() << '\n';
    }
}
```

## See also
- [value_or](/cpp/experimental/optional/value_or/)
- [operator->operator*](/cpp/experimental/optional/operator/)
- [bad_optional_access](/cpp/experimental/optional/bad_optional_access/)
