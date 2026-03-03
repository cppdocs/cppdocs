---
title: "std::variant<Types...>::swap"
source_path: "cpp/utility/variant/swap"
category: "utility"
---

Swaps two [variant](/cpp/utility/variant/) objects.

## Declarations
```cpp
void swap( variant& rhs ) noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `rhs`: a variant object to swap with

## Return value
(none)

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_variant
202106L
(C++20)(DR)
Fully constexpr std::variant

## Example
```cpp
#include <iostream>
#include <string>
#include <variant>
 
int main()
{
    std::variant<int, std::string> v1{2}, v2{"abc"};
    std::visit([](auto&& x) { std::cout << x << ' '; }, v1);
    std::visit([](auto&& x) { std::cout << x << '\n'; }, v2);
    v1.swap(v2);
    std::visit([](auto&& x) { std::cout << x << ' '; }, v1);
    std::visit([](auto&& x) { std::cout << x << '\n'; }, v2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2231R1 | C++20 | swap was not constexpr while non-trivial destructors can be constexpr in C++20 | made constexpr |

## See also
- [std::swap(std::variant)](/cpp/utility/variant/swap2/)
- [std::swap](/cpp/utility/swap/)
