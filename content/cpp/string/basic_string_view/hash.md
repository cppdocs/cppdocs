---
title: "std::hash<std::string_view>, std::hash<std::wstring_view>, std::hash<std::u8string_view>, std::hash<std::u16string_view>, std::hash<std::u32string_view>"
source_path: "cpp/string/basic_string_view/hash"
header: "<string_view>"
category: "string"
since: "C++17"
---

Template specializations of [std::hash](/cpp/utility/hash/) for the various view classes for hashing views.

## Declarations
```cpp
template<> struct hash<std::string_view>;
```
_(since C++17)_

```cpp
template<> struct hash<std::wstring_view>;
```
_(since C++17)_

```cpp
template<> struct hash<std::u8string_view>;
```
_(since C++20)_

```cpp
template<> struct hash<std::u16string_view>;
```
_(since C++17)_

```cpp
template<> struct hash<std::u32string_view>;
```
_(since C++17)_

## Example
```cpp
#include <iostream>
#include <string_view>
#include <unordered_set>
using namespace std::literals;
 
int main()
{
    std::cout << "\"A\"   #: " << std::hash<std::string_view>{}("A"sv) << '\n';
    std::cout << "L\"B\"  #: " << std::hash<std::wstring_view>{}(L"B"sv) << '\n';
    std::cout << "u8\"C\" #: " << std::hash<std::u8string_view>{}(u8"C"sv) << '\n';
    std::cout << "u\"D\"  #: " << std::hash<std::u16string_view>{}(u"D"sv) << '\n';
    std::cout << "U\"E\"  #: " << std::hash<std::u32string_view>{}(U"E"sv) << '\n';
 
    // std::hash for string_view family makes it possible to keep these view-types
    // in unordered_* associative containers, such as unordered_set. But ensure
    // the lifespan of referenced strings is no less than lifespan of the container,
    // i.e. no dangling references occurred.
 
    std::unordered_set stars{"Rigel"sv, "Capella"sv, "Vega"sv, "Arcturus"sv};
 
    for (std::string_view const& s : stars)
        std::cout << s << ' ';
    std::cout << '\n';
}
```

## See also
- [hash](/cpp/utility/hash/)
- [std::hash<std::basic_string>](/cpp/string/basic_string/hash/)
