---
title: "std::filesystem::directory_entry::is_directory"
source_path: "cpp/filesystem/directory_entry/is_directory"
category: "filesystem"
since: "C++17"
---

Checks whether the pointed-to object is a directory. Effectively returns:

## Declarations
```cpp
bool is_directory() const;
```
_(since C++17)_

```cpp
bool is_directory( std::error_code& ec ) const noexcept;
```
_(since C++17)_

## Parameters
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if the referred-to filesystem object is a directory, false otherwise.

## Example
```cpp
#include <filesystem>
#include <iostream>
#include <string_view>
 
namespace fs = std::filesystem;
 
void check_directory(fs::directory_entry const& d, std::string_view rem = "")
{
    std::cout << "is_directory(" << d << "): " << d.is_directory() << rem << '\n';
}
 
int main()
{
    fs::directory_entry d1(".");
    fs::directory_entry d2("file.txt");
    fs::directory_entry d3("new_dir");
 
    std::cout << std::boolalpha;
 
    check_directory(d1);
    check_directory(d2);
    check_directory(d3, " (has not been created yet).");
 
    std::filesystem::create_directory("new_dir");
 
    check_directory(d3, " (before refresh).");
    d3.refresh();
    check_directory(d3, " (after refresh).");
}
```

## See also
- [is_directory](/cpp/filesystem/is_directory/)
