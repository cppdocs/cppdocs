---
title: "std::filesystem::temp_directory_path"
source_path: "cpp/filesystem/temp_directory_path"
header: "<filesystem>"
category: "filesystem"
since: "C++17"
---

Returns the directory location suitable for temporary files.

## Declarations
```cpp
path temp_directory_path();
```
_(since C++17)_

```cpp
path temp_directory_path( std::error_code& ec );
```
_(since C++17)_

## Return value
A directory suitable for temporary files. The path is guaranteed to exist and to be a directory. The overload that takes error_code& argument returns an empty path on error.

## Notes
On POSIX systems, the path may be the one specified in the environment variables TMPDIR, TMP, TEMP, TEMPDIR, and, if none of them are specified, the path "/tmp" is returned.

On Windows systems, the path is typically the one returned by [GetTempPath](https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-gettemppathw).

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::filesystem;
 
int main()
{
    std::cout << "Temp directory is " << fs::temp_directory_path() << '\n';
}
```

## See also
- [tmpfile](/cpp/io/c/tmpfile/)
- [current_path](/cpp/filesystem/current_path/)
