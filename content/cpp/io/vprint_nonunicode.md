---
title: "std::vprint_nonunicode, std::vprint_nonunicode_buffered"
source_path: "cpp/io/vprint_nonunicode"
header: "<print>"
category: "io"
since: "C++23"
---

Format args according to the format string fmt, and writes the result to the output stream.

## Declarations
```cpp
void vprint_nonunicode( std::FILE* stream,
std::string_view fmt, std::format_args args );
```
_(since C++23)_

```cpp
void vprint_nonunicode_buffered
( std::FILE* stream, std::string_view fmt, std::format_args args );
```
_(since C++23)_

```cpp
void vprint_nonunicode_buffered
( std::string_view fmt, std::format_args args );
```
_(since C++23)_

## Parameters
- `stream`: output file stream to write to
- `fmt`: [edit]an object that represents the format string. The format string consists of ordinary characters (except { and }), which are copied unchanged to the output, escape sequences {{ and }}, which are replaced with { and } respectively in the output, and replacement fields. Each replacement field has the following format: { arg-id (optional) } (1) { arg-id (optional) : format-spec } (2) 1) replacement field without a format specification 2) replacement field with a format specification arg-id - specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error. format-spec - the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }. For basic types and standard string types, the format specification is interpreted as standard format specification. For chrono types, the format specification is interpreted as chrono format specification. For range types, the format specification is interpreted as range format specification. For std::pair and std::tuple, the format specification is interpreted as tuple format specification. For std::thread::id and std::stacktrace_entry, see thread id format specification and stacktrace entry format specification. For std::basic_stacktrace, no format specifier is allowed. (since C++23) For std::filesystem::path, see path format specification. (since C++26) For other formattable types, the format specification is determined by user-defined formatter specializations.
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.
- `args`: arguments to be formatted
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
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P3107R5 | C++23 | printing operations were always buffered | provides unbuffered printing operations |
| P3235R3 | C++23 | the names of the functions addedby P3107R5 were misleading | changed the function names |

## See also
- [vprint_unicodevprint_unicode_buffered](/cpp/io/vprint_unicode/)
- [stdout](/cpp/io/c/std_streams/)
- [type-erased](/cpp/utility/format/basic_format_args/)
- [vprint_nonunicode(std::ostream)](/cpp/io/basic_ostream/vprint_nonunicode/)
- [type-erased](/cpp/utility/format/basic_format_args/)
- [print](/cpp/io/print/)
- [stdout](/cpp/io/c/std_streams/)
- [formatted](/cpp/utility/format/)
- [format](/cpp/utility/format/format/)
