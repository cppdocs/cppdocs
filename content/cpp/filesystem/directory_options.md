---
title: "std::filesystem::directory_options"
source_path: "cpp/filesystem/directory_options"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

This type represents available options that control the behavior of the [directory_iterator](/cpp/filesystem/directory_iterator/) and [recursive_directory_iterator](/cpp/filesystem/recursive_directory_iterator/).

## Declarations
```cpp
enum class directory_options {
none = /* unspecified */,
follow_directory_symlink = /* unspecified */,
skip_permission_denied = /* unspecified */
};
```
_(since C++17)_

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/filesystem/directory_iterator/directory_iterator/)
- [(constructor)](/cpp/filesystem/recursive_directory_iterator/recursive_directory_iterator/)
