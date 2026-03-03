---
title: "fgetc, getc"
source_path: "c/io/fgetc"
header: "<stdio.h>"
category: "c"
---

1) Reads the next character from the given input stream.

## Declarations
```cpp
int fgetc( FILE* stream );
```

```cpp
int getc( FILE* stream );
```

## Parameters
- `stream`: to read the character from

## Return value
On success, returns the obtained character as an unsigned char converted to an int.
On failure, returns [EOF](/c/io/).

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
- [getchar](/c/io/getchar/)
- [stdin](/c/io/std_streams/)
- [getsgets_s](/c/io/gets/)
- [stdin](/c/io/std_streams/)
- [fputcputc](/c/io/putc/)
- [ungetc](/c/io/ungetc/)
- [C++ documentation](/cpp/io/c/fgetc/)
