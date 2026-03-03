---
title: "std::basic_string<CharT,Traits,Allocator>::find_last_not_of"
source_path: "cpp/string/basic_string/find_last_not_of"
category: "string"
---

Finds the last character equal to none of the characters in the given character sequence. The search considers only the range [0,pos]. If all characters in the range can be found in the given character sequence, [npos](/cpp/string/basic_string/npos/) will be returned.

## Declarations
```cpp
size_type find_last_not_of( const basic_string& str,
size_type pos = npos ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
size_type find_last_not_of( const CharT* s,
size_type pos, size_type count ) const;
```
_(constexpr since C++20)_

```cpp
size_type find_last_not_of( const CharT* s, size_type pos = npos ) const;
```
_(constexpr since C++20)_

```cpp
size_type find_last_not_of( CharT ch, size_type pos = npos ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
template< class StringViewLike >
size_type
find_last_not_of( const StringViewLike& t,
size_type pos = npos ) const noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `str`: string identifying characters to search for
- `pos`: position at which to end search
- `count`: length of character string identifying characters to search for
- `s`: pointer to a character string identifying characters to search for
- `ch`: character identifying characters to search for
- `t`: object (convertible to std::basic_string_view) identifying characters to search for

## Return value
Position of the found character or [npos](/cpp/string/basic_string/npos/) if no such character is found.

## Example
```cpp
#include <iostream>
#include <string>
 
void show_pos(const std::string& str, std::string::size_type found)
{
    if (found != std::string::npos)
        std::cout << '[' << found << "] = \'" << str[found] << "\'\n";
    else
        std::cout << "not found\n";
}
 
int main()
{
    std::string str{"abc_123"};
    char const* skip_set{"0123456789"};
    std::string::size_type str_last_pos{std::string::npos};
 
    show_pos(str, str.find_last_not_of(skip_set)); // [3] = '_'
 
    str_last_pos = 2;
    show_pos(str, str.find_last_not_of(skip_set, str_last_pos)); // [2] = 'c'
 
    str_last_pos = 2;
    show_pos(str, str.find_last_not_of('c', str_last_pos)); // [1] = 'b'
 
    const char arr[]{'3', '4', '5'};
    show_pos(str, str.find_last_not_of(arr)); // [5] = '2'
 
    str_last_pos = 2;
    std::string::size_type skip_set_size{4};
    show_pos(str, str.find_last_not_of(skip_set,
                                       str_last_pos,
                                       skip_set_size)); // [2] = 'c'
 
    show_pos(str, str.find_last_not_of("abc")); // [6] = '3'
 
    str_last_pos = 2;
    show_pos(str, str.find_last_not_of("abc", str_last_pos)); // not found
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 141 | C++98 | overload (1) could only return npos if pos >= size() | the search range is[0, size()) in this case |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2064 | C++11 | overloads (3,4) were noexcept | removed |
| LWG 2946 | C++17 | overload (5) caused ambiguity in some cases | avoided by making it a template |
| P1148R0 | C++11C++17 | noexcept for overloads (4,5) wereaccidentally dropped by LWG2064/LWG2946 | restored |

## See also
- [find](/cpp/string/basic_string/find/)
- [rfind](/cpp/string/basic_string/rfind/)
- [find_first_of](/cpp/string/basic_string/find_first_of/)
- [find_first_not_of](/cpp/string/basic_string/find_first_not_of/)
- [find_last_of](/cpp/string/basic_string/find_last_of/)
- [find_last_not_of](/cpp/string/basic_string_view/find_last_not_of/)
