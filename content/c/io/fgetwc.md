---
title: "fgetwc, getwc"
source_path: "c/io/fgetwc"
header: "<wchar.h>"
category: "c"
---

Reads the next wide character from the given input stream. getwc() may be implemented as a macro and may evaluate stream more than once.

## Declarations
```cpp
wint_t fgetwc( FILE *stream );
```
_(since C95)_

```cpp
wint_t getwc( FILE *stream );
```
_(since C95)_

## Parameters
- `stream`: to read the wide character from

## Return value
The next wide character from the stream or WEOF on failure.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
#include <wchar.h>
#include <errno.h>
#include <locale.h>
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    FILE *fp = fopen("fgetwc.dat", "w");
    if(!fp) {
        perror("Can't open file for writing");
        return EXIT_FAILURE;
    }
    fputs("кошка\n", fp);
    fclose(fp);
 
    fp = fopen("fgetwc.dat", "r");
    if(!fp) {
        perror("Can't open file for reading");
        return EXIT_FAILURE;
    }
    wint_t wc;
    errno = 0;
    while ((wc = fgetwc(fp)) != WEOF)
        putwchar(wc);
 
    if (ferror(fp)) {
        if (errno == EILSEQ)
            puts("Character encoding error while reading.");
        else
            puts("I/O error when reading");
    } else if (feof(fp))
        puts("End of file reached successfully");
 
    fclose(fp);
}
```

## See also
- [fgetcgetc](/c/io/fgetc/)
- [fgetws](/c/io/fgetws/)
- [fputwcputwc](/c/io/fputwc/)
- [ungetwc](/c/io/ungetwc/)
- [C++ documentation](/cpp/io/c/fgetwc/)
