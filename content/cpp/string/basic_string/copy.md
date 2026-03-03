---
title: "std::basic_string<CharT,Traits,Allocator>::copy"
source_path: "cpp/string/basic_string/copy"
category: "string"
---

Copies a substring [pos,pos + count) to character string pointed to by dest. If the requested substring lasts past the end of the string, or if count == npos, the copied substring is [pos,[size()](/cpp/string/basic_string/size/)).

## Declarations
```cpp
size_type copy( CharT* dest, size_type count, size_type pos = 0 ) const;
```
_(constexpr since C++20)_

## Parameters
- `dest`: pointer to the destination character string
- `count`: length of the substring
- `pos`: position of the first character to include

## Return value
Number of characters copied.

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    std::string foo("WINE");
 
    // brace-initialization initializes all characters to 0,
    // providing a null-terminator
    char bar[4]{};
 
    // do not copy the last char, to guarantee null-termination
    foo.copy(bar, sizeof bar - 1);
 
    std::cout << bar << '\n'; // requires bar to be null-terminated
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |

## See also
- [substr](/cpp/string/basic_string/substr/)
- [copy](/cpp/string/basic_string_view/copy/)
- [copycopy_if](/cpp/algorithm/copy/)
- [memcpy](/cpp/string/byte/memcpy/)
