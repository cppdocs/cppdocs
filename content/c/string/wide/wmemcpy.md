---
title: "wmemcpy, wmemcpy_s"
source_path: "c/string/wide/wmemcpy"
header: "<wchar.h>"
category: "c"
---

1) Copies exactly count successive wide characters from the wide character array pointed to by src to the wide character array pointed to by dest. If the objects overlap, the behavior is undefined. If count is zero, the function does nothing.

## Declarations
```cpp
wchar_t* wmemcpy( wchar_t* dest, const wchar_t* src, size_t count );
```
_(since C95) (until C99)_

```cpp
wchar_t *wmemcpy(wchar_t *restrict dest, const wchar_t *restrict src,
size_t count );
```
_(since C99)_

```cpp
errno_t wmemcpy_s( wchar_t *restrict dest, rsize_t destsz,
const wchar_t *restrict src, rsize_t count );
```
_(since C11)_

## Parameters
- `dest`: pointer to the wide character array to copy to
- `src`: pointer to the wide character array to copy from
- `count`: number of wide characters to copy
- `destsz`: max number of wide characters to write (the size of the destination buffer)

## Notes
This function's analog for byte strings is [strncpy](/c/string/byte/strncpy/), not [strcpy](/c/string/byte/strcpy/).

This function is not locale-sensitive and pays no attention to the values of the wchar_t objects it copies: nulls as well as invalid characters are copied too.

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
#include <locale.h>
 
int main(void)
{
    wchar_t from1[] = L"नमस्ते";
    size_t sz1 = sizeof from1 / sizeof *from1;
    wchar_t from2[] = L"Բարև";
    size_t sz2 = sizeof from2 / sizeof *from2;
    wchar_t to[sz1 + sz2];
    wmemcpy(to, from1, sz1); // copy from1, along with its null terminator
    wmemcpy(to + sz1, from2, sz2); // append from2, along with its null terminator
 
    setlocale(LC_ALL, "en_US.utf8");
    printf("Wide array contains: ");
    for(size_t n = 0; n < sizeof to / sizeof *to; ++n)
        if(to[n])
            printf("%lc", to[n]);
        else
            printf("\\0");
    printf("\n");
}
```

## See also
- [wmemmovewmemmove_s](/c/string/wide/wmemmove/)
- [strncpystrncpy_s](/c/string/byte/strncpy/)
- [C++ documentation](/cpp/string/wide/wmemcpy/)
