---
title: "std::experimental::filesystem::temp_directory_path"
source_path: "cpp/experimental/fs/temp_directory_path"
header: "<experimental/filesystem>"
category: "experimental"
---

Returns the directory location suitable for temporary files.

## Declarations
```cpp
path temp_directory_path();
path temp_directory_path( error_code& ec );
```
_(filesystem TS)_

## Return value
A directory suitable for temporary files. The path is guaranteed to exist and to be a directory. The overload that takes error_code& argument returns an empty path on error.

## Notes
On POSIX systems, the path may be the one specified in the environment variables TMPDIR, TMP, TEMP, TEMPDIR, and, if none of them are specified, the path "/tmp" is returned.

On Windows systems, the path is typically the one returned by GetTempPath.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    std::cout << "Temp directory is " << fs::temp_directory_path() << '\n';
}
```

## See also
- [tmpfile](/cpp/io/c/tmpfile/)
