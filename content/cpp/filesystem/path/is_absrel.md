---
title: "std::filesystem::path::is_absolute,is_relative"
source_path: "cpp/filesystem/path/is_absrel"
category: "filesystem"
since: "C++17"
---

Checks whether the path is absolute or relative. An absolute path is a path that unambiguously identifies the location of a file without reference to an additional starting location. The first version returns true if the path, in native format, is absolute, false otherwise; the second version the other way round.

## Declarations
```cpp
bool is_absolute() const;
```
_(since C++17)_

```cpp
bool is_relative() const;
```
_(since C++17)_

## Notes
The path "/" is absolute on a POSIX OS, but is relative on Windows.

## See also
- [absolute](/cpp/filesystem/absolute/)
