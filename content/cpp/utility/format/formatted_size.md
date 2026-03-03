---
title: "std::formatted_size"
source_path: "cpp/utility/format/formatted_size"
header: "<format>"
category: "utility"
since: "C++20"
---

Determine the total number of characters in the formatted string by formatting args according to the format string fmt. If present, loc is used for locale-specific formatting.

## Declarations
```cpp
template< class... Args >
std::size_t formatted_size( std::format_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

```cpp
template< class... Args >
std::size_t formatted_size( std::wformat_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

```cpp
template< class... Args >
std::size_t formatted_size( const std::locale& loc,
std::format_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

```cpp
template< class... Args >
std::size_t formatted_size( const std::locale& loc,
std::wformat_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

## Parameters
- `fmt`: an object that represents the format string. The format string consists of ordinary characters (except { and }), which are copied unchanged to the output, escape sequences {{ and }}, which are replaced with { and } respectively in the output, and replacement fields. Each replacement field has the following format: { arg-id (optional) } (1) { arg-id (optional) : format-spec } (2) 1) replacement field without a format specification 2) replacement field with a format specification arg-id - specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error. format-spec - the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }. For basic types and standard string types, the format specification is interpreted as standard format specification. For chrono types, the format specification is interpreted as chrono format specification. For range types, the format specification is interpreted as range format specification. For std::pair and std::tuple, the format specification is interpreted as tuple format specification. For std::thread::id and std::stacktrace_entry, see thread id format specification and stacktrace entry format specification. For std::basic_stacktrace, no format specifier is allowed. (since C++23) For std::filesystem::path, see path format specification. (since C++26) For other formattable types, the format specification is determined by user-defined formatter specializations.
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.
- `args...`: arguments to be formatted
- `loc`: std::locale used for locale-specific formatting
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.

## Return value
The total number of characters in the formatted string.

## Example
```cpp
#include <format>
#include <iomanip>
#include <iostream>
#include <string_view>
#include <vector>
 
int main()
{
    using namespace std::literals::string_view_literals;
 
    constexpr auto fmt_str{"Hubble's H{0} {1} {2:*^4} miles/sec/mpc."sv};
    constexpr auto sub_zero{"\N{SUBSCRIPT ZERO}"sv}; // "₀" or {0342, 130, 128}
    constexpr auto aprox_equ{"\N{APPROXIMATELY EQUAL TO}"sv}; // "≅" or {0342, 137, 133}
    constexpr int Ho{42}; // H₀
 
    const auto min_buffer_size{std::formatted_size(fmt_str, sub_zero, aprox_equ, Ho)};
    std::cout << "Min buffer size = " << min_buffer_size << '\n';
 
    // Use std::vector as dynamic buffer. The buffer does not include the trailing '\0'.
    std::vector<char> buffer(min_buffer_size);
 
    std::format_to_n(buffer.data(), buffer.size(), fmt_str, sub_zero, aprox_equ, Ho);
    std::cout << "Buffer: "
              << std::quoted(std::string_view{buffer.data(), min_buffer_size})
              << '\n';
 
    // Print the buffer directly after adding the trailing '\0'.
    buffer.push_back('\0');
    std::cout << "Buffer: " << std::quoted(buffer.data()) << '\n';
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
