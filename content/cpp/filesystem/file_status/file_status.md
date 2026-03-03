---
title: "std::filesystem::file_status::file_status"
source_path: "cpp/filesystem/file_status/file_status"
category: "filesystem"
since: "C++17"
---

Constructs a new file_status object.

## Declarations
```cpp
file_status() noexcept : file_status(std::filesystem::file_type::none) {}
```
_(since C++17)_

```cpp
file_status( const file_status& ) noexcept = default;
```
_(since C++17)_

```cpp
file_status( file_status&& ) noexcept = default;
```
_(since C++17)_

```cpp
explicit file_status(
std::filesystem::file_type type,
std::filesystem::perms permissions = std::filesystem::perms::unknown ) noexcept;
```
_(since C++17)_

## Parameters
- `type`: type of the file status
- `permissions`: permissions of the file status

## Example
This section is incompleteReason: no example
