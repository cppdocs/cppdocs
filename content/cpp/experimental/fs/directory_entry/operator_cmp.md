---
title: "std::experimental::filesystem::directory_entry::operator==,!=,<,<=,>,>="
source_path: "cpp/experimental/fs/directory_entry/operator_cmp"
category: "experimental"
---

Compares the path with the directory entry rhs.

## Declarations
```cpp
bool operator==( const directory_entry& rhs ) const;
```
_(filesystem TS)_

```cpp
bool operator!=( const directory_entry& rhs ) const;
```
_(filesystem TS)_

```cpp
bool operator<( const directory_entry& rhs ) const;
```
_(filesystem TS)_

```cpp
bool operator<=( const directory_entry& rhs ) const;
```
_(filesystem TS)_

```cpp
bool operator>( const directory_entry& rhs ) const;
```
_(filesystem TS)_

```cpp
bool operator>=( const directory_entry& rhs ) const;
```
_(filesystem TS)_

## Parameters
- `rhs`: directory_entry to compare

## See also
- [pathoperator const path&](/cpp/experimental/fs/directory_entry/path/)
