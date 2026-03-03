---
title: "std::basic_string<CharT,Traits,Allocator>::rfind"
source_path: "cpp/string/basic_string/rfind"
category: "string"
---

Finds the last substring that is equal to the given character sequence. The search begins at pos and proceeds from right to left (thus, the found substring, if any, cannot begin in a position following pos). If [npos](/cpp/string/basic_string/npos/) or any value not smaller than [size()](/cpp/string/basic_string/size/)- 1 is passed as pos, the whole string will be searched.

## Declarations
```cpp
size_type rfind( const basic_string& str, size_type pos = npos ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
size_type rfind( const CharT* s, size_type pos, size_type count ) const;
```
_(constexpr since C++20)_

```cpp
size_type rfind( const CharT* s, size_type pos = npos ) const;
```
_(constexpr since C++20)_

```cpp
size_type rfind( CharT ch, size_type pos = npos ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
template< class StringViewLike >
size_type rfind( const StringViewLike& t,
size_type pos = npos ) const noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `str`: string to search for
- `pos`: position at which to begin searching
- `count`: length of substring to search for
- `s`: pointer to a character string to search for
- `ch`: character to search for
- `t`: object (convertible to std::basic_string_view) to search for

## Return value
Position of the first character of the found substring or [npos](/cpp/string/basic_string/npos/) if no such substring is found. Note that this is an offset from the start of the string, not the end.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
 
void print(std::string::size_type n,
           std::string::size_type len,
           std::string const &s)
{
    if (n == std::string::npos)
        std::cout << "not found\n";
    else
        std::cout << "found: " << std::quoted(s.substr(n, len)) << " at " << n << '\n';
}
 
int main()
{
    std::string::size_type n;
    std::string const s = "This is a string";
 
    // search backwards from end of string
    n = s.rfind("is");
    print(n, 2, s);
 
    // search backwards from position 4
    n = s.rfind("is", 4);
    print(n, 2, s);
 
    // find a single character
    n = s.rfind('s');
    print(n, 1, s);
 
    // find a single character
    n = s.rfind('q');
    print(n, 1, s);
 
    // find the prefix (see also s.starts_with("This"))
    n = s.rfind("This", 0);
    print(n, 4, s);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2064 | C++11 | overloads (3,4) were noexcept | removed |
| LWG 2946 | C++17 | overload (5) caused ambiguity in some cases | avoided by making it a template |
| P1148R0 | C++11C++17 | noexcept for overloads (4,5) wereaccidently dropped by LWG2064/LWG2946 | restored |

## See also
- [find](/cpp/string/basic_string/find/)
- [find_first_of](/cpp/string/basic_string/find_first_of/)
- [find_first_not_of](/cpp/string/basic_string/find_first_not_of/)
- [find_last_of](/cpp/string/basic_string/find_last_of/)
- [find_last_not_of](/cpp/string/basic_string/find_last_not_of/)
- [rfind](/cpp/string/basic_string_view/rfind/)
