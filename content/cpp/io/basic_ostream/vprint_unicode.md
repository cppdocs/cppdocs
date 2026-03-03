---
title: "std::vprint_unicode(std::ostream)"
source_path: "cpp/io/basic_ostream/vprint_unicode"
header: "<ostream>"
category: "io"
since: "C++23"
---

Format args according to the format string fmt, and writes the result to the output stream os. Behaves as [FormattedOutputFunction](/cpp/named_req/formattedoutputfunction/) of os, except that some details of error reporting [differ](#Exceptions).

## Declarations
```cpp
void vprint_unicode( std::ostream& os,
std::string_view fmt, std::format_args args );
```
_(since C++23)_

## Parameters
- `os`: output stream to insert data into
- `fmt`: [edit]an object that represents the format string. The format string consists of ordinary characters (except { and }), which are copied unchanged to the output, escape sequences {{ and }}, which are replaced with { and } respectively in the output, and replacement fields. Each replacement field has the following format: { arg-id (optional) } (1) { arg-id (optional) : format-spec } (2) 1) replacement field without a format specification 2) replacement field with a format specification arg-id - specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error. format-spec - the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }. For basic types and standard string types, the format specification is interpreted as standard format specification. For chrono types, the format specification is interpreted as chrono format specification. For range types, the format specification is interpreted as range format specification. For std::pair and std::tuple, the format specification is interpreted as tuple format specification. For std::thread::id and std::stacktrace_entry, see thread id format specification and stacktrace entry format specification. For std::basic_stacktrace, no format specifier is allowed. (since C++23) For std::filesystem::path, see path format specification. (since C++26) For other formattable types, the format specification is determined by user-defined formatter specializations.
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.
- `args`: arguments to be formatted
- `arg-id`: specifies the index of the argument in args whose value is to be used for formatting; if it is omitted, the arguments are used in order. The arg-id ﻿s in a format string must all be present or all be omitted. Mixing manual and automatic indexing is an error.
- `format-spec`: the format specification defined by the std::formatter specialization for the corresponding argument. Cannot start with }.

## Notes
If invoking the native Unicode API requires transcoding, the invalid code units are substituted with U+FFFD REPLACEMENT CHARACTER (see "The Unicode Standard - Core Specification", [Chapter 3.9](#External_links)).

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4044 | C++23 | the native Unicode API was always used if theterminal referred to by os can display Unicode | only used if the terminal can only usethe native Unicode API to display Unicode |

## See also
- [vprint_nonunicode(std::ostream)](/cpp/io/basic_ostream/vprint_nonunicode/)
- [type-erased](/cpp/utility/format/basic_format_args/)
- [print(std::ostream)](/cpp/io/basic_ostream/print/)
- [formatted](/cpp/utility/format/)
- [operator<<(std::basic_ostream)](/cpp/io/basic_ostream/operator_ltlt2/)
- [vprint_unicodevprint_unicode_buffered](/cpp/io/vprint_unicode/)
- [stdout](/cpp/io/c/std_streams/)
- [type-erased](/cpp/utility/format/basic_format_args/)
- [format](/cpp/utility/format/format/)
