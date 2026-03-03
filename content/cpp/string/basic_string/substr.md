---
title: "std::basic_string<CharT,Traits,Allocator>::substr"
source_path: "cpp/string/basic_string/substr"
category: "string"
since: "C++23"
---

Returns a substring [pos,pos + count). If the requested substring extends past the end of the string, i.e. the count is greater than size() - pos (e.g. if count == npos), the returned substring is [pos,[size()](/cpp/string/basic_string/size/)).

## Declarations
```cpp
basic_string substr( size_type pos = 0, size_type count = npos ) const;
```
_(until C++23) (constexpr since C++20)_

```cpp
constexpr basic_string
substr( size_type pos = 0, size_type count = npos ) const&;
```
_(since C++23)_

```cpp
constexpr basic_string substr( size_type pos = 0, size_type count = npos ) &&;
```
_(since C++23)_

## Parameters
- `pos`: position of the first character to include
- `count`: length of the substring

## Return value
String containing the substring [pos,pos + count) or [pos,[size()](/cpp/string/basic_string/size/)).

## Notes
The allocator of the returned string is default-constructed: the new allocator might not be a copy of [get_allocator()](/cpp/string/basic_string/get_allocator/).

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    std::string a = "0123456789abcdefghij";
 
    // count is npos, returns [pos, size())
    std::string sub1 = a.substr(10);
    std::cout << sub1 << '\n';
 
    // both pos and pos + count are within bounds, returns [pos, pos + count)
    std::string sub2 = a.substr(5, 3);
    std::cout << sub2 << '\n';
 
    // pos is within bounds, pos + count is not, returns [pos, size())
    std::string sub4 = a.substr(a.size() - 3, 50);
    // this is effectively equivalent to
    // std::string sub4 = a.substr(17, 3);
    // since a.size() == 20, pos == a.size() - 3 == 17, and a.size() - pos == 3
 
    std::cout << sub4 << '\n';
 
    try
    {
        // pos is out of bounds, throws
        std::string sub5 = a.substr(a.size() + 3, 50);
        std::cout << sub5 << '\n';
    }
    catch (const std::out_of_range& ex)
    {
        std::cout << ex.what() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |

## See also
- [copy](/cpp/string/basic_string/copy/)
- [sizelength](/cpp/string/basic_string/size/)
- [find](/cpp/string/basic_string/find/)
- [substr](/cpp/string/basic_string_view/substr/)
