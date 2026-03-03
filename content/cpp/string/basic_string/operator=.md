---
title: "std::basic_string<CharT,Traits,Allocator>::operator="
source_path: "cpp/string/basic_string/operator"
category: "string"
since: "C++23"
---

Replaces the contents of the string.

## Declarations
```cpp
basic_string& operator=( const basic_string& str );
```
_(constexpr since C++20)_

```cpp
basic_string& operator=( basic_string&& str )
noexcept(/* see below */);
```
_(since C++11) (constexpr since C++20)_

```cpp
basic_string& operator=( const CharT* s );
```
_(constexpr since C++20)_

```cpp
basic_string& operator=( CharT ch );
```
_(constexpr since C++20)_

```cpp
basic_string& operator=( std::initializer_list<CharT> ilist );
```
_(since C++11) (constexpr since C++20)_

```cpp
template<class StringViewLike>
basic_string& operator=( const StringViewLike& t );
```
_(since C++17) (constexpr since C++20)_

```cpp
basic_string& operator=( std::nullptr_t ) = delete;
```
_(since C++23)_

## Parameters
- `ch`: value to initialize characters of the string with
- `str`: string to be used as source to initialize the string with
- `s`: pointer to a null-terminated character string to use as source to initialize the string with
- `ilist`: std::initializer_list to initialize the string with
- `t`: object convertible to std::basic_string_view to initialize the string with

## Return value
*this

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
 
int main()
{
    std::string str1;
    std::string str2{"alpha"};
 
    // (1) operator=(const basic_string&);
    str1 = str2;
    std::cout << std::quoted(str1) << ' '   // "alpha"
              << std::quoted(str2) << '\n'; // "alpha"
 
    // (2) operator=(basic_string&&);
    str1 = std::move(str2);
    std::cout << std::quoted(str1) << ' '   // "alpha"
              << std::quoted(str2) << '\n'; // "" or "alpha" (unspecified)
 
    // (3) operator=(const CharT*);
    str1 = "beta";
    std::cout << std::quoted(str1) << '\n'; // "beta"
 
    // (4) operator=(CharT);
    str1 = '!'; 
    std::cout << std::quoted(str1) << '\n'; // "!"
 
    // (5) operator=(std::initializer_list<CharT>);
    str1 = {'g', 'a', 'm', 'm', 'a'};
    std::cout << std::quoted(str1) << '\n'; // "gamma"
 
    // (6) operator=(const T&);
    str1 = 35U; // equivalent to str1 = static_cast<char>(35U);
    std::cout << std::quoted(str1) << '\n'; // "#" (ASCII = 35)
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2063 | C++11 | the move assignment operator did not followSequenceContainer's semantic requirement | follows |
| LWG 2946 | C++17 | overload (6) caused ambiguity in some cases | avoided by making it a template |

## See also
- [(constructor)](/cpp/string/basic_string/basic_string/)
- [assign](/cpp/string/basic_string/assign/)
- [operator=](/cpp/string/basic_string_view/operator/)
