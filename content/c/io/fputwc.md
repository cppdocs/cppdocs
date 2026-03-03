---
title: "fputwc, putwc"
source_path: "c/io/fputwc"
header: "<wchar.h>"
category: "c"
---

Writes a wide character ch to the given output stream stream.

## Declarations
```cpp
wint_t fputwc( wchar_t ch, FILE* stream );
```
_(since C95)_

```cpp
wint_t putwc( wchar_t ch, FILE* stream );
```
_(since C95)_

## Parameters
- `ch`: wide character to be written
- `stream`: the output stream

## Return value
Returns a copy of ch on success.

## Example
```cpp
#include <errno.h>
#include <locale.h>
#include <stdio.h>
#include <stdlib.h>
#include <wchar.h>
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
 
    errno = 0;
    if (fputwc(L'🍌', stdout) == WEOF)
    {
        if (errno == EILSEQ)
            puts("Encoding error in fputwc.");
        else
            puts("I/O error in fputwc.");
        return EXIT_FAILURE;
    }
}
```

## See also
- [fputcputc](/c/io/putc/)
- [fputws](/c/io/fputws/)
- [fgetwcgetwc](/c/io/fgetwc/)
- [C++ documentation](/cpp/io/c/fputwc/)
