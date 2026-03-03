---
title: "std::fgetc, std::getc"
source_path: "cpp/io/c/fgetc"
header: "<cstdio>"
category: "io"
---

Reads the next character from the given input stream.

## Declarations
```cpp
int fgetc( std::FILE* stream );
int getc( std::FILE* stream );
```

## Parameters
- `stream`: to read the character from

## Return value
The obtained character on success or [EOF](/cpp/io/c/) on failure.

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
- [gets](/cpp/io/c/gets/)
- [stdin](/cpp/io/c/std_streams/)
- [fputcputc](/cpp/io/c/fputc/)
- [ungetc](/cpp/io/c/ungetc/)
- [C documentation](/c/io/fgetc/)
