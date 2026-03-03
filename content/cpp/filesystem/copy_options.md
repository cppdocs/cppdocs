---
title: "std::filesystem::copy_options"
source_path: "cpp/filesystem/copy_options"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

This type represents available options that control the behavior of the [copy()](/cpp/filesystem/copy/) and [copy_file()](/cpp/filesystem/copy_file/) function.

## Declarations
```cpp
enum class copy_options {
none = /* unspecified */,
skip_existing = /* unspecified */,
overwrite_existing = /* unspecified */,
update_existing = /* unspecified */,
recursive = /* unspecified */,
copy_symlinks = /* unspecified */,
skip_symlinks = /* unspecified */,
directories_only = /* unspecified */,
create_symlinks = /* unspecified */,
create_hard_links = /* unspecified */
};
```
_(since C++17)_

## Example
```cpp
#include <cstdlib>
#include <filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    fs::create_directories("sandbox/dir/subdir");
    std::ofstream("sandbox/file1.txt").put('a');
    fs::copy("sandbox/file1.txt", "sandbox/file2.txt"); // copy file
    fs::copy("sandbox/dir", "sandbox/dir2"); // copy directory (non-recursive)
    const auto copyOptions = fs::copy_options::update_existing
                           | fs::copy_options::recursive
                           | fs::copy_options::directories_only
                           ;
    fs::copy("sandbox", "sandbox_copy", copyOptions); 
    static_cast<void>(std::system("tree"));
    fs::remove_all("sandbox");
    fs::remove_all("sandbox_copy");
}
```

## See also
- [copy](/cpp/filesystem/copy/)
- [copy_file](/cpp/filesystem/copy_file/)
