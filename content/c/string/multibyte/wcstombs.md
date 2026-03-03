---
title: "wcstombs, wcstombs_s"
source_path: "c/string/multibyte/wcstombs"
header: "<stdlib.h>"
category: "c"
---

1) Converts a sequence of wide characters from the array whose first element is pointed to by src to its narrow multibyte representation that begins in the initial shift state. Converted characters are stored in the successive elements of the char array pointed to by dst. No more than len bytes are written to the destination array.

## Declarations
```cpp
size_t wcstombs( char *dst, const wchar_t *src, size_t len );
```
_(until C99)_

```cpp
size_t wcstombs( char *restrict dst, const wchar_t *restrict src, size_t len );
```
_(since C99)_

```cpp
errno_t wcstombs_s( size_t *restrict retval, char *restrict dst, rsize_t dstsz,
const wchar_t *restrict src, rsize_t len );
```
_(since C11)_

## Parameters
- `dst`: pointer to narrow character array where the multibyte character will be stored
- `src`: pointer to the first element of a null-terminated wide string to convert
- `len`: number of bytes available in the array pointed to by dst
- `dstsz`: max number of bytes that will be written (size of the dst array)
- `retval`: pointer to a size_t object where the result will be stored

## Notes
In most implementations, wcstombs updates a global static object of type [mbstate_t](/c/string/multibyte/mbstate_t/) as it processes through the string, and cannot be called simultaneously by two threads, [wcsrtombs](/c/string/multibyte/wcsrtombs/) or wcstombs_s should be used in such cases.

POSIX specifies a common extension: if dst is a null pointer, this function returns the number of bytes that would be written to dst, if converted. Similar behavior is standard for [wcsrtombs](/c/string/multibyte/wcsrtombs/) and wcstombs_s.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
 
int main(void)
{
    // 4 wide characters
    const wchar_t src[] = L"z\u00df\u6c34\U0001f34c";
    // they occupy 10 bytes in UTF-8
    char dst[11];
 
    setlocale(LC_ALL, "en_US.utf8");
    printf("wide-character string: '%ls'\n",src);
    for (size_t ndx=0; ndx < sizeof src/sizeof src[0]; ++ndx)
        printf("   src[%2zu] = %#8x\n", ndx, src[ndx]);
 
    int rtn_val = wcstombs(dst, src, sizeof dst);
    printf("rtn_val = %d\n", rtn_val);
    if (rtn_val > 0)
        printf("multibyte string:  '%s'\n",dst);
    for (size_t ndx=0; ndx<sizeof dst; ++ndx)
        printf("   dst[%2zu] = %#2x\n", ndx, (unsigned char)dst[ndx]);
}
```

## See also
- [wcsrtombswcsrtombs_s](/c/string/multibyte/wcsrtombs/)
- [mbstowcsmbstowcs_s](/c/string/multibyte/mbstowcs/)
- [C++ documentation](/cpp/string/multibyte/wcstombs/)
