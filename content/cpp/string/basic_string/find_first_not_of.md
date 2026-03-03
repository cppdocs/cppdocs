---
title: "std::basic_string<CharT,Traits,Allocator>::find_first_not_of"
source_path: "cpp/string/basic_string/find_first_not_of"
category: "string"
---

Finds the first character equal to none of the characters in the given character sequence. The search considers only the range [pos,[size()](/cpp/string/basic_string/size/)). If all characters in the range can be found in the given character sequence, [npos](/cpp/string/basic_string/npos/) will be returned.

## Declarations
```cpp
size_type find_first_not_of( const basic_string& str,
size_type pos = 0 ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
size_type find_first_not_of( const CharT* s,
size_type pos, size_type count ) const;
```
_(constexpr since C++20)_

```cpp
size_type find_first_not_of( const CharT* s,
size_type pos = 0 ) const;
```
_(constexpr since C++20)_

```cpp
size_type find_first_not_of( CharT ch, size_type pos = 0 ) const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
template< class StringViewLike >
size_type
find_first_not_of( const StringViewLike& t,
size_type pos = 0 ) const noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `str`: string identifying characters to search for
- `pos`: position for the search to start from
- `count`: length of character string identifying characters to search for
- `s`: pointer to a character string identifying characters to search for
- `ch`: character identifying characters to search for
- `t`: object (convertible to std::basic_string_view) identifying characters to search for

## Return value
Position of the found character or [std::string::npos](/cpp/string/basic_string/npos/) if no such character is found.

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    // Permit uppercase letters, lowercase letters and numbers in macro names
    const char* pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                          "abcdefghijklmnopqrstuvwxyz"
                          "0123456789";
 
    std::string data = "1) %FIX, 2) %HACK, and 3) %TODO";
    const std::string replacement = "%DONE%";
 
    std::cout << "Before: " << data << '\n';
 
    for (std::string::size_type first{}, last{};
        (first = data.find('%', first)) != std::string::npos;
        first += replacement.size())
    {
        last = data.find_first_not_of(pattern, first + 1);
        if (last == std::string::npos)
            last = data.length();
 
        // Now first at '%' and last is one past end of the found substring
        data.replace(first, last - first, replacement);
    }
 
    std::cout << "After: " << data << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2064 | C++11 | overloads (3,4) were noexcept | removed |
| LWG 2946 | C++17 | overload (5) caused ambiguity in some cases | avoided by making it a template |
| P1148R0 | C++11C++17 | noexcept for overloads (4,5) wereaccidentally dropped by LWG2064/LWG2946 | restored |

## See also
- [find](/cpp/string/basic_string/find/)
- [rfind](/cpp/string/basic_string/rfind/)
- [find_first_of](/cpp/string/basic_string/find_first_of/)
- [find_last_of](/cpp/string/basic_string/find_last_of/)
- [find_last_not_of](/cpp/string/basic_string/find_last_not_of/)
- [find_first_not_of](/cpp/string/basic_string_view/find_first_not_of/)
