---
title: "std::basic_string<CharT,Traits,Allocator>::operator[]"
source_path: "cpp/string/basic_string/operator_at"
aliases:
  - "/cpp/string/basic_string/operator&/"
category: "string"
---

Returns a reference to the character at specified location pos if pos < size(), or a reference to CharT() if pos == size(). No bounds checking is performed.

## Declarations
```cpp
CharT& operator[]( size_type pos );
```
_(constexpr since C++20)_

```cpp
const CharT& operator[]( size_type pos ) const;
```
_(constexpr since C++20)_

## Parameters
- `pos`: position of the character to return

## Return value
Reference to the requested element if pos < size(), or a reference to CharT() if pos == size().

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    const std::string e("Exemplar");
    for (unsigned i = e.length() - 1; i != 0; i /= 2)
        std::cout << e[i];
    std::cout << '\n';
 
    const char* c = &e[0];
    std::cout << c << '\n'; // print as a C string
 
    // Change the last character of s into a 'y'
    std::string s("Exemplar ");
    s[s.size() - 1] = 'y'; // equivalent to s.back() = 'y';
    std::cout << s << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 259 | C++98 | non-const overload could return const lvalue data()[pos], which was ill-formed | changed to return*(begin() + pos) |
| LWG 2475 | C++11 | if pos == size(), the behavior of modifying theobject referred by the returned reference was undefined | well-defined ifmodified to CharT() |

## See also
- [at](/cpp/string/basic_string/at/)
- [front](/cpp/string/basic_string/front/)
- [back](/cpp/string/basic_string/back/)
- [operator[]](/cpp/string/basic_string_view/operator_at/)
