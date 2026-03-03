---
title: "ferror"
source_path: "c/io/ferror"
header: "<stdio.h>"
category: "c"
---

Checks the given stream for errors.

## Declarations
```cpp
int ferror( FILE *stream );
```

## Parameters
- `stream`: the file stream to check

## Return value
Nonzero value if the file stream has errors occurred, 0 otherwise

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <wchar.h>
 
int main(void)
{
    char* fname = tmpnam(NULL);
    FILE* f = fopen(fname, "wb");
    fputs("\xff\xff\n", f); // not a valid UTF-8 character sequence
    fclose(f);
 
    setlocale(LC_ALL, "en_US.utf8");
    f = fopen(fname, "rb");
    wint_t ch;
    while ((ch=fgetwc(f)) != WEOF) // attempt to read as UTF-8 fails
          printf("%#x ", ch);
 
    if (feof(f))
        puts("EOF indicator set");
    if (ferror(f))
        puts("Error indicator set");
}
```

## See also
- [clearerr](/c/io/clearerr/)
- [feof](/c/io/feof/)
- [C++ documentation](/cpp/io/c/ferror/)
