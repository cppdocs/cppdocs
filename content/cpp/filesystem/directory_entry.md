---
title: "std::filesystem::directory_entry"
source_path: "cpp/filesystem/directory_entry"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Represents a directory entry. The object stores a path as a member and may also store additional file attributes (hard link count, status, symlink status, file size, and last write time) during directory iteration.

## Declarations
```cpp
class directory_entry;
```
_(since C++17)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3171 | C++17 | directory_entry couldn't be inserted by operator<< because of LWG2989 | output enabled again |
