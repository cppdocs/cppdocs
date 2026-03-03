---
title: "std::basic_string<CharT,Traits,Allocator>::back"
source_path: "cpp/string/basic_string/back"
category: "string"
---

Returns reference to the last character in the string. The behavior is undefined if [empty()](/cpp/string/basic_string/empty/) is true.

## Declarations
```cpp
CharT& back();
```
_(constexpr since C++20)_

```cpp
const CharT& back() const;
```
_(constexpr since C++20)_

## Return value
Reference to the last character, equivalent to operator[](size() - 1).

## Notes
In libstdc++, back() is [not available](https://gcc.gnu.org/onlinedocs/libstdc++/manual/strings.html#strings.string.shrink) in C++98 mode.

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    std::string s("Exemplary");
    char& back1 = s.back();
    back1 = 's';
    std::cout << s << '\n'; // "Exemplars"
 
    std::string const c("Exemplary");
    char const& back2 = c.back();
    std::cout << back2 << '\n'; // 'y'
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 534 | C++98 | std::basic_string did not have the member function back() | added |

## See also
- [front](/cpp/string/basic_string/front/)
- [back](/cpp/string/basic_string_view/back/)
