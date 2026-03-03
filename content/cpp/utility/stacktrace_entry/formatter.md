---
title: "std::formatter<std::stacktrace_entry>"
source_path: "cpp/utility/stacktrace_entry/formatter"
header: "<stacktrace>"
category: "utility"
since: "C++23"
---

The template specialization of [std::formatter](/cpp/utility/format/formatter/) for std::stacktrace_entry allows users to convert a stacktrace entry object to string using [formatting functions](/cpp/utility/format/) such as [std::format](/cpp/utility/format/format/).

## Declarations
```cpp
template<>
struct formatter<std::stacktrace_entry>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [formatter](/cpp/utility/format/formatter/)
- [print](/cpp/io/print/)
- [stdout](/cpp/io/c/std_streams/)
- [formatted](/cpp/utility/format/)
