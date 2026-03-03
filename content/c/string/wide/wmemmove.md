---
title: "wmemmove, wmemmove_s"
source_path: "c/string/wide/wmemmove"
header: "<wchar.h>"
category: "c"
---

1) Copies exactly count successive wide characters from the wide character array pointed to by src to the wide character array pointed to by dest. If count is zero, the function does nothing. The arrays may overlap: copying takes place as if the wide characters were copied to a temporary wide character array and then copied from the temporary array to dest.

## Declarations
```cpp
wchar_t* wmemmove( wchar_t* dest, const wchar_t* src, size_t count );
```
_(since C95)_

```cpp
errno_t wmemmove_s( wchar_t *dest, rsize_t destsz,
const wchar_t *src, rsize_t count);
```
_(since C11)_

## Parameters
- `dest`: pointer to the wide character array to copy to
- `src`: pointer to the wide character array to copy from
- `destsz`: max number of wide characters to write (the size of the destination buffer)
- `count`: number of wide characters to copy

## Notes
This function is not locale-sensitive and pays no attention to the values of the wchar_t objects it copies: nulls as well as invalid characters are copied too.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
 
    wchar_t str[] = L"αβγδεζηθικλμνξοπρστυφχψω";
    printf("%ls\n", str);
    wmemmove(str + 4, str + 3, 3); // copy from [δεζ] to [εζη]
    printf("%ls\n", str);
}
```

## See also
- [memmovememmove_s](/c/string/byte/memmove/)
- [wmemcpywmemcpy_s](/c/string/wide/wmemcpy/)
- [C++ documentation](/cpp/string/wide/wmemmove/)
