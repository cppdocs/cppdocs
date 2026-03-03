---
title: "wcscat, wcscat_s"
source_path: "c/string/wide/wcscat"
header: "<wchar.h>"
category: "c"
---

1) Appends a copy of the wide string pointed to by src to the end of the wide string pointed to by dest. The wide character src[0] replaces the null terminator at the end of dest. The resulting wide string is null-terminated. The behavior is undefined if the destination array is not large enough for the contents of both str and dest and the terminating null wide character. The behavior is undefined if the strings overlap.

## Declarations
```cpp
wchar_t *wcscat( wchar_t *dest, const wchar_t *src );
```
_(since C95) (until C99)_

```cpp
wchar_t *wcscat( wchar_t *restrict dest, const wchar_t *restrict src );
```
_(since C99)_

```cpp
errno_t wcscat_s( wchar_t *restrict dest, rsize_t destsz,
const wchar_t *restrict src );
```
_(since C11)_

## Parameters
- `dest`: pointer to the null-terminated wide string to append to
- `src`: pointer to the null-terminated wide string to copy from
- `destsz`: maximum number of characters to write, typically the size of the destination buffer

## Example
```cpp
#include <wchar.h> 
#include <stdio.h>
#include <locale.h>
 
int main(void) 
{
    wchar_t str[50] = L"Земля, прощай.";
    wcscat(str, L" ");
    wcscat(str, L"В добрый путь.");
    setlocale(LC_ALL, "en_US.utf8");
    printf("%ls", str);
}
```

## See also
- [wcsncatwcsncat_s](/c/string/wide/wcsncat/)
- [strcatstrcat_s](/c/string/byte/strcat/)
- [wcscpywcscpy_s](/c/string/wide/wcscpy/)
- [C++ documentation](/cpp/string/wide/wcscat/)
