---
title: "operator==(std::filesystem::file_status)"
source_path: "cpp/filesystem/file_status/operator"
category: "filesystem"
since: "C++20"
---

Checks if two file_status values are equal, i.e. types and permissions represented by them are same respectively.

## Declarations
```cpp
friend bool operator==( const file_status& lhs, const file_status& rhs ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs, rhs`: file_status values to compare

## Return value
lhs.type() == rhs.type() && lhs.permissions() == rhs.permissions()

## See also
- [type](/cpp/filesystem/file_status/type/)
- [permissions](/cpp/filesystem/file_status/permissions/)
