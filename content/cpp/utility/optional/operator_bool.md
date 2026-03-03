---
title: "std::optional<T>::operator bool, std::optional<T>::has_value"
source_path: "cpp/utility/optional/operator_bool"
category: "utility"
since: "C++17"
---

Checks whether *this contains a value.

## Declarations
```cpp
constexpr explicit operator bool() const noexcept;
```
_(since C++17)_

```cpp
constexpr bool has_value() const noexcept;
```
_(since C++17)_

## Return value
true if *this contains a value, false if *this does not contain a value.

## Example
```cpp
#include <optional>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    std::optional<int> opt;
    std::cout << opt.has_value() << '\n';
 
    opt = 43;
    if (opt)
        std::cout << "value set to " << opt.value() << '\n';
    else
        std::cout << "value not set\n";
 
    opt.reset();
    if (opt.has_value())
        std::cout << "value still set to " << opt.value() << '\n';
    else
        std::cout << "value no longer set\n";
}
```
