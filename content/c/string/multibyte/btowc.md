---
title: "btowc"
source_path: "c/string/multibyte/btowc"
header: "<wchar.h>"
category: "c"
---

Widens a single-byte character c (reinterpreted as unsigned char) to its wide character equivalent.

## Declarations
```cpp
wint_t btowc( int c );
```
_(since C95)_

## Parameters
- `c`: single-byte character to widen

## Return value
WEOF if c is [EOF](/c/io/)

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
#include <locale.h>
#include <assert.h>
 
void try_widen(unsigned char c)
{
    wint_t w = btowc(c);
    if(w != WEOF)
        printf("The single-byte character %#x widens to %#x\n", c, w);
    else
        printf("The single-byte character %#x failed to widen\n", c);
}
 
int main(void)
{
    char *loc = setlocale(LC_ALL, "lt_LT.iso88594");
    assert(loc);
    printf("In Lithuanian ISO-8859-4 locale:\n");
    try_widen('A');
    try_widen('\xdf'); // German letter ß (U+00df) in ISO-8859-4
    try_widen('\xf9'); // Lithuanian letter ų (U+0173) in ISO-8859-4
 
    setlocale(LC_ALL, "lt_LT.utf8");
    printf("In Lithuanian UTF-8 locale:\n");
    try_widen('A');
    try_widen('\xdf');
    try_widen('\xf9');
}
```

## See also
- [wctob](/c/string/multibyte/wctob/)
- [C++ documentation](/cpp/string/multibyte/btowc/)
