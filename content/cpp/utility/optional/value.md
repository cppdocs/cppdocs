---
title: "std::optional<T>::value"
source_path: "cpp/utility/optional/value"
category: "utility"
since: "C++17"
---

If *this contains a value, returns a reference to the contained value.

## Declarations
```cpp
constexpr T& value() &;
constexpr const T& value() const &;
```
_(since C++17)_

```cpp
constexpr T&& value() &&;
constexpr const T&& value() const &&;
```
_(since C++17)_

## Return value
A reference to the contained value.

## Notes
The dereference operator [operator*()](/cpp/utility/optional/operator/) does not check if this optional contains a value, which may be more efficient than value().

## Example
```cpp
#include <iostream>
#include <optional>
 
int main()
{
    std::optional<int> opt = {};
 
    try
    {
        [[maybe_unused]] int n = opt.value();
    }
    catch(const std::bad_optional_access& e)
    {
        std::cout << e.what() << '\n';
    }
 
    try
    {
        opt.value() = 42;
    }
    catch(const std::bad_optional_access& e)
    {
        std::cout << e.what() << '\n';
    }
 
    opt = 43;
    std::cout << *opt << '\n';
 
    opt.value() = 44;
    std::cout << opt.value() << '\n';
}
```

## See also
- [value_or](/cpp/utility/optional/value_or/)
- [operator->operator*](/cpp/utility/optional/operator/)
- [bad_optional_access](/cpp/utility/optional/bad_optional_access/)
