---
title: "std::basic_string_view"
source_path: "cpp/string/basic_string_view"
header: "<string_view>"
since: "C++17"
---

The class template basic_string_view describes an object that can refer to a constant contiguous sequence of CharT with the first element of the sequence at position zero.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_string_view;
```
_(since C++17)_

## Notes
It is the programmer's responsibility to ensure that std::string_view does not outlive the pointed-to character array:

Specializations of std::basic_string_view are already trivially copyable types in all existing implementations, even before the formal requirement introduced in C++23.

## Example
```cpp
#include <iostream>
#include <string_view>
 
int main()
{
    constexpr std::string_view unicode[]{"▀▄─", "▄▀─", "▀─▄", "▄─▀"};
 
    for (int y{}, p{}; y != 6; ++y, p = ((p + 1) % 4))
    {
        for (int x{}; x != 16; ++x)
            std::cout << unicode[p];
        std::cout << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3203 | C++17 | only pointers, iterators, and referencesreturned from the member functions ofbasic_string_view might be invalidated | all pointers, iterators, and referencesto elements of basic_string_viewmay be invalidated |

## See also
- [basic_string](/cpp/string/basic_string/)
- [operator+](/cpp/string/basic_string/operator+/)
- [span](/cpp/container/span/)
- [initializer_list](/cpp/utility/initializer_list/)
- [list-initialization](/cpp/language/list_initialization/)
