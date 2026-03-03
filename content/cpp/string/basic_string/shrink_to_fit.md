---
title: "std::basic_string<CharT,Traits,Allocator>::shrink_to_fit"
source_path: "cpp/string/basic_string/shrink_to_fit"
category: "string"
---

Requests the removal of unused capacity.

## Declarations
```cpp
void shrink_to_fit();
```
_(constexpr since C++20)_

## Notes
In libstdc++, shrink_to_fit() is [not available](https://gcc.gnu.org/onlinedocs/libstdc++/manual/strings.html#strings.string.shrink) in C++98 mode.

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    std::string s;
    std::cout << "Size of std::string is " << sizeof s << " bytes\n"
        << "Default-constructed capacity is " << s.capacity() 
        << " and size is " << s.size() << '\n';
 
    for (int i = 0; i < 42; i++)
        s.append(" 42 ");
    std::cout << "Capacity after 42 appends is " << s.capacity() 
        << " and size is " << s.size() << '\n';
 
    s.clear();
    std::cout << "Capacity after clear() is " << s.capacity() 
        << " and size is " << s.size() << '\n';
 
    s.shrink_to_fit();
    std::cout << "Capacity after shrink_to_fit() is " << s.capacity() 
        << " and size is " << s.size() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 755 | C++98 | std::string lacked explicit shrink-to-fit operations | provided |
| LWG 2223 | C++98 | 1. references, pointers, and iterators were not invalidated2. there was no complexity requirement | 1. they may be invalidated2. required to be linear |

## See also
- [sizelength](/cpp/string/basic_string/size/)
- [capacity](/cpp/string/basic_string/capacity/)
- [resize](/cpp/string/basic_string/resize/)
