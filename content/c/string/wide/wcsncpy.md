---
title: "wcsncpy, wcsncpy_s"
source_path: "c/string/wide/wcsncpy"
header: "<wchar.h>"
category: "c"
---

1) Copies at most count characters of the wide string pointed to by src (including the terminating null wide character) to wide character array pointed to by dest.

## Declarations
```cpp
wchar_t* wcsncpy( wchar_t* dest, const wchar_t* src, size_t count );
```
_(since C95) (until C99)_

```cpp
wchar_t *wcsncpy( wchar_t *restrict dest, const wchar_t *restrict src, size_t count );
```
_(since C99)_

```cpp
errno_t wcsncpy_s( wchar_t *restrict dest, rsize_t destsz,
const wchar_t *restrict src, rsize_t count);
```
_(since C11)_

## Parameters
- `dest`: pointer to the wide character array to copy to
- `src`: pointer to the wide string to copy from
- `count`: maximum number of wide characters to copy
- `destsz`: the size of the destination buffer

## Notes
In typical usage, count is the number of elements in the destination array.

Although truncation to fit the destination buffer is a security risk and therefore a runtime constraints violation for wcsncpy_s, it is possible to get the truncating behavior by specifying count equal to the size of the destination array minus one: it will copy the first count wide characters and append the null wide terminator as always: wcsncpy_s(dst, sizeof dst / sizeof *dst, src, (sizeof dst / sizeof *dst)-1);

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
#include <locale.h>
 
int main(void)
{
    const wchar_t src[] = L"わゐ";
    wchar_t dest[6] = {L'あ', L'い', L'う', L'え', L'お'};
 
    wcsncpy(dest, src, 4); // this will copy わゐ and repeat L'\0' two times
 
    puts("The contents of dest are: ");
    setlocale(LC_ALL, "en_US.utf8");
 
    const long dest_size = sizeof dest / sizeof *dest;
    for(wchar_t* p = dest; p-dest != dest_size; ++p) {
        *p ? printf("%lc ", *p)
           : printf("\\0 ");
    }
}
```

## See also
- [wcscpywcscpy_s](/c/string/wide/wcscpy/)
- [wmemcpywmemcpy_s](/c/string/wide/wmemcpy/)
- [strncpystrncpy_s](/c/string/byte/strncpy/)
- [C++ documentation](/cpp/string/wide/wcsncpy/)
