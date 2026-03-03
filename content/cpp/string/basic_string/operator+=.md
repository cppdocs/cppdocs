---
title: "std::basic_string<CharT,Traits,Allocator>::operator+="
source_path: "cpp/string/basic_string/operator"
category: "string"
---

Appends additional characters to the string.

## Declarations
```cpp
basic_string& operator+=( const basic_string& str );
```
_(constexpr since C++20)_

```cpp
basic_string& operator+=( CharT ch );
```
_(constexpr since C++20)_

```cpp
basic_string& operator+=( const CharT* s );
```
_(constexpr since C++20)_

```cpp
basic_string& operator+=( std::initializer_list<CharT> ilist );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class StringViewLike >
basic_string& operator+=( const StringViewLike& t );
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `str`: string to append
- `ch`: character value to append
- `s`: pointer to a null-terminated character string to append
- `ilist`: std::initializer_list with the characters to append
- `t`: object (convertible to std::basic_string_view) with the characters to append

## Return value
*this

## Notes
Overload (2) can accept any types that are implicitly convertible to CharT. For std::string, where CharT is char, the set of acceptable types includes all arithmetic types. This may have unintended effects.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
 
int main()
{
    std::string str;
 
    // reserve sufficient storage space to avoid memory reallocation
    str.reserve(50);
 
    std::cout << std::quoted(str) << '\n'; // empty string
 
    str += "This";
    std::cout << std::quoted(str) << '\n';
 
    str += std::string(" is ");
    std::cout << std::quoted(str) << '\n';
 
    str += 'a';
    std::cout << std::quoted(str) << '\n';
 
    str += {' ', 's', 't', 'r', 'i', 'n', 'g', '.'};
    std::cout << std::quoted(str) << '\n';
 
    str += 69.96; // Equivalent to str += static_cast<char>(69.96);
                  // 'E' (ASCII code 69) is appended by overload (2),
                  // which might not be the intent.
 
    // To add a numeric value, consider std::to_string():
    str += std::to_string(1729);
 
    std::cout << std::quoted(str) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2946 | C++17 | overload (5) caused ambiguity in some cases | avoided by making it a template |

## See also
- [append](/cpp/string/basic_string/append/)
