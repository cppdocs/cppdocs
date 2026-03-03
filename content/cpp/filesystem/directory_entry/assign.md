---
title: "std::filesystem::directory_entry::assign"
source_path: "cpp/filesystem/directory_entry/assign"
category: "filesystem"
since: "C++17"
---

Assigns new content to the directory entry object. Sets the path to p and calls [refresh](/cpp/filesystem/directory_entry/refresh/) to update the cached attributes. If an error occurs, the values of the cached attributes are unspecified.

## Declarations
```cpp
void assign( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
void assign( const std::filesystem::path& p, std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: path to the filesystem object to which the directory entry will refer
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Example
```cpp
#include <filesystem>
#include <fstream>
#include <iostream>
 
void print_entry_info(const std::filesystem::directory_entry& entry)
{
    if (std::cout << "The entry " << entry; not entry.exists())
    {
        std::cout << " does not exists on the file system\n";
        return;
    }
    std::cout << " is ";
    if (entry.is_directory())
        std::cout << "a directory\n";
    if (entry.is_regular_file())
        std::cout << "a regular file\n";
    /*...*/
}
 
int main()
{
    std::filesystem::current_path(std::filesystem::temp_directory_path());
 
    std::filesystem::directory_entry entry{std::filesystem::current_path()};
    print_entry_info(entry);
 
    std::filesystem::path name{"cppreference.html"};
    std::ofstream{name} << "C++";
 
    std::cout << "entry.assign();\n";
    entry.assign(entry/name);
    print_entry_info(entry);
 
    std::cout << "remove(entry);\n";
    std::filesystem::remove(entry);
    print_entry_info(entry); // the entry still contains old "state"
 
    std::cout << "entry.assign();\n";
    entry.assign(entry); // or just call entry.refresh()
    print_entry_info(entry);
}
```

## See also
- [operator=](/cpp/filesystem/directory_entry/operator/)
