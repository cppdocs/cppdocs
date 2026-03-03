---
title: "std::filesystem::directory_entry::operator==,!=,<,<=,>,>=,<=>"
source_path: "cpp/filesystem/directory_entry/operator_cmp"
category: "filesystem"
since: "C++17"
---

Compares the path with the directory entry rhs.

## Declarations
```cpp
bool operator==( const directory_entry& rhs ) const noexcept;
```
_(since C++17)_

```cpp
bool operator!=( const directory_entry& rhs ) const noexcept;
```
_(since C++17) (until C++20)_

```cpp
bool operator<( const directory_entry& rhs ) const noexcept;
```
_(since C++17) (until C++20)_

```cpp
bool operator<=( const directory_entry& rhs ) const noexcept;
```
_(since C++17) (until C++20)_

```cpp
bool operator>( const directory_entry& rhs ) const noexcept;
```
_(since C++17) (until C++20)_

```cpp
bool operator>=( const directory_entry& rhs ) const noexcept;
```
_(since C++17) (until C++20)_

```cpp
std::strong_ordering operator<=>( const directory_entry& rhs ) const noexcept;
```
_(since C++20)_

## Parameters
- `rhs`: directory_entry to compare

## See also
- [pathoperator const path&](/cpp/filesystem/directory_entry/path/)
