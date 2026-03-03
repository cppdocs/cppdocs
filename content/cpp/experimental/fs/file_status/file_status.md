---
title: "std::experimental::filesystem::file_status::file_status"
source_path: "cpp/experimental/fs/file_status/file_status"
category: "experimental"
---

Constructs a new file_status object.

## Declarations
```cpp
file_status( const file_status& ) = default;
```
_(filesystem TS)_

```cpp
file_status( file_status&& ) = default;
```
_(filesystem TS)_

```cpp
explicit file_status( file_type type = file_type::none,
perms permissions = perms::unknown );
```
_(filesystem TS)_
