---
title: "std::hash<std::basic_string>"
source_path: "cpp/string/basic_string/hash"
header: "<string>"
category: "string"
since: "C++11"
---

The template specializations of [std::hash](/cpp/utility/hash/) for the various string classes allow users to obtain hashes of strings.

## Declarations
```cpp
template< class A >
struct hash<std::basic_string<char, std::char_traits<char>, A>>;
```
_(since C++11)_

```cpp
template< class A >
struct hash<std::basic_string<char16_t, std::char_traits<char16_t>, A>>;
```
_(since C++11)_

```cpp
template< class A >
struct hash<std::basic_string<char32_t, std::char_traits<char32_t>, A>>;
```
_(since C++11)_

```cpp
template< class A >
struct hash<std::basic_string<wchar_t, std::char_traits<wchar_t>, A>>;
```
_(since C++11)_

```cpp
template< class A >
struct hash<std::basic_string<char8_t, std::char_traits<char8_t>, A>>;
```
_(since C++20)_

## Example
```cpp
#include <functional>
#include <iostream>
#include <memory_resource>
#include <string>
#include <string_view>
using namespace std::literals;
 
int main()
{
    auto sv = "Stand back! I've got jimmies!"sv;
    std::string s(sv);
    std::pmr::string pmrs(sv); // use default allocator
 
    std::cout << std::hash<std::string_view>{}(sv) << '\n';
    std::cout << std::hash<std::string>{}(s) << '\n';
    std::cout << std::hash<std::pmr::string>{}(pmrs) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3705 | C++11 | hash support for std::basic_string with customized allocators was not enabled | enabled |

## See also
- [hash](/cpp/utility/hash/)
- [std::hash<std::string_view>std::hash<std::wstring_view>std::hash<std::u8string_view>std::hash<std::u16string_view>std::hash<std::u32string_view>](/cpp/string/basic_string_view/hash/)
