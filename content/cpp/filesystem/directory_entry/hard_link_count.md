---
title: "std::filesystem::directory_entry::hard_link_count"
source_path: "cpp/filesystem/directory_entry/hard_link_count"
category: "filesystem"
since: "C++17"
---

If the number of hard links is cached in this [directory_entry](/cpp/filesystem/directory_entry/directory_entry/), returns the cached value. Otherwise, returns:

## Declarations
```cpp
std::uintmax_t hard_link_count() const;
```
_(since C++17)_

```cpp
std::uintmax_t hard_link_count( std::error_code& ec ) const noexcept;
```
_(since C++17)_

## Parameters
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
The number of hard links for the referred-to filesystem object.

## Example
This section is incompleteReason: no example

## See also
- [hard_link_count](/cpp/filesystem/hard_link_count/)
