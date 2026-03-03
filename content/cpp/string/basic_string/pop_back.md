---
title: "std::basic_string<CharT,Traits,Allocator>::pop_back"
source_path: "cpp/string/basic_string/pop_back"
category: "string"
---

Removes the last character from the string.

## Declarations
```cpp
void pop_back();
```
_(constexpr since C++20)_

## Return value
(none)

## Notes
In libstdc++, pop_back() is [not available](https://gcc.gnu.org/onlinedocs/libstdc++/manual/strings.html#strings.string.shrink) in C++98 mode.

## Example
```cpp
#include <cassert>
#include <iomanip>
#include <iostream>
#include <string>
 
int main()
{
    std::string str("Short string!");
    std::cout << "Before: " << std::quoted(str) << '\n';
    assert(str.size() == 13);
 
    str.pop_back();
    std::cout << "After:  " << std::quoted(str) << '\n';
    assert(str.size() == 12);
 
    str.clear();
//  str.pop_back(); // undefined behavior
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 534 | C++98 | std::basic_string did not have the member function pop_back() | added |

## See also
- [push_back](/cpp/string/basic_string/push_back/)
- [erase](/cpp/string/basic_string/erase/)
