---
title: "std::filesystem::recursive_directory_iterator::operator++, std::filesystem::recursive_directory_iterator::increment"
source_path: "cpp/filesystem/recursive_directory_iterator/increment"
category: "filesystem"
since: "C++17"
---

Advances the iterator to the next entry. Invalidates all copies of the previous value of *this.

## Declarations
```cpp
recursive_directory_iterator& operator++();
```
_(since C++17)_

```cpp
recursive_directory_iterator& increment( std::error_code& ec );
```
_(since C++17)_

## Parameters
- `ec`: error code to store the error status to

## Return value
*this

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3013 | C++17 | error_code overload marked noexcept but can allocate memory | noexcept removed |
