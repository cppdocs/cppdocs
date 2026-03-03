---
title: "std::to_chars_result"
source_path: "cpp/utility/to_chars_result"
header: "<charconv>"
category: "utility"
since: "C++17"
---

std::to_chars_result is the return type of [std::to_chars](/cpp/utility/to_chars/). It has no base classes, and only has the following members.

## Declarations
```cpp
struct to_chars_result;
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_to_chars
201611L
(C++17)
Elementary string conversions (std::to_chars, std::from_chars)
202306L
(C++26)
Testing for success or failure of <charconv> functions

## Example
```cpp
#include <array>
#include <charconv>
#include <iostream>
#include <string_view>
#include <system_error>
 
void show_to_chars(auto... format_args)
{
    std::array<char, 10> str;
 
#if __cpp_lib_to_chars >= 202306L and __cpp_structured_bindings >= 202406L
    // use C++26 structured bindings declaration as condition (P0963)
    // and C++26 to_chars_result::operator bool() for error checking (P2497)
    if (auto [ptr, ec] =
            std::to_chars(str.data(), str.data() + str.size(), format_args...))
        std::cout << std::string_view(str.data(), ptr) << '\n';
    else
        std::cout << std::make_error_code(ec).message() << '\n';
#elif __cpp_lib_to_chars >= 202306L
    // use C++26 to_chars_result::operator bool() for error checking (P2497)
    if (auto result =
            std::to_chars(str.data(), str.data() + str.size(), format_args...))
        std::cout << std::string_view(str.data(), result.ptr) << '\n';
    else
        std::cout << std::make_error_code(result.ec).message() << '\n';
#else
    // fallback to C++17 if-with-initializer and structured bindings
    if (auto [ptr, ec] =
            std::to_chars(str.data(), str.data() + str.size(), format_args...);
        ec == std::errc())
        std::cout << std::string_view(str.data(), ptr - str.data()) << '\n';
    else
        std::cout << std::make_error_code(ec).message() << '\n';
#endif
}
 
int main()
{
    show_to_chars(42);
    show_to_chars(+3.14159F);
    show_to_chars(-3.14159, std::chars_format::fixed);
    show_to_chars(-3.14159, std::chars_format::scientific, 3);
    show_to_chars(3.1415926535, std::chars_format::fixed, 10);
}
```

## See also
- [to_chars](/cpp/utility/to_chars/)
