---
title: "std::literals::string_view_literals::operator\"\"sv"
source_path: "cpp/string/basic_string_view/operatorsv"
header: "<string_view>"
category: "string"
since: "C++17"
---

Forms a string view of a character literal.

## Declarations
```cpp
constexpr std::string_view
operator ""sv( const char* str, std::size_t len ) noexcept;
```
_(since C++17)_

```cpp
constexpr std::u8string_view
operator ""sv( const char8_t* str, std::size_t len ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::u16string_view
operator ""sv( const char16_t* str, std::size_t len ) noexcept;
```
_(since C++17)_

```cpp
constexpr std::u32string_view
operator ""sv( const char32_t* str, std::size_t len ) noexcept;
```
_(since C++17)_

```cpp
constexpr std::wstring_view
operator ""sv( const wchar_t* str, std::size_t len ) noexcept;
```
_(since C++17)_

## Parameters
- `str`: pointer to the beginning of the raw character array literal
- `len`: length of the raw character array literal

## Return value
The [std::basic_string_view](/cpp/string/basic_string_view/) literal.

## Notes
These operators are declared in the namespace std::literals::string_view_literals, where both literals and string_view_literals are inline namespaces. Access to these operators can be gained with any of:

## Example
```cpp
#include <iostream>
#include <string_view>
#include <typeinfo>
 
void print_each_character(const std::string_view sw)
{
    for (char c : sw)
        std::cout << (c == '\0' ? '@' : c);
    std::cout << '\n';
}
 
int main()
{
    using namespace std::literals;
 
    std::string_view s1 = "abc\0\0def";
    std::string_view s2 = "abc\0\0def"sv;
 
    std::cout << "s1.size(): " << s1.size() << "; s1: ";
    print_each_character(s1);
    std::cout << "s2.size(): " << s2.size() << "; s2: ";
    print_each_character(s2);
 
    std::cout << "substr(1, 4): " << "abcdef"sv.substr(1, 4) << '\n';
 
    auto value_type_info = []<typename T>(T)
    {
        using V = typename T::value_type;
        std::cout << "sizeof " << typeid(V).name() << ": " << sizeof(V) << '\n';
    };
 
    value_type_info("char A"sv);
    value_type_info(L"wchar_t ∀"sv);
    value_type_info(u8"char8_t ∆"sv);
    value_type_info(u"char16_t ∇"sv);
    value_type_info(U"char32_t ∃"sv);
    value_type_info(LR"(raw ⊞)"sv);
}
```

## See also
- [(constructor)](/cpp/string/basic_string_view/basic_string_view/)
- [operator""s](/cpp/string/basic_string/operators/)
