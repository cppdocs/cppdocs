---
title: "wcsncat, wcsncat_s"
source_path: "c/string/wide/wcsncat"
header: "<wchar.h>"
category: "c"
---

1) Appends at most count wide characters from the wide string pointed to by src, stopping if the null terminator is copied, to the end of the character string pointed to by dest. The wide character src[0] replaces the null terminator at the end of dest. The null terminator is always appended in the end (so the maximum number of wide characters the function may write is count+1).

## Declarations
```cpp
wchar_t *wcsncat( wchar_t *dest, const wchar_t *src, size_t count );
```
_(since C95) (until C99)_

```cpp
wchar_t *wcsncat( wchar_t *restrict dest,
const wchar_t *restrict src, size_t count );
```
_(since C99)_

```cpp
errno_t wcsncat_s( wchar_t *restrict dest, rsize_t destsz,
const wchar_t *restrict src, rsize_t count );
```
_(since C11)_

## Parameters
- `dest`: pointer to the null-terminated wide string to append to
- `src`: pointer to the null-terminated wide string to copy from
- `count`: maximum number of wide characters to copy
- `destsz`: the size of the destination buffer

## Notes
Although truncation to fit the destination buffer is a security risk and therefore a runtime constraints violation for wcsncat_s, it is possible to get the truncating behavior by specifying count equal to the size of the destination array minus one: it will copy the first count wide characters and append the null terminator as always: wcsncat_s(dst, sizeof dst/sizeof *dst, src, (sizeof dst/sizeof *dst)-wcsnlen_s(dst, sizeof dst/sizeof *dst)-1);

## Example
```cpp
#include <wchar.h> 
#include <stdio.h>
#include <locale.h>
 
int main(void) 
{
    wchar_t str[50] = L"Земля, прощай.";
    wcsncat(str, L" ", 1);
    wcsncat(str, L"В добрый путь.", 8); // only append the first 8 wide chars
    setlocale(LC_ALL, "en_US.utf8");
    printf("%ls", str);
}
```

## See also
- [wcscatwcscat_s](/c/string/wide/wcscat/)
- [strncatstrncat_s](/c/string/byte/strncat/)
- [wcscpywcscpy_s](/c/string/wide/wcscpy/)
- [C++ documentation](/cpp/string/wide/wcsncat/)
