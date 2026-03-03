---
title: "std::filesystem::current_path"
source_path: "cpp/filesystem/current_path"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Returns or changes the current path.

## Declarations
```cpp
path current_path();
```
_(since C++17)_

```cpp
path current_path( std::error_code& ec );
```
_(since C++17)_

```cpp
void current_path( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
void current_path( const std::filesystem::path& p,
std::error_code& ec ) noexcept;
```
_(since C++17)_

## Parameters
- `p`: path to change the current working directory to
- `ec`: out-parameter for error reporting in the non-throwing overloads

## Notes
The current working directory is the directory, associated with the process, that is used as the starting location in pathname resolution for relative paths.

The current path as returned by many operating systems is a dangerous global variable. It may be changed unexpectedly by third-party or system library functions, or by another thread.

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    std::cout << "Current path is " << fs::current_path() << '\n'; // (1)
    fs::current_path(fs::temp_directory_path()); // (3)
    std::cout << "Current path is " << fs::current_path() << '\n';
}
```

## See also
- [temp_directory_path](/cpp/filesystem/temp_directory_path/)
