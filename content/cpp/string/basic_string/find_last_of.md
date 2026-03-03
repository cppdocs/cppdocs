---
title: "std::basic_string<CharT,Traits,Allocator>::find_last_of"
source_path: "cpp/string/basic_string/find_last_of"
category: "string"
---

Finds the last character equal to one of characters in the given character sequence. The exact search algorithm is not specified. The search considers only the range [0,pos]. If none of the characters in the given character sequence is present in the range, [npos](/cpp/string/basic_string/npos/) will be returned.

## Declarations
```cpp
size_type find_last_of( const basic_string& str,
size_type pos = npos ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
size_type find_last_of( const CharT* s,
size_type pos, size_type count ) const;
```
_(constexpr since C++20)_

```cpp
size_type find_last_of( const CharT* s, size_type pos = npos ) const;
```
_(constexpr since C++20)_

```cpp
size_type find_last_of( CharT ch, size_type pos = npos ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
template< class StringViewLike >
size_type
find_last_of( const StringViewLike& t,
size_type pos = npos ) const noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `str`: string identifying characters to search for
- `pos`: position at which the search is to finish
- `count`: length of character string identifying characters to search for
- `s`: pointer to a character string identifying characters to search for
- `ch`: character to search for
- `t`: object (convertible to std::basic_string_view) identifying characters to search for

## Return value
Position of the found character or [npos](/cpp/string/basic_string/npos/) if no such character is found.

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    const std::string path = "/root/config";
    auto const pos = path.find_last_of('/');
    const auto leaf = path.substr(pos + 1);
 
    std::cout << leaf << '\n';
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
- [find_last_not_of](/cpp/string/basic_string/find_last_not_of/)
- [find_last_of](/cpp/string/basic_string_view/find_last_of/)
