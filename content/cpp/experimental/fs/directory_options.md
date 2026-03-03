---
title: "std::experimental::filesystem::directory_options"
source_path: "cpp/experimental/fs/directory_options"
header: "<experimental/filesystem>"
category: "experimental"
---

This type represents available options that control the behavior of the [directory_iterator](/cpp/experimental/fs/directory_iterator/) and [recursive_directory_iterator](/cpp/experimental/fs/recursive_directory_iterator/).

## Declarations
```cpp
enum class directory_options {
none,
follow_directory_symlink,
skip_permission_denied
};
```
_(filesystem TS)_

## See also
- [(constructor)](/cpp/experimental/fs/directory_iterator/directory_iterator/)
- [(constructor)](/cpp/experimental/fs/recursive_directory_iterator/recursive_directory_iterator/)
