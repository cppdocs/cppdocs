---
title: "std::variant<Types...>::operator="
source_path: "cpp/utility/variant/operator"
category: "utility"
since: "C++17"
---

Assigns a new value to an existing variant object.

## Declarations
```cpp
constexpr variant& operator=( const variant& rhs );
```
_(since C++17)_

```cpp
constexpr variant& operator=( variant&& rhs ) noexcept(/* see below */);
```
_(since C++17)_

```cpp
template< class T >
variant& operator=( T&& t ) noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `rhs`: another variant
- `t`: a value convertible to one of the variant's alternatives

## Return value
*this

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_variant
202106L
(C++20)(DR)
Fully constexpr std::variant (3)

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
#include <type_traits>
#include <variant>
 
std::ostream& operator<<(std::ostream& os, std::variant<int, std::string> const& va)
{
    os << ": { ";
 
    std::visit([&](auto&& arg)
    {
        using T = std::decay_t<decltype(arg)>;
        if constexpr (std::is_same_v<T, int>)
            os << arg;
        else if constexpr (std::is_same_v<T, std::string>)
            os << std::quoted(arg);
    }, va);
 
    return os << " };\n";
}
 
int main()
{
    std::variant<int, std::string> a{2017}, b{"CppCon"};
    std::cout << "a" << a << "b" << b << '\n';
 
    std::cout << "(1) operator=( const variant& rhs )\n";
    a = b;
    std::cout << "a" << a << "b" << b << '\n';
 
    std::cout << "(2) operator=( variant&& rhs )\n";
    a = std::move(b);
    std::cout << "a" << a << "b" << b << '\n';
 
    std::cout << "(3) operator=( T&& t ), where T is int\n";
    a = 2019;
    std::cout << "a" << a << '\n';
 
    std::cout << "(3) operator=( T&& t ), where T is std::string\n";
    std::string s{"CppNow"};
    std::cout << "s: " << std::quoted(s) << '\n';
    a = std::move(s);
    std::cout << "a" << a << "s: " << std::quoted(s) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3024 | C++17 | copy assignment operator doesn't participate in overload resolutionif any member type is not copyable | defined as deleted instead |
| LWG 3585 | C++17 | converting assignment was sometimes unexpectedly ill-formedbecause there was no available move assignment | made well-formed |
| P0602R4 | C++17 | copy/move assignment may not be trivialeven if underlying operations are trivial | required to propagate triviality |
| P0608R3 | C++17 | converting assignment blindly assembles an overload set,leading to unintended conversions | narrowing and boolean conversionsnot considered |
| P2231R1 | C++20 | converting assignment (3) was not constexprwhile the required operations can be constexpr in C++20 | made constexpr |

## See also
- [emplace](/cpp/utility/variant/emplace/)
