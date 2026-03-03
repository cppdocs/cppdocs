---
title: "std::filesystem::swap(std::filesystem::path)"
source_path: "cpp/filesystem/path/swap2"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
void swap( std::filesystem::path& lhs, std::filesystem::path& rhs ) noexcept;
```
_(since C++17)_

## Parameters
- `lhs, rhs`: paths whose states to swap

## Return value
(none)

## See also
- [swap](/cpp/filesystem/path/swap/)
