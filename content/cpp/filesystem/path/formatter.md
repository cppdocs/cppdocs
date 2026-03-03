---
title: "std::formatter<std::filesystem::path>"
source_path: "cpp/filesystem/path/formatter"
header: "<filesystem>"
category: "filesystem"
since: "C++26"
---

The template specialization of [std::formatter](/cpp/utility/format/formatter/) for the [std::filesystem::path](/cpp/filesystem/path/) class allows users to convert a pathname to its textual representation using [formatting functions](/cpp/utility/format/). This specialization is [debug-enabled](/cpp/utility/format/formatter/#Basic_standard_specializations).

## Declarations
```cpp
template< class CharT >
struct formatter<std::filesystem::path, CharT>;
```
_(since C++26)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_format_path
202403L
(C++26)
formatting support for std::filesystem::path

## Example
This section is incompleteReason: no example

## See also
- [formatter](/cpp/utility/format/formatter/)
