---
title: "std::experimental::filesystem::copy"
source_path: "cpp/experimental/fs/copy"
header: "<experimental/filesystem>"
category: "experimental"
---

Copies files and directories, with a variety of options:

## Declarations
```cpp
void copy( const path& from, const path& to );
void copy( const path& from, const path& to, error_code& ec );
```
_(filesystem TS)_

```cpp
void copy( const path& from, const path& to, copy_options options );
void copy( const path& from, const path& to, copy_options options, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `from`: path to the source file, directory, or symlink
- `to`: path to the target file, directory, or symlink
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
(none)

## Notes
The default behavior when copying directories is the non-recursive copy: the files are copied, but not the subdirectories:

While with copy_options::recursive, the subdirectories are also copied, with their content, recursively.

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
- [copy_options](/cpp/experimental/fs/copy_options/)
- [copy_symlink](/cpp/experimental/fs/copy_symlink/)
- [copy_file](/cpp/experimental/fs/copy_file/)
