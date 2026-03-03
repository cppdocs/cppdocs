---
title: "std::experimental::filesystem::path::is_absolute,is_relative"
source_path: "cpp/experimental/fs/path/is_absrel"
category: "experimental"
---

Checks whether the path is absolute or relative. An absolute path is such that the elements of root_path() uniquely identify a file system location. The first version returns true if the path is absolute, false otherwise; the second version the other way round.

## Declarations
```cpp
bool is_absolute() const;
```
_(filesystem TS)_

```cpp
bool is_relative() const;
```
_(filesystem TS)_

## See also
- [has_root_pathhas_root_namehas_root_directoryhas_relative_pathhas_parent_pathhas_filenamehas_stemhas_extension](/cpp/experimental/fs/path/has_path/)
