---
title: "std::basic_string<CharT,Traits,Allocator>::swap"
source_path: "cpp/string/basic_string/swap"
category: "string"
---

Exchanges the contents of the string with those of other. All iterators and references may be invalidated.

## Declarations
```cpp
void swap( basic_string& other );
```
_(until C++17)_

```cpp
void swap( basic_string& other ) noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `other`: string to exchange the contents with

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
 
    a.swap(b);
 
    std::cout << "After swap:\n"
                 "a = " << a << "\n"
                 "b = " << b << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 403 | C++98 | swap() might throw an exception | no exception is thrown |
| LWG 535 | C++98 | swapping strings did not preserve the character orders | orders are also preserved |
| LWG 2151(P1148R0) | C++11 | no exception was thrown in the caseof unequal non-propagating allocators | the behavior isundefined in this case |

## See also
- [swap](/cpp/utility/swap/)
- [swap_ranges](/cpp/algorithm/swap_ranges/)
- [swap](/cpp/string/basic_string_view/swap/)
