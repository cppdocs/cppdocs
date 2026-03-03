---
title: "std::any_cast"
source_path: "cpp/utility/any/any_cast"
header: "<any>"
category: "utility"
since: "C++17"
---

Performs type-safe access to the contained object.

## Declarations
```cpp
template< class T >
T any_cast( const any& operand );
```
_(since C++17)_

```cpp
template< class T >
T any_cast( any& operand );
```
_(since C++17)_

```cpp
template< class T >
T any_cast( any&& operand );
```
_(since C++17)_

```cpp
template< class T >
const T* any_cast( const any* operand ) noexcept;
```
_(since C++17)_

```cpp
template< class T >
T* any_cast( any* operand ) noexcept;
```
_(since C++17)_

## Parameters
- `operand`: target any object

## Example
```cpp
#include <any>
#include <iostream>
#include <string>
#include <type_traits>
#include <utility>
 
int main()
{
    // Simple example
    auto a1 = std::any(12);
    std::cout << "1) a1 is int: " << std::any_cast<int>(a1) << '\n';
 
    try
    {
        auto s = std::any_cast<std::string>(a1); // throws
    }
    catch (const std::bad_any_cast& e)
    {
        std::cout << "2) " << e.what() << '\n';
    }
 
    // Pointer example
    if (int* i = std::any_cast<int>(&a1))
        std::cout << "3) a1 is int: " << *i << '\n';
    else if (std::string* s = std::any_cast<std::string>(&a1))
        std::cout << "3) a1 is std::string: " << *s << '\n';
    else
        std::cout << "3) a1 is another type or unset\n";
 
    // Advanced example
    a1 = std::string("hello");
    auto& ra = std::any_cast<std::string&>(a1); // reference
    ra[1] = 'o';
 
    std::cout << "4) a1 is string: "
              << std::any_cast<const std::string&>(a1) << '\n'; // const reference
 
    auto s1 = std::any_cast<std::string&&>(std::move(a1)); // rvalue reference
    // Note: “s1” is a move-constructed std::string:
    static_assert(std::is_same_v<decltype(s1), std::string>);
 
    // Note: the std::string in “a1” is left in valid but unspecified state
    std::cout << "5) a1.size(): "
              << std::any_cast<std::string>(&a1)->size() // pointer
              << '\n'
              << "6) s1: " << s1 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3305 | C++17 | the behavior of overloads (4,5) was unclear if T is void | the program ill-formed in this case |
