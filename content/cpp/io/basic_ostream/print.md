---
title: "std::print(std::ostream)"
source_path: "cpp/io/basic_ostream/print"
header: "<ostream>"
category: "io"
since: "C++23"
---

Formats args according to the format string fmt, and inserts the result into os stream.

## Declarations
```cpp
template< class... Args >
void print( std::ostream& os, std::format_string<Args...> fmt, Args&&... args );
```
_(since C++23)_

## Parameters
- `os`: output stream to insert data into
- `fmt`: [edit]an object that represents the format string. The format string consists of ordinary characters (except { and }), which are copied unchanged to the output, escape sequences {{ and }}, which are replaced with { and } respectively in the output, and replacement fields. Each replacement field has the following format: { arg-id (optional) } (1) { arg-id (optional) : format-spec } (2) 1) replacement field without a format specification 2) replacement field with a format specification arg-id - specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error. format-spec - the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }. For basic types and standard string types, the format specification is interpreted as standard format specification. For chrono types, the format specification is interpreted as chrono format specification. For range types, the format specification is interpreted as range format specification. For std::pair and std::tuple, the format specification is interpreted as tuple format specification. For std::thread::id and std::stacktrace_entry, see thread id format specification and stacktrace entry format specification. For std::basic_stacktrace, no format specifier is allowed. (since C++23) For std::filesystem::path, see path format specification. (since C++26) For other formattable types, the format specification is determined by user-defined formatter specializations.
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.
- `args...`: arguments to be formatted
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.

## Return value
(none)

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_print
202207L
(C++23)
Formatted output
__cpp_lib_format
202207L
(C++23)
Exposing std::basic_format_string

## Example
```cpp
#include <array>
#include <cctype>
#include <cstdio>
#include <format>
#include <numbers>
#include <ranges>
#include <sstream>
 
int main()
{
    std::array<char, 24> buf;
    std::format_to(buf.begin(), "{:.15f}", std::numbers::sqrt2);
 
    unsigned num{}, sum{};
 
    auto v = buf
           | std::views::filter(isdigit)
           | std::views::transform([](char x) { return x - '0'; })
           | std::views::take_while([&sum](char) { return sum < 42; });
 
    for (auto n : v)
        sum += n, ++num;
 
    std::stringstream stream;
 
#ifdef __cpp_lib_print
    std::print(stream,
#else
    stream << std::format(
#endif
        "√2 = {}...\n"
        "The sum of its first {} digits is {}{}",
        std::numbers::sqrt2, num, sum, '.'
    );
 
    std::puts(stream.str().data());
}
```

## See also
- [println(std::ostream)](/cpp/io/basic_ostream/println/)
- [formatted](/cpp/utility/format/)
- [print](/cpp/io/print/)
- [stdout](/cpp/io/c/std_streams/)
- [formatted](/cpp/utility/format/)
- [format](/cpp/utility/format/format/)
