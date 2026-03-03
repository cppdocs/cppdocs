---
title: "std::basic_string<CharT,Traits,Allocator>::find"
source_path: "cpp/string/basic_string/find"
category: "string"
---

Finds the first substring equal to the given character sequence. Search begins at pos, i.e. the found substring must not begin in a position preceding pos.

## Declarations
```cpp
size_type find( const basic_string& str, size_type pos = 0 ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
size_type find( const CharT* s, size_type pos, size_type count ) const;
```
_(constexpr since C++20)_

```cpp
size_type find( const CharT* s, size_type pos = 0 ) const;
```
_(constexpr since C++20)_

```cpp
size_type find( CharT ch, size_type pos = 0 ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
template< class StringViewLike >
size_type find( const StringViewLike& t,
size_type pos = 0 ) const noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `str`: string to search for
- `pos`: position at which to start the search
- `count`: length of substring to search for
- `s`: pointer to a character string to search for
- `ch`: character to search for
- `t`: object (convertible to std::basic_string_view) to search for

## Return value
Position of the first character of the found substring or [npos](/cpp/string/basic_string/npos/) if no such substring is found.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
 
void print(int id, std::string::size_type n, std::string const& s)
{
    std::cout << id << ") ";
    if (std::string::npos == n)
        std::cout << "not found! n == npos\n";
    else
        std::cout << "found @ n = " << n << ", substr(" << n << ") = "
                  << std::quoted(s.substr(n)) << '\n';
}
 
int main()
{
    std::string::size_type n;
    std::string const s = "This is a string"; /*
                             ^  ^  ^
                             1  2  3          */
 
    // search from beginning of string
    n = s.find("is");
    print(1, n, s);
 
    // search from position 5
    n = s.find("is", 5);
    print(2, n, s);
 
    // find a single character
    n = s.find('a');
    print(3, n, s);
 
    // find a single character
    n = s.find('q');
    print(4, n, s);
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
- [strstr](/cpp/string/byte/strstr/)
- [wcsstr](/cpp/string/wide/wcsstr/)
- [strchr](/cpp/string/byte/strchr/)
- [wcschr](/cpp/string/wide/wcschr/)
- [rfind](/cpp/string/basic_string/rfind/)
- [find_first_of](/cpp/string/basic_string/find_first_of/)
- [find_first_not_of](/cpp/string/basic_string/find_first_not_of/)
- [find_last_of](/cpp/string/basic_string/find_last_of/)
- [find_last_not_of](/cpp/string/basic_string/find_last_not_of/)
- [find](/cpp/string/basic_string_view/find/)
- [search](/cpp/algorithm/search/)
