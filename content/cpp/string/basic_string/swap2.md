---
title: "std::swap(std::basic_string)"
source_path: "cpp/string/basic_string/swap2"
header: "<string>"
category: "string"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::basic_string](/cpp/string/basic_string/). Swaps the contents of lhs and rhs.

## Declarations
```cpp
template< class CharT, class Traits, class Alloc >
void swap( std::basic_string<CharT, Traits, Alloc>& lhs,
std::basic_string<CharT, Traits, Alloc>& rhs );
```
_(until C++17)_

```cpp
template< class CharT, class Traits, class Alloc >
void swap( std::basic_string<CharT, Traits, Alloc>& lhs,
std::basic_string<CharT, Traits, Alloc>& rhs ) noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `lhs, rhs`: strings whose contents to swap

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    std::string a = "AAA";
    std::string b = "BBBB";
 
    std::cout << "Before swap:\n"
                 "a = " << a << "\n"
                 "b = " << b << "\n\n";
 
    std::swap(a, b);
 
    std::cout << "After swap:\n"
                 "a = " << a << "\n"
                 "b = " << b << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2064 | C++11 | non-member swap was noexcept and inconsistent with member swap | noexcept removed |

## See also
- [swap](/cpp/string/basic_string/swap/)
