---
title: "std::experimental::filesystem::copy_options"
source_path: "cpp/experimental/fs/copy_options"
header: "<experimental/filesystem>"
category: "experimental"
---

This type represents available options that control the behavior of the [copy()](/cpp/experimental/fs/copy/) and [copy_file()](/cpp/experimental/fs/copy_file/) function.

## Declarations
```cpp
enum class copy_options {
none = 0,
skip_existing = 1,
overwrite_existing = 2,
update_existing = 4,
recursive = 8,
copy_symlinks = 16,
skip_symlinks = 32,
directories_only = 64,
create_symlinks = 128,
create_hard_links = 256
};
```
_(filesystem TS)_

## Example
```cpp
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::create_directories("sandbox/dir/subdir");
    std::ofstream("sandbox/file1.txt").put('a');
    fs::copy("sandbox/file1.txt", "sandbox/file2.txt"); // copy file
    fs::copy("sandbox/dir", "sandbox/dir2"); // copy directory (non-recursive)
    // sandbox holds 2 files and 2 directories, one of which has a subdirectory
    // sandbox/file1.txt
    // sandbox/file2.txt
    // sandbox/dir2
    // sandbox/dir
    //    sandbox/dir/subdir
    fs::copy("sandbox", "sandbox/copy", fs::copy_options::recursive);
    // sandbox/copy holds copies of the above files and subdirectories
    fs::remove_all("sandbox");
}
```

## See also
- [copy](/cpp/experimental/fs/copy/)
- [copy_file](/cpp/experimental/fs/copy_file/)
