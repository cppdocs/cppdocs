---
title: "std::to_chars"
source_path: "cpp/utility/to_chars"
header: "<charconv>"
category: "utility"
since: "C++17"
---

Converts value into a character string by successively filling the range [first,last), where [first,last) is required to be a [valid range](/cpp/iterator/#Ranges).

## Declarations
```cpp
std::to_chars_result
to_chars( char* first, char* last,
/* integer-type */ value, int base = 10 );
```
_(since C++17) (constexpr since C++23)_

```cpp
std::to_chars_result
to_chars( char*, char*, bool, int = 10 ) = delete;
```
_(since C++17)_

```cpp
std::to_chars_result
to_chars( char* first, char* last, /* floating-point-type */ value );
```
_(since C++17)_

```cpp
std::to_chars_result
to_chars( char* first, char* last, /* floating-point-type */ value,
std::chars_format fmt );
```
_(since C++17)_

```cpp
std::to_chars_result
to_chars( char* first, char* last, /* floating-point-type */ value,
std::chars_format fmt, int precision );
```
_(since C++17)_

## Parameters
- `first, last`: character range to write to
- `value`: the value to convert to its string representation
- `base`: integer base to use: a value between 2 and 36 (inclusive).
- `fmt`: floating-point formatting to use, a bitmask of type std::chars_format
- `precision`: floating-point precision to use

## Return value
On success, returns a value of type [std::to_chars_result](/cpp/utility/to_chars_result/) such that ec equals value-initialized [std::errc](/cpp/error/errc/) and ptr is the one-past-the-end pointer of the characters written. Note that the string is not NUL-terminated.

## Notes
Unlike other formatting functions in C++ and C libraries, std::to_chars is locale-independent, non-allocating, and non-throwing. Only a small subset of formatting policies used by other libraries (such as [std::sprintf](/cpp/io/c/printf/)) is provided. This is intended to allow the fastest possible implementation that is useful in common high-throughput contexts such as text-based interchange ([JSON](https://en.wikipedia.org/wiki/JSON) or [XML](https://en.wikipedia.org/wiki/XML)).

The guarantee that [std::from_chars](/cpp/utility/from_chars/) can recover every floating-point value formatted by std::to_chars exactly is only provided if both functions are from the same implementation.

It is required to explicitly cast a bool value to another integer type if it is wanted to format the value as "0"/"1".

## Example
```cpp
#include <charconv>
#include <iomanip>
#include <iostream>
#include <string_view>
#include <system_error>
 
void show_to_chars(auto... format_args)
{
    const size_t buf_size = 10;
    char buf[buf_size]{};
    std::to_chars_result result = std::to_chars(buf, buf + buf_size, format_args...);
 
    if (result.ec != std::errc())
        std::cout << std::make_error_code(result.ec).message() << '\n';
    else
    {
        std::string_view str(buf, result.ptr - buf);
        std::cout << std::quoted(str) << '\n';
    }
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

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2955 | C++17 | this function was in <utility> and used std::error_code | moved to <charconv> and uses std::errc |
| LWG 3266 | C++17 | bool argument was accepted and promoted to int | rejected by a deleted overload |
| LWG 3373 | C++17 | std::to_chars_result might have additional members | additional members are disallowed |

## See also
- [to_chars_result](/cpp/utility/to_chars_result/)
- [from_chars](/cpp/utility/from_chars/)
- [to_string](/cpp/string/basic_string/to_string/)
- [printffprintfsprintfsnprintf](/cpp/io/c/printf/)
- [stdout](/cpp/io/c/std_streams/)
- [operator<<](/cpp/io/basic_ostream/operator_ltlt/)
