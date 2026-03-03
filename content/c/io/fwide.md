---
title: "fwide"
source_path: "c/io/fwide"
header: "<wchar.h>"
category: "c"
---

If mode > 0, attempts to make stream wide-oriented. If mode < 0, attempts to make stream byte-oriented. If mode == 0, only queries the current orientation of the stream.

## Declarations
```cpp
int fwide( FILE* stream, int mode );
```
_(since C95)_

## Parameters
- `stream`: pointer to the C I/O stream to modify or query
- `mode`: integer value greater than zero to set the stream wide, less than zero to set the stream narrow, or zero to query only

## Return value
An integer greater than zero if the stream is wide-oriented after this call, less than zero if the stream is byte-oriented after this call, and zero if the stream has no orientation.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
#include <wchar.h>
 
void show_orientation(int n)
{
    n < 0 ? puts("\tnarrow orientation"):
    n > 0 ? puts("\twide orientation"):
            puts("\tno orientation");
}
 
void try_read(FILE* fp)
{
    int c = fgetc(fp);
    c == EOF
        ? printf("\tnarrow character read failed\n")
        : printf("\tnarrow character read '%c'\n", c);
 
    wint_t wc = fgetwc(fp);
    wc == WEOF
        ? printf("\twide character read failed\n")
        : printf("\twide character read '%lc'\n", wc);
}
 
int main(void)
{
    enum fwide_orientation { narrow = -1, query, wide };
 
    FILE* fp = fopen("main.cpp", "r");
    if (!fp)
    {
        perror("fopen() failed");
        return EXIT_FAILURE;
    }
 
    puts("1) A newly opened stream has no orientation.");
    show_orientation(fwide(fp, query));
 
    puts("2) Establish byte orientation.");
    show_orientation(fwide(fp, narrow));
    try_read(fp);
 
    puts("3) Only freopen() can reset stream orientation.");
    if (freopen("main.cpp", "r", fp) == NULL)
    {
       perror("freopen() failed");
       return EXIT_FAILURE;
    }
 
    puts("4) A reopened stream has no orientation.");
    show_orientation(fwide(fp, query));
 
    puts("5) Establish wide orientation.");
    show_orientation(fwide(fp, wide));
    try_read(fp);
 
    fclose(fp);
}
```

## See also
- [fopenfopen_s](/c/io/fopen/)
- [C++ documentation](/cpp/io/c/fwide/)
