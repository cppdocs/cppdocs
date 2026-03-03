---
title: "std::hash<std::text_encoding>"
source_path: "cpp/text/text_encoding/hash"
header: "<text_encoding>"
category: "text"
since: "C++26"
---

The template specialization of [std::hash](/cpp/utility/hash/) for std::text_encoding allows users to obtain hashes of encoded id and name of type std::text_encoding.

## Declarations
```cpp
template<> struct hash<std::text_encoding>;
```
_(since C++26)_

## Example
This section is incompleteReason: no example

## See also
- [hash](/cpp/utility/hash/)
- [std::hash<std::basic_stacktrace>](/cpp/utility/basic_stacktrace/hash/)
- [std::basic_stacktrace](/cpp/utility/basic_stacktrace/)
