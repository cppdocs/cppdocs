---
title: "std::variant<Types...>::variant"
source_path: "cpp/utility/variant/variant"
category: "utility"
since: "C++17"
---

Constructs a new variant object.

## Declarations
```cpp
constexpr variant() noexcept(/* see below */);
```
_(since C++17)_

```cpp
constexpr variant( const variant& other );
```
_(since C++17)_

```cpp
constexpr variant( variant&& other ) noexcept(/* see below */);
```
_(since C++17)_

```cpp
template< class T >
constexpr variant( T&& t ) noexcept(/* see below */);
```
_(since C++17)_

```cpp
template< class T,
class... Args >
constexpr explicit variant( std::in_place_type_t<T>,
Args&&... args );
```
_(since C++17)_

```cpp
template< class T,
class U,
class... Args >
constexpr explicit variant( std::in_place_type_t<T>,
std::initializer_list<U> il,
Args&&... args );
```
_(since C++17)_

```cpp
template< std::size_t I,
class... Args >
constexpr explicit variant( std::in_place_index_t<I>,
Args&&... args );
```
_(since C++17)_

```cpp
template< std::size_t I,
class U,
class... Args >
constexpr explicit variant( std::in_place_index_t<I>,
std::initializer_list<U> il,
Args&&... args );
```
_(since C++17)_

## Parameters
- `other`: another variant object whose contained value to copy/move
- `t`: value to initialize the contained value with
- `args...`: arguments to initialize the contained value with
- `il`: initializer list to initialize the contained value with

## Notes
MSVC STL initially treated [P0608R3](https://wg21.link/P0608R3) as a change in C++20. As of VS 2022 17.12, MSVC STL also treats P0608R3 as a defect report against C++17.

## Example
```cpp
#include <cassert>
#include <iostream>
#include <string>
#include <variant>
#include <vector>
 
using vector_t = std::vector<int>;
 
auto& operator<<(auto& out, const vector_t& v)
{
    out << "{ ";
    for (int e : v)
        out << e << ' ';
    return out << '}';
}
 
int main()
{
    // value-initializes first alternative
    std::variant<int, std::string> var0;
    assert(std::holds_alternative<int>(var0) and
           var0.index() == 0 and
           std::get<int>(var0) == 0);
 
    // initializes first alternative with std::string{"STR"};
    std::variant<std::string, int> var1{"STR"};
    assert(var1.index() == 0);
    std::cout << "1) " << std::get<std::string>(var1) << '\n';
 
    // initializes second alternative with int == 42;
    std::variant<std::string, int> var2{42};
    assert(std::holds_alternative<int>(var2));
    std::cout << "2) " << std::get<int>(var2) << '\n';
 
    // initializes first alternative with std::string{4, 'A'};
    std::variant<std::string, vector_t, float> var3
    {
        std::in_place_type<std::string>, 4, 'A'
    };
    assert(var3.index() == 0);
    std::cout << "3) " << std::get<std::string>(var3) << '\n';
 
    // initializes second alternative with std::vector{1,2,3,4,5};
    std::variant<std::string, vector_t, char> var4
    {
        std::in_place_type<vector_t>, {1, 2, 3, 4, 5}
    };
    assert(var4.index() == 1);
    std::cout << "4) " << std::get<vector_t>(var4) << '\n';
 
    // initializes first alternative with std::string{"ABCDE", 3};
    std::variant<std::string, vector_t, bool> var5 {std::in_place_index<0>, "ABCDE", 3};
    assert(var5.index() == 0);
    std::cout << "5) " << std::get<std::string>(var5) << '\n';
 
    // initializes second alternative with std::vector(4, 42);
    std::variant<std::string, vector_t, char> var6 {std::in_place_index<1>, 4, 42};
    assert(std::holds_alternative<vector_t>(var6));
    std::cout << "6) " << std::get<vector_t>(var6) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2901 | C++17 | allocator-aware constructors provided butvariant can't properly support allocators | constructors removed |
| P0739R0 | C++17 | converting constructor template interactspoorly with class template argument deduction | constraint added |
| LWG 3024 | C++17 | copy constructor doesn't participate inoverload resolution if any member type is not copyable | defined as deleted instead |
| P0602R4 | C++17 | copy/move constructors may not betrivial even if underlying constructors are trivial | required to propagate triviality |
| P0608R3 | C++17 | converting constructor blindly assemblesan overload set, leading to unintended conversions | narrowing and boolean conversions not considered |
| P1957R2 | C++17 | converting constructor for bool did not allowimplicit conversion | Pointer to bool conversion is narrowing andconverting constructor has noexception for bool |
