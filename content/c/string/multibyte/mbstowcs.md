---
title: "mbstowcs, mbstowcs_s"
source_path: "c/string/multibyte/mbstowcs"
header: "<stdlib.h>"
category: "c"
---

1) Converts a multibyte character string from the array whose first element is pointed to by src to its wide character representation. Converted characters are stored in the successive elements of the array pointed to by dst. No more than len wide characters are written to the destination array.

## Declarations
```cpp
size_t mbstowcs( wchar_t *dst, const char *src, size_t len)
```
_(until C99)_

```cpp
size_t mbstowcs( wchar_t *restrict dst, const char *restrict src, size_t len)
```
_(since C99)_

```cpp
errno_t mbstowcs_s(size_t *restrict retval, wchar_t *restrict dst,
rsize_t dstsz, const char *restrict src, rsize_t len);
```
_(since C11)_

## Parameters
- `dst`: pointer to wide character array where the wide string will be stored
- `src`: pointer to the first element of a null-terminated multibyte string to convert
- `len`: number of wide characters available in the array pointed to by dst
- `dstsz`: max number of wide characters that will be written (size of the dst array)
- `retval`: pointer to a size_t object where the result will be stored

## Notes
In most implementations, mbstowcs updates a global static object of type [mbstate_t](/c/string/multibyte/mbstate_t/) as it processes through the string, and cannot be called simultaneously by two threads, [mbsrtowcs](/c/string/multibyte/mbsrtowcs/) should be used in such cases.

POSIX specifies a common extension: if dst is a null pointer, this function returns the number of wide characters that would be written to dst, if converted. Similar behavior is standard for mbstowcs_s and for [mbsrtowcs](/c/string/multibyte/mbsrtowcs/).

## Example
```cpp
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
#include <wchar.h>
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    const char* mbstr = u8"z\u00df\u6c34\U0001F34C"; // or u8"zß水🍌"
    wchar_t wstr[5];
    mbstowcs(wstr, mbstr, 5);
    wprintf(L"MB string: %s\n", mbstr);
    wprintf(L"Wide string: %ls\n", wstr);
}
```

## See also
- [mbsrtowcsmbsrtowcs_s](/c/string/multibyte/mbsrtowcs/)
- [wcstombswcstombs_s](/c/string/multibyte/wcstombs/)
- [C++ documentation](/cpp/string/multibyte/mbstowcs/)
