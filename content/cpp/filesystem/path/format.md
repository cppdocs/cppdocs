---
title: "std::filesystem::path::format"
source_path: "cpp/filesystem/path/format"
category: "filesystem"
since: "C++17"
---

Determines how string representations of pathnames are interpreted by the constructors of [std::filesystem::path](/cpp/filesystem/path/) that accept strings.

## Declarations
```cpp
enum format {
native_format,
generic_format,
auto_format
};
```
_(since C++17)_

## Notes
On POSIX systems, there is no difference between native and generic format.

## See also
- [(constructor)](/cpp/filesystem/path/path/)
