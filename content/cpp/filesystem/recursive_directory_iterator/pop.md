---
title: "std::filesystem::recursive_directory_iterator::pop"
source_path: "cpp/filesystem/recursive_directory_iterator/pop"
category: "filesystem"
since: "C++17"
---

Moves the iterator one level up in the directory hierarchy. Invalidates all copies of the previous value of *this.

## Declarations
```cpp
void pop();
```
_(since C++17)_

```cpp
void pop( std::error_code& ec );
```
_(since C++17)_

## Parameters
- `ec`: error code to store the error status to

## Return value
(none)

## Example
This section is incompleteReason: no example
