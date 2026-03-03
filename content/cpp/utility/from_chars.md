---
title: "std::from_chars"
source_path: "cpp/utility/from_chars"
header: "<charconv>"
category: "utility"
since: "C++17"
---

Analyzes the character sequence [first,last) for a pattern described below. If no characters match the pattern or if the value obtained by parsing the matched characters is not representable in the type of value, value is unmodified, otherwise the characters matching the pattern are interpreted as a text representation of an arithmetic value, which is stored in value.

## Declarations
```cpp
std::from_chars_result
from_chars( const char* first, const char* last,
/* integer-type */& value, int base = 10 );
```
_(since C++17) (constexpr since C++23)_

```cpp
std::from_chars_result
from_chars( const char* first, const char* last,
/* floating-point-type */& value,
std::chars_format fmt = std::chars_format::general );
```
_(since C++17)_

## Parameters
- `first, last`: valid character range to parse
- `value`: the out-parameter where the parsed value is stored if successful
- `base`: integer base to use: a value between 2 and 36 (inclusive).
- `fmt`: floating-point formatting to use, a bitmask of type std::chars_format

## Return value
On success, returns a value of type [std::from_chars_result](/cpp/utility/from_chars_result/) such that ptr points at the first character not matching the pattern, or has the value equal to last if all characters match and ec is value-initialized.

## Notes
Unlike other parsing functions in C++ and C libraries, std::from_chars is locale-independent, non-allocating, and non-throwing. Only a small subset of parsing policies used by other libraries (such as [std::sscanf](/cpp/io/c/scanf/)) is provided. This is intended to allow the fastest possible implementation that is useful in common high-throughput contexts such as text-based interchange ([JSON](https://en.wikipedia.org/wiki/JSON) or [XML](https://en.wikipedia.org/wiki/XML)).

The guarantee that std::from_chars can recover every floating-point value formatted by [std::to_chars](/cpp/utility/to_chars/) exactly is only provided if both functions are from the same implementation.

A pattern consisting of a sign with no digits following it is treated as pattern that did not match anything.

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

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2955 | C++17 | this function was in <utility> and used std::error_code | moved to <charconv> and uses std::errc |
| LWG 3373 | C++17 | std::from_chars_result might have additional members | additional members are prohibited |

## See also
- [from_chars_result](/cpp/utility/from_chars_result/)
- [to_chars](/cpp/utility/to_chars/)
- [stoistolstoll](/cpp/string/basic_string/stol/)
- [stofstodstold](/cpp/string/basic_string/stof/)
- [strtolstrtoll](/cpp/string/byte/strtol/)
- [strtofstrtodstrtold](/cpp/string/byte/strtof/)
- [scanffscanfsscanf](/cpp/io/c/scanf/)
- [stdin](/cpp/io/c/std_streams/)
- [operator>>](/cpp/io/basic_istream/operator_gtgt/)
