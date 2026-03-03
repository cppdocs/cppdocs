---
title: "std::format_to"
source_path: "cpp/utility/format/format_to"
header: "<format>"
category: "utility"
since: "C++20"
---

Format args according to the format string fmt, and write the result to the output iterator out. If present, loc is used for locale-specific formatting.

## Declarations
```cpp
template< class OutputIt, class... Args >
OutputIt format_to( OutputIt out,
std::format_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

```cpp
template< class OutputIt, class... Args >
OutputIt format_to( OutputIt out,
std::wformat_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

```cpp
template< class OutputIt, class... Args >
OutputIt format_to( OutputIt out, const std::locale& loc,
std::format_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

```cpp
template< class OutputIt, class... Args >
OutputIt format_to( OutputIt out, const std::locale& loc,
std::wformat_string<Args...> fmt, Args&&... args );
```
_(since C++20)_

## Parameters
- `out`: iterator to the output buffer
- `fmt`: [edit]an object that represents the format string. The format string consists of ordinary characters (except { and }), which are copied unchanged to the output, escape sequences {{ and }}, which are replaced with { and } respectively in the output, and replacement fields. Each replacement field has the following format: { arg-id (optional) } (1) { arg-id (optional) : format-spec } (2) 1) replacement field without a format specification 2) replacement field with a format specification arg-id - specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error. format-spec - the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }. For basic types and standard string types, the format specification is interpreted as standard format specification. For chrono types, the format specification is interpreted as chrono format specification. For range types, the format specification is interpreted as range format specification. For std::pair and std::tuple, the format specification is interpreted as tuple format specification. For std::thread::id and std::stacktrace_entry, see thread id format specification and stacktrace entry format specification. For std::basic_stacktrace, no format specifier is allowed. (since C++23) For std::filesystem::path, see path format specification. (since C++26) For other formattable types, the format specification is determined by user-defined formatter specializations.
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.
- `args...`: arguments to be formatted
- `loc`: std::locale used for locale-specific formatting
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.

## Return value
Iterator past the end of the output range.

## Notes
As of [P2216R3](https://wg21.link/P2216R3), it is an error if the format string is not a constant expression. [std::vformat_to](/cpp/utility/format/vformat_to/) or std::runtime_format(since C++26) can be used in this case.

## Example
```cpp
#include <format>
#include <iostream>
#include <iterator>
#include <string>
 
int main()
{
    std::string buffer;
 
    std::format_to
    (
        std::back_inserter(buffer), // < OutputIt
        "Hello, C++{}!\n",          // < fmt
        "20"                        // < arg
    );
    std::cout << buffer;
    buffer.clear();
 
    std::format_to
    (
        std::back_inserter(buffer), // < OutputIt
        "Hello, {0}::{1}!{2}",      // < fmt
        "std",                      // < arg {0}
        "format_to()",              // < arg {1}
        "\n",                       // < arg {2}
        "extra param(s)..."         // < unused
    );
    std::cout << buffer << std::flush;
 
    std::wstring wbuffer;
    std::format_to
    (
        std::back_inserter(wbuffer),// < OutputIt
        L"Hello, {2}::{1}!{0}",     // < fmt
        L"\n",                      // < arg {0}
        L"format_to()",             // < arg {1}
        L"std",                     // < arg {2}
        L"...is not..."             // < unused
        L"...an error!"             // < unused
    );
    std::wcout << wbuffer;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3539 | C++20 | out could not be a move-only iterator | it can be |
| P2216R3 | C++20 | throws std::format_error for invalid format string | results in compile-time error instead |
| P2418R2 | C++20 | objects that are neither const-usable nor copyable(such as generator-like objects) are not formattable | allow formatting these objects |
| P2508R1 | C++20 | there's no user-visible name for this facility | the name basic_format_string is exposed |

## See also
- [format](/cpp/utility/format/format/)
- [format_to_n](/cpp/utility/format/format_to_n/)
