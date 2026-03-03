---
title: "putwchar"
source_path: "c/io/putwchar"
header: "<wchar.h>"
category: "c"
---

Writes a wide character ch to stdout.

## Declarations
```cpp
wint_t putwchar( wchar_t ch );
```
_(since C95)_

## Parameters
- `ch`: wide character to be written

## Return value
ch on success, WEOF on failure.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <stdlib.h>
#include <wchar.h>
 
int main()
{
    setlocale(LC_ALL, "en_US.utf8");
 
    const wchar_t data[] =
    {
        L'\u2200', // Unicode name: "FOR ALL"
        L'∀',
        L'\n',
    };
 
    for (size_t t = 0; t != (sizeof data / sizeof(wchar_t)); ++t)
    {
        if (putwchar(data[t]) == WEOF)
        {
            puts("I/O error in putwchar");
            return EXIT_FAILURE;
        }
    }
 
    return EXIT_SUCCESS;
}
```

## See also
- [putchar](/c/io/putchar/)
- [stdout](/c/io/std_streams/)
- [fputwcputwc](/c/io/fputwc/)
- [C++ documentation](/cpp/io/c/putwchar/)
