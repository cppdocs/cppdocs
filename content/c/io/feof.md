---
title: "feof"
source_path: "c/io/feof"
header: "<stdio.h>"
category: "c"
---

Checks if the end of the given file stream has been reached.

## Declarations
```cpp
int feof( FILE *stream );
```

## Parameters
- `stream`: the file stream to check

## Return value
nonzero value if the end of the stream has been reached, otherwise 0

## Notes
This function only reports the stream state as reported by the most recent I/O operation, it does not examine the associated data source. For example, if the most recent I/O was a [fgetc](/c/io/fgetc/), which returned the last byte of a file, feof returns zero. The next [fgetc](/c/io/fgetc/) fails and changes the stream state to end-of-file. Only then feof returns non-zero.

In typical usage, input stream processing stops on any error; feof and [ferror](/c/io/ferror/) are then used to distinguish between different error conditions.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    const char* fname = "/tmp/unique_name.txt"; // or tmpnam(NULL);
    int is_ok = EXIT_FAILURE;
 
    FILE* fp = fopen(fname, "w+");
    if (!fp)
    {
        perror("File opening failed");
        return is_ok;
    }
    fputs("Hello, world!\n", fp);
    rewind(fp);
 
    int c; // note: int, not char, required to handle EOF
    while ((c = fgetc(fp)) != EOF) // standard C I/O file reading loop
        putchar(c);
 
    if (ferror(fp))
        puts("I/O error when reading");
    else if (feof(fp))
    {
        puts("End of file is reached successfully");
        is_ok = EXIT_SUCCESS;
    }
 
    fclose(fp);
    remove(fname);
    return is_ok;
}
```

## See also
- [clearerr](/c/io/clearerr/)
- [perror](/c/io/perror/)
- [stderr](/c/io/std_streams/)
- [ferror](/c/io/ferror/)
- [C++ documentation](/cpp/io/c/feof/)
