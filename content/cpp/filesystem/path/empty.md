---
title: "std::filesystem::path::empty"
source_path: "cpp/filesystem/path/empty"
category: "filesystem"
since: "C++17"
---

Checks if the path in generic format is empty.

## Declarations
```cpp
bool empty() const noexcept;
```
_(since C++17)_

## Return value
true if the path is empty, false otherwise.

## Notes
An empty path can be obtained by calling [clear](/cpp/filesystem/path/clear/) and by default-constructing a path. It can also be returned by a path decomposition function (such as [extension](/cpp/filesystem/path/extension/)) if the corresponding component is not present in the path.

An empty path is classified as a relative path.

## See also
- [(constructor)](/cpp/filesystem/path/path/)
