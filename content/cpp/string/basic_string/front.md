---
title: "std::basic_string<CharT,Traits,Allocator>::front"
source_path: "cpp/string/basic_string/front"
category: "string"
---

Returns reference to the first character in the string. The behavior is undefined if [empty()](/cpp/string/basic_string/empty/) is true.

## Declarations
```cpp
CharT& front();
```
_(constexpr since C++20)_

```cpp
const CharT& front() const;
```
_(constexpr since C++20)_

## Return value
Reference to the first character, equivalent to operator[](0).

## Notes
In libstdc++, front() is [not available](https://gcc.gnu.org/onlinedocs/libstdc++/manual/strings.html#strings.string.shrink) in C++98 mode.

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    std::string s("Exemplary");
    char& f1 = s.front();
    f1 = 'e';
    std::cout << s << '\n'; // "exemplary"
 
    std::string const c("Exemplary");
    char const& f2 = c.front();
    std::cout << &f2 << '\n'; // "Exemplary"
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 534 | C++98 | std::basic_string did not have the member function front() | added |

## See also
- [back](/cpp/string/basic_string/back/)
- [front](/cpp/string/basic_string_view/front/)
