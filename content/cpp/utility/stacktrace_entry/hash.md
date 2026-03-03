---
title: "std::hash<std::stacktrace_entry>"
source_path: "cpp/utility/stacktrace_entry/hash"
header: "<stacktrace>"
category: "utility"
since: "C++23"
---

The template specialization of [std::hash](/cpp/utility/hash/) for std::stacktrace_entry allows users to obtain hashes of values of type std::stacktrace_entry.

## Declarations
```cpp
template<> struct hash<std::stacktrace_entry>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [hash](/cpp/utility/hash/)
- [std::hash<std::basic_stacktrace>](/cpp/utility/basic_stacktrace/hash/)
- [std::basic_stacktrace](/cpp/utility/basic_stacktrace/)
