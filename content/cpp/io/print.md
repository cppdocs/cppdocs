---
title: "std::print"
source_path: "cpp/io/print"
header: "<print>"
category: "io"
since: "C++23"
---

Format args according to the format string fmt, and print the result to an output stream.

## Declarations
```cpp
template< class... Args >
void print( std::format_string<Args...> fmt, Args&&... args );
```
_(since C++23)_

```cpp
template< class... Args >
void print( std::FILE* stream,
std::format_string<Args...> fmt, Args&&... args );
```
_(since C++23)_

## Parameters
- `stream`: output file stream to write to
- `fmt`: [edit]an object that represents the format string. The format string consists of ordinary characters (except { and }), which are copied unchanged to the output, escape sequences {{ and }}, which are replaced with { and } respectively in the output, and replacement fields. Each replacement field has the following format: { arg-id (optional) } (1) { arg-id (optional) : format-spec } (2) 1) replacement field without a format specification 2) replacement field with a format specification arg-id - specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error. format-spec - the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }. For basic types and standard string types, the format specification is interpreted as standard format specification. For chrono types, the format specification is interpreted as chrono format specification. For range types, the format specification is interpreted as range format specification. For std::pair and std::tuple, the format specification is interpreted as tuple format specification. For std::thread::id and std::stacktrace_entry, see thread id format specification and stacktrace entry format specification. For std::basic_stacktrace, no format specifier is allowed. (since C++23) For std::filesystem::path, see path format specification. (since C++26) For other formattable types, the format specification is determined by user-defined formatter specializations.
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.
- `args...`: arguments to be formatted
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_print
202207L
(C++23)
Formatted output
202403L
(C++26)(DR23)
Unbuffered formatted output
202406L
(C++26)(DR23)
Enabling unbuffered formatted output for more formattable types
__cpp_lib_format
202207L
(C++23)
Exposing std::basic_format_string

## Example
```cpp
#include <cstdio>
#include <filesystem>
#include <print>
 
int main()
{
    std::print("{0} {2}{1}!\n", "Hello", 23, "C++");  // overload (1)
 
    const auto tmp {std::filesystem::temp_directory_path() / "test.txt"};
 
    if (std::FILE* stream{std::fopen(tmp.c_str(), "w")})
    {
        std::print(stream, "File: {}", tmp.string()); // overload (2)
        std::fclose(stream);
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P3107R5 | C++23 | only buffered printing operations can be performed | can perform unbuffered printing operations |
| P3235R3 | C++23 | the names of the functions addedby P3107R5 were misleading | changed the function names |

## See also
- [println](/cpp/io/println/)
- [print(std::ostream)](/cpp/io/basic_ostream/print/)
- [formatted](/cpp/utility/format/)
- [format](/cpp/utility/format/format/)
- [format_to](/cpp/utility/format/format_to/)
- [printffprintfsprintfsnprintf](/cpp/io/c/printf/)
- [stdout](/cpp/io/c/std_streams/)
