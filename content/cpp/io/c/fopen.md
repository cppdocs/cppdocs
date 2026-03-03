---
title: "std::fopen"
source_path: "cpp/io/c/fopen"
header: "<cstdio>"
category: "io"
---

Opens a file indicated by filename and returns a file stream associated with that file. mode is used to determine the file access mode.

## Declarations
```cpp
std::FILE* fopen( const char* filename, const char* mode );
```

## Parameters
- `filename`: file name to associate the file stream to
- `mode`: null-terminated character string determining file access mode

## Return value
If successful, returns a pointer to the object that controls the opened file stream, with both eof and error bits cleared. The stream is fully buffered unless filename refers to an interactive device.

## Notes
The format of filename is implementation-defined, and does not necessarily refer to a file (e.g. it may be the console or another device accessible through filesystem API). On platforms that support them, filename may include absolute or relative filesystem path.

For portable directory and file naming, see [C++ filesystem library](/cpp/filesystem/) or [boost.filesystem](https://www.boost.org/doc/libs/release/libs/filesystem/doc/index.htm).

## Example
```cpp
#include <cstdio>
#include <cstdlib>
 
int main()
{
    int is_ok = EXIT_FAILURE;
    FILE* fp = std::fopen("/tmp/test.txt", "w+");
    if (!fp)
    {
        std::perror("File opening failed");
        return is_ok;
    }
 
    int c; // Note: int, not char, required to handle EOF
    while ((c = std::fgetc(fp)) != EOF) // Standard C I/O file reading loop
        std::putchar(c);
 
    if (std::ferror(fp))
        std::puts("I/O error when reading");
    else if (std::feof(fp))
    {
        std::puts("End of file reached successfully");
        is_ok = EXIT_SUCCESS;
    }
 
    std::fclose(fp);
    return is_ok;
}
```

## See also
- [fclose](/cpp/io/c/fclose/)
- [fflush](/cpp/io/c/fflush/)
- [freopen](/cpp/io/c/freopen/)
- [C documentation](/c/io/fopen/)
