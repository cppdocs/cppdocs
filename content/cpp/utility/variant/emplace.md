---
title: "std::variant<Types...>::emplace"
source_path: "cpp/utility/variant/emplace"
category: "utility"
---

Creates a new value in-place, in an existing variant object

## Declarations
```cpp
template< class T, class... Args >
T& emplace( Args&&... args );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class T, class U, class... Args >
T& emplace( std::initializer_list<U> il, Args&&... args );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< std::size_t I, class... Args >
std::variant_alternative_t<I, variant>& emplace( Args&&... args );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< std::size_t I, class U, class... Args >
std::variant_alternative_t<I, variant>&
emplace( std::initializer_list<U> il, Args&&... args );
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `args`: constructor arguments to use when constructing the new value
- `il`: initializer_list argument to use when constructing the new value

## Return value
A reference to the new contained value.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_variant
202106L
(C++20)(DR)
Fully constexpr std::variant (1-4)

## Example
```cpp
#include <iostream>
#include <string>
#include <variant>
 
int main()
{
    std::variant<std::string> v1;
    v1.emplace<0>("abc"); // OK
    std::cout << std::get<0>(v1) << '\n';
    v1.emplace<std::string>("def"); // OK
    std::cout << std::get<0>(v1) << '\n';
 
    std::variant<std::string, std::string> v2;
    v2.emplace<1>("ghi"); // OK
    std::cout << std::get<1>(v2) << '\n';
    // v2.emplace<std::string>("abc"); -> Error
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2231R1 | C++20 | emplace was not constexpr while the required operations can be constexpr in C++20 | made constexpr |

## See also
- [operator=](/cpp/utility/variant/operator/)
