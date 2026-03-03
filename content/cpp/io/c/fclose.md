---
title: "std::fclose"
source_path: "cpp/io/c/fclose"
header: "<cstdio>"
category: "io"
---

Closes the given file stream. Any unwritten buffered data are flushed to the OS. Any unread buffered data are discarded.

## Declarations
```cpp
int fclose( std::FILE* stream );
```

## Parameters
- `stream`: the file stream to close

## Return value
0 on success, [EOF](/cpp/io/c/) otherwise.

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
- [fopen](/cpp/io/c/fopen/)
- [freopen](/cpp/io/c/freopen/)
- [close](/cpp/io/basic_filebuf/close/)
- [C documentation](/c/io/fclose/)
