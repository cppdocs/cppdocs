---
title: "std::filesystem::path"
source_path: "cpp/filesystem/path"
header: "<filesystem>"
---

Objects of type path represent paths on a filesystem. Only syntactic aspects of paths are handled: the pathname may represent a non-existing path or even one that is not allowed to exist on the current file system or OS.

## Declarations
```cpp
class path;
```
_(since C++17)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3657 | C++17 | hash for path was disabled | enabled |
