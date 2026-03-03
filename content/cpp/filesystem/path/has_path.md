---
title: "std::filesystem::path::has_root_path, std::filesystem::path::has_root_name, std::filesystem::path::has_root_directory, std::filesystem::path::has_relative_path, std::filesystem::path::has_parent_path, std::filesystem::path::has_filename, std::filesystem::path::has_stem, std::filesystem::path::has_extension"
source_path: "cpp/filesystem/path/has_path"
category: "filesystem"
since: "C++17"
---

Checks whether the path contains the corresponding path element.

## Declarations
```cpp
bool has_root_path() const;
```
_(since C++17)_

```cpp
bool has_root_name() const;
```
_(since C++17)_

```cpp
bool has_root_directory() const;
```
_(since C++17)_

```cpp
bool has_relative_path() const;
```
_(since C++17)_

```cpp
bool has_parent_path() const;
```
_(since C++17)_

```cpp
bool has_filename() const;
```
_(since C++17)_

```cpp
bool has_stem() const;
```
_(since C++17)_

```cpp
bool has_extension() const;
```
_(since C++17)_

## Return value
true if the corresponding path component is not empty, false otherwise.

## Example
This section is incompleteReason: no example

## See also
- [empty](/cpp/filesystem/path/empty/)
