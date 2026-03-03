---
title: "std::from_chars_result"
source_path: "cpp/utility/from_chars_result"
header: "<charconv>"
category: "utility"
since: "C++17"
---

std::from_chars_result is the return type of [std::from_chars](/cpp/utility/from_chars/). It has no base classes, and only has the following members.

## Declarations
```cpp
struct from_chars_result;
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
#include <cassert>
#include <charconv>
#include <iomanip>
#include <iostream>
#include <optional>
#include <string_view>
#include <system_error>
 
int main()
{
    for (std::string_view const str : {"1234", "15 foo", "bar", " 42", "5000000000"})
    {
        std::cout << "String: " << std::quoted(str) << ". ";
        int result{};
        auto [ptr, ec] = std::from_chars(str.data(), str.data() + str.size(), result);
 
        if (ec == std::errc())
            std::cout << "Result: " << result << ", ptr -> " << std::quoted(ptr) << '\n';
        else if (ec == std::errc::invalid_argument)
            std::cout << "This is not a number.\n";
        else if (ec == std::errc::result_out_of_range)
            std::cout << "This number is larger than an int.\n";
    }
 
    // C++23's constexpr from_char demo / C++26's operator bool() demo:
    auto to_int = [](std::string_view s) -> std::optional<int>
    {
        int value{};
#if __cpp_lib_to_chars >= 202306L
        if (std::from_chars(s.data(), s.data() + s.size(), value))
#else
        if (std::from_chars(s.data(), s.data() + s.size(), value).ec == std::errc{})
#endif
            return value;
        else
            return std::nullopt;
    };
 
    assert(to_int("42") == 42);
    assert(to_int("foo") == std::nullopt);
#if __cpp_lib_constexpr_charconv and __cpp_lib_optional >= 202106
    static_assert(to_int("42") == 42);
    static_assert(to_int("foo") == std::nullopt);
#endif
}
```

## See also
- [from_chars](/cpp/utility/from_chars/)
