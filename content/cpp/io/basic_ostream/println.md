---
title: "std::println(std::ostream)"
source_path: "cpp/io/basic_ostream/println"
header: "<ostream>"
category: "io"
since: "C++23"
---

Formats args according to the format string fmt with appended '\n' (which means that each output ends with a new-line), and inserts the result into os stream.

## Declarations
```cpp
template< class... Args >
void println( std::ostream& os, std::format_string<Args...> fmt, Args&&... args );
```
_(since C++23)_

```cpp
void println( std::ostream& os );
```
_(since C++26)_

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
Although overload ([2](#Version_2)) is added in C++26, all known implementations make it available in C++23 mode.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4088 | C++23 | (1) ignored the locale imbued in os in formatting arguments | such locale is used |

## See also
- [print(std::ostream)](/cpp/io/basic_ostream/print/)
- [formatted](/cpp/utility/format/)
- [println](/cpp/io/println/)
- [format](/cpp/utility/format/format/)
