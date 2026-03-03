---
title: "std::hash<std::basic_stacktrace>"
source_path: "cpp/utility/basic_stacktrace/hash"
header: "<stacktrace>"
category: "utility"
since: "C++23"
---

The template specialization of [std::hash](/cpp/utility/hash/) for std::basic_stacktrace allows users to obtain hashes of values of type std::basic_stacktrace.

## Declarations
```cpp
template< class Allocator > struct hash<std::basic_stacktrace<Allocator>>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [hash](/cpp/utility/hash/)
- [std::hash<std::stacktrace_entry>](/cpp/utility/stacktrace_entry/hash/)
- [std::stacktrace_entry](/cpp/utility/stacktrace_entry/)
