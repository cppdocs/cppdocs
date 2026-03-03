---
title: "fclose"
source_path: "c/io/fclose"
header: "<stdio.h>"
category: "c"
---

Closes the given file stream. Any unwritten buffered data are flushed to the OS. Any unread buffered data are discarded.

## Declarations
```cpp
int fclose( FILE* stream );
```

## Parameters
- `stream`: the file stream to close

## Return value
0 on success, [EOF](/c/io/) otherwise

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
- [fopenfopen_s](/c/io/fopen/)
- [freopenfreopen_s](/c/io/freopen/)
- [C++ documentation](/cpp/io/c/fclose/)
