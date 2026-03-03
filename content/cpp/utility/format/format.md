---
title: "std::format"
source_path: "cpp/utility/format/format"
header: "<format>"
category: "utility"
since: "C++20"
---

Format args according to the format string fmt, and return the result as a string. If present, loc is used for locale-specific formatting.

## Declarations
```cpp
template< class... Args >
std::string format( std::format_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

```cpp
template< class... Args >
std::wstring format( std::wformat_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

```cpp
template< class... Args >
std::string format( const std::locale& loc,
std::format_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

```cpp
template< class... Args >
std::wstring format( const std::locale& loc,
std::wformat_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

## Parameters
- `fmt`: [edit]an object that represents the format string. The format string consists of ordinary characters (except { and }), which are copied unchanged to the output, escape sequences {{ and }}, which are replaced with { and } respectively in the output, and replacement fields. Each replacement field has the following format: { arg-id (optional) } (1) { arg-id (optional) : format-spec } (2) 1) replacement field without a format specification 2) replacement field with a format specification arg-id - specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error. format-spec - the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }. For basic types and standard string types, the format specification is interpreted as standard format specification. For chrono types, the format specification is interpreted as chrono format specification. For range types, the format specification is interpreted as range format specification. For std::pair and std::tuple, the format specification is interpreted as tuple format specification. For std::thread::id and std::stacktrace_entry, see thread id format specification and stacktrace entry format specification. For std::basic_stacktrace, no format specifier is allowed. (since C++23) For std::filesystem::path, see path format specification. (since C++26) For other formattable types, the format specification is determined by user-defined formatter specializations.
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.
- `args...`: arguments to be formatted
- `loc`: std::locale used for locale-specific formatting
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.

## Return value
A string object holding the formatted result.

## Notes
It is not an error to provide more arguments than the format string requires:

As of [P2216R3](https://wg21.link/P2216R3), it is an error if the format string is not a constant expression. [std::vformat](/cpp/utility/format/vformat/) can be used in this case.

std::runtime_format can be used directly on std::format instead of [std::vformat](/cpp/utility/format/vformat/) which requires [std::basic_format_args](/cpp/utility/format/basic_format_args/) as an argument.

## Example
```cpp
#include <format>
#include <iostream>
#include <string>
#include <string_view>
 
template<typename... Args>
std::string dyna_print(std::string_view rt_fmt_str, Args&&... args)
{
    return std::vformat(rt_fmt_str, std::make_format_args(args...));
}
 
int main()
{
    std::cout << std::format("Hello {}!\n", "world");
 
    std::string fmt;
    for (int i{}; i != 3; ++i)
    {
        fmt += "{} "; // constructs the formatting string
        std::cout << fmt << " : ";
        std::cout << dyna_print(fmt, "alpha", 'Z', 3.14, "unused");
        std::cout << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2216R3 | C++20 | throws std::format_error for invalid format string | invalid format string results in compile-time error |
| P2418R2 | C++20 | objects that are neither const-usable nor copyable(such as generator-like objects) are not formattable | allow formatting these objects |
| P2508R1 | C++20 | there's no user-visible name for this facility | the name basic_format_string is exposed |

## See also
- [format_to](/cpp/utility/format/format_to/)
- [format_to_n](/cpp/utility/format/format_to_n/)
