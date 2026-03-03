---
title: "std::literals::string_literals::operator\"\"s"
source_path: "cpp/string/basic_string/operators"
header: "<string>"
category: "string"
since: "C++20"
aliases:
  - "/cpp/string/basic_string/operator%22%22s/"
---

Forms a string literal of the desired type.

## Declarations
```cpp
std::string operator""s( const char* str, std::size_t len );
```
_(since C++14) (constexpr since C++20)_

```cpp
constexpr std::u8string operator""s( const char8_t* str,
std::size_t len );
```
_(since C++20)_

```cpp
std::u16string operator""s( const char16_t* str, std::size_t len );
```
_(since C++14) (constexpr since C++20)_

```cpp
std::u32string operator""s( const char32_t* str, std::size_t len );
```
_(since C++14) (constexpr since C++20)_

```cpp
std::wstring operator""s( const wchar_t* str, std::size_t len );
```
_(since C++14) (constexpr since C++20)_

## Parameters
- `str`: pointer to the beginning of the raw character array literal
- `len`: length of the raw character array literal

## Return value
The string literal.

## Notes
These operators are declared in the namespace std::literals::string_literals, where both literals and string_literals are inline namespaces. Access to these operators can be gained with any of the following using directives:

[std::chrono::duration](/cpp/chrono/duration/) also defines [operator""s](/cpp/chrono/operators/) to represent literal seconds, but it is an arithmetic literal: 10.0s and 10s are ten seconds, but "10"s is a string.

## Example
```cpp
#include <iostream>
#include <string>
 
void print_with_zeros(const auto note, const std::string& s)
{
    std::cout << note;
    for (const char c : s)
        c ? std::cout << c : std::cout << "₀";
    std::cout << " (size = " << s.size() << ")\n";
}
 
int main()
{
    using namespace std::string_literals;
 
    std::string s1 = "abc\0\0def";
    std::string s2 = "abc\0\0def"s;
    print_with_zeros("s1: ", s1);
    print_with_zeros("s2: ", s2);
 
    std::cout << "abcdef"s.substr(1,4) << '\n';
}
```

## See also
- [(constructor)](/cpp/string/basic_string/basic_string/)
- [operator""sv](/cpp/string/basic_string_view/operatorsv/)
