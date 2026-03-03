---
title: "std::basic_string<CharT,Traits,Allocator>::push_back"
source_path: "cpp/string/basic_string/push_back"
category: "string"
---

Appends the given character ch to the end of the string.

## Declarations
```cpp
void push_back( CharT ch );
```
_(constexpr since C++20)_

## Parameters
- `ch`: the character to append

## Return value
(none)

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
 
int main()
{
    std::string str{"Short string"};
    std::cout << "1) " << std::quoted(str) << ", size: " << str.size() << '\n';
 
    str.push_back('!');
    std::cout << "2) " << std::quoted(str) << ", size: " << str.size() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 7 | C++98 | 1) the description was missing in the C++ standard2) the parameter type was const CharT | 1) description added2) changed to CharT |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |

## See also
- [pop_back](/cpp/string/basic_string/pop_back/)
