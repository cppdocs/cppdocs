---
title: "fopen, fopen_s"
source_path: "c/io/fopen"
header: "<stdio.h>"
category: "c"
---

1) Opens a file indicated by filename and returns a pointer to the file stream associated with that file. mode is used to determine the file access mode.

## Declarations
```cpp
FILE *fopen( const char *filename, const char *mode );
```
_(until C99)_

```cpp
FILE *fopen( const char *restrict filename, const char *restrict mode );
```
_(since C99)_

```cpp
errno_t fopen_s( FILE *restrict *restrict streamptr,
const char *restrict filename,
const char *restrict mode );
```
_(since C11)_

## Parameters
- `filename`: file name to associate the file stream to
- `mode`: null-terminated character string determining file access mode
- `streamptr`: pointer to a pointer where the function stores the result (an out-parameter)

## Notes
The format of filename is implementation-defined, and does not necessarily refer to a file (e.g. it may be the console or another device accessible though filesystem API). On platforms that support them, filename may include absolute or relative filesystem path.

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
- [fclose](/c/io/fclose/)
- [fflush](/c/io/fflush/)
- [freopenfreopen_s](/c/io/freopen/)
- [C++ documentation](/cpp/io/c/fopen/)
