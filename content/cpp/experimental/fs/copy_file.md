---
title: "std::experimental::filesystem::copy_file"
source_path: "cpp/experimental/fs/copy_file"
header: "<experimental/filesystem>"
category: "experimental"
---

1) The default, equivalent to (2) with copy_options::none used as options.

## Declarations
```cpp
bool copy_file( const path& from, const path& to );
bool copy_file( const path& from, const path& to, error_code& ec );
```
_(filesystem TS)_

```cpp
bool copy_file( const path& from, const path& to, copy_options options );
bool copy_file( const path& from, const path& to, copy_options options, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `from`: path to the source file
- `to`: path to the target file
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
true if the file was copied, false otherwise.

## Notes
The functions involve at most one direct or indirect call to [status(to)](/cpp/experimental/fs/status/) (used both to determine if the file exists, and, for copy_options::update_existing option, its last write time).

Error is reported when copy_file is used to copy a directory: use [copy](/cpp/experimental/fs/copy/) for that.

copy_file follows symlinks: use [copy_symlink](/cpp/experimental/fs/copy_symlink/) or [copy](/cpp/experimental/fs/copy/) with copy_options::copy_symlinks for that.

## Example
```cpp
#include <experimental/filesystem>
#include <fstream>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::create_directory("sandbox");
    std::ofstream("sandbox/file1.txt").put('a');
 
    fs::copy_file("sandbox/file1.txt", "sandbox/file2.txt");
 
    // now there are two files in sandbox:
    std::cout << "file1.txt holds : "
              << std::ifstream("sandbox/file1.txt").rdbuf() << '\n';
    std::cout << "file2.txt holds : "
              << std::ifstream("sandbox/file2.txt").rdbuf() << '\n';
 
    // fail to copy directory
    fs::create_directory("sandbox/abc");
    try
    {
        fs::copy_file("sandbox/abc", "sandbox/def");
    }
    catch (fs::filesystem_error& e)
    {
        std::cout << "Could not copy sandbox/abc: " << e.what() << '\n';
    }
    fs::remove_all("sandbox");
}
```

## See also
- [copy_options](/cpp/experimental/fs/copy_options/)
- [copy_symlink](/cpp/experimental/fs/copy_symlink/)
- [copy](/cpp/experimental/fs/copy/)
