---
title: "wcscpy, wcscpy_s"
source_path: "c/string/wide/wcscpy"
header: "<wchar.h>"
category: "c"
---

1) Copies the wide string pointed to by src (including the terminating null wide character) to wide character array pointed to by dest. The behavior is undefined if the dest array is not large enough. The behavior is undefined if the strings overlap.

## Declarations
```cpp
wchar_t* wcscpy( wchar_t* dest, const wchar_t* src );
```
_(since C95) (until C99)_

```cpp
wchar_t* wcscpy( wchar_t* restrict dest, const wchar_t* restrict src );
```
_(since C99)_

```cpp
errno_t wcscpy_s( wchar_t* restrict dest, rsize_t destsz,
const wchar_t* restrict src );
```
_(since C11)_

## Parameters
- `dest`: pointer to the wide character array to copy to
- `src`: pointer to the null-terminated wide string to copy from
- `destsz`: maximum number of characters to write, typically the size of the destination buffer

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
 
int main(void)
{
    wchar_t* src = L"犬 means dog";
//  src[0] = L'狗' ; // this would be undefined behavior
    wchar_t dst[wcslen(src) + 1]; // +1 for the null terminator
    wcscpy(dst, src);
    dst[0] = L'狗'; // OK
 
    setlocale(LC_ALL, "en_US.utf8");
    printf("src = %ls\ndst = %ls\n", src, dst);
}
```

## See also
- [wcsncpywcsncpy_s](/c/string/wide/wcsncpy/)
- [wmemcpywmemcpy_s](/c/string/wide/wmemcpy/)
- [strcpystrcpy_s](/c/string/byte/strcpy/)
- [C++ documentation](/cpp/string/wide/wcscpy/)
