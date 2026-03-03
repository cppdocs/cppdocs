---
title: "std::experimental::filesystem::path::has_..."
source_path: "cpp/experimental/fs/path/has_path"
category: "experimental"
---

Checks whether the path contains the corresponding path element.

## Declarations
```cpp
bool has_root_path() const;
```
_(filesystem TS)_

```cpp
bool has_root_name() const;
```
_(filesystem TS)_

```cpp
bool has_root_directory() const;
```
_(filesystem TS)_

```cpp
bool has_relative_path() const;
```
_(filesystem TS)_

```cpp
bool has_parent_path() const;
```
_(filesystem TS)_

```cpp
bool has_filename() const;
```
_(filesystem TS)_

```cpp
bool has_stem() const;
```
_(filesystem TS)_

```cpp
bool has_extension() const;
```
_(filesystem TS)_

## Return value
true if the corresponding path is not empty, false otherwise.

## See also
- [empty](/cpp/experimental/fs/path/empty/)
