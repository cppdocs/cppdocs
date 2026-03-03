---
title: "std::swap(std::variant)"
source_path: "cpp/utility/variant/swap2"
header: "<variant>"
category: "utility"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::variant](/cpp/utility/variant/). Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class... Types >
void swap( std::variant<Types...>& lhs,
std::variant<Types...>& rhs ) noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `lhs, rhs`: variant objects whose values to swap

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
 
void print(auto const& v, char term = '\n')
{
    std::visit([](auto&& o) { std::cout << o; }, v);
    std::cout << term;
}
 
int main()
{
    std::variant<int, std::string> v1{123}, v2{"XYZ"};
    print(v1, ' ');
    print(v2);
 
    std::swap(v1, v2);
    print(v1, ' ');
    print(v2);
 
    std::variant<double, std::string> v3{3.14};
    // std::swap(v1, v3); // ERROR: ~ inconsistent parameter packs
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2231R1 | C++20 | swap was not constexpr while the required operations can be constexpr in C++20 | made constexpr |

## See also
- [swap](/cpp/utility/variant/swap/)
