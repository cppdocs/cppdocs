---
title: "mbrlen"
source_path: "c/string/multibyte/mbrlen"
header: "<wchar.h>"
category: "c"
---

Determines the size, in bytes, of the representation of a multibyte character.

## Declarations
```cpp
size_t mbrlen( const char* s, size_t n, mbstate_t* ps );
```
_(since C95) (until C99)_

```cpp
size_t mbrlen( const char* restrict s, size_t n, mbstate_t* restrict ps );
```
_(since C99)_

## Parameters
- `s`: pointer to an element of a multibyte character string
- `n`: limit on the number of bytes in s that can be examined
- `ps`: pointer to the variable holding the conversion state

## Return value
The first of the following that applies:

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <string.h>
#include <wchar.h>
 
int main(void)
{
    // allow mbrlen() to work with UTF-8 multibyte encoding
    setlocale(LC_ALL, "en_US.utf8");
 
    // UTF-8 narrow multibyte encoding
    const char* str = "水";
    size_t sz = strlen(str);
 
    mbstate_t mb;
    memset(&mb, 0, sizeof mb);
    int len1 = mbrlen(str, 1, &mb);
    if (len1 == -2)
        printf("The first 1 byte of %s is an incomplete multibyte char"
               " (mbrlen returns -2)\n", str);
 
    int len2 = mbrlen(str + 1, sz - 1, &mb);
    printf("The remaining %zu  bytes of %s hold %d bytes of the multibyte"
           " character\n", sz - 1, str, len2);
 
    printf("Attempting to call mbrlen() in the middle of %s while in initial"
           " shift state returns %zd\n", str, mbrlen(str + 1, sz - 1, &mb));
}
```

## See also
- [mbrtowc](/c/string/multibyte/mbrtowc/)
- [mblen](/c/string/multibyte/mblen/)
- [C++ documentation](/cpp/string/multibyte/mbrlen/)
