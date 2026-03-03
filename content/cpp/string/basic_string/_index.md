---
title: "std::basic_string"
source_path: "cpp/string/basic_string"
header: "<string>"
---

The class template basic_string stores and manipulates sequences of [character](/cpp/language/types/#Character_types)-like objects, which are non-array objects of [TrivialType](/cpp/named_req/TrivialType/) and [StandardLayoutType](/cpp/named_req/StandardLayoutType/). The class is dependent neither on the character type nor on the nature of operations on that type. The definitions of the operations are supplied via the Traits template parameter - a specialization of [std::char_traits](/cpp/string/char_traits/) or a compatible traits class.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>,
class Allocator = std::allocator<CharT>
> class basic_string;
```

```cpp
namespace pmr {
template<
class CharT,
class Traits = std::char_traits<CharT>
> using basic_string =
std::basic_string<CharT, Traits, std::pmr::polymorphic_allocator<CharT>>;
}
```
_(since C++17)_

## Notes
Although it is required that customized construct or destroy is used when constructing or destroying elements of std::basic_string until C++23, all implementations only used the default mechanism. The requirement is corrected by [P1072R10](https://wg21.link/P1072R10) to match existing practice.

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    using namespace std::literals;
 
    // Creating a string from const char*
    std::string str1 = "hello";
 
    // Creating a string using string literal
    auto str2 = "world"s;
 
    // Concatenating strings
    std::string str3 = str1 + " " + str2;
 
    // Print out the result
    std::cout << str3 << '\n';
 
    std::string::size_type pos = str3.find(" ");
    str1 = str3.substr(pos + 1); // the part after the space
    str2 = str3.substr(0, pos);  // the part till the space
 
    std::cout << str1 << ' ' << str2 << '\n';
 
    // Accessing an element using subscript operator[]
    std::cout << str1[0] << '\n';
    str1[0] = 'W';
    std::cout << str1 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 530 | C++98 | contiguity of the storage for elements of basic_stringwas accidently made not required by LWG259 | required again |
| LWG 2861 | C++98 | value_type was Traits::char_type | changed to CharT |
| LWG 2994(P1148R0) | C++98 | the behavior is undefined if any of Traits::char_type[1]and Allocator::char_type is different from CharT | the program isill-formed in this case |

## See also
- [basic_string_view](/cpp/string/basic_string_view/)
