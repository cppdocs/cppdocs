---
title: "mbsrtowcs, mbsrtowcs_s"
source_path: "c/string/multibyte/mbsrtowcs"
header: "<wchar.h>"
category: "c"
---

1) Converts a null-terminated multibyte character sequence, which begins in the conversion state described by *ps, from the array whose first element is pointed to by *src to its wide character representation. If dst is not null, converted characters are stored in the successive elements of the wchar_t array pointed to by dst. No more than len wide characters are written to the destination array. Each multibyte character is converted as if by a call to [mbrtowc](/c/string/multibyte/mbrtowc/). The conversion stops if:
The multibyte null character was converted and stored. *src is set to null pointer value and *ps represents the initial shift state.An invalid multibyte character (according to the current C locale) was encountered. *src is set to point at the beginning of the first unconverted multibyte character.the next wide character to be stored would exceed len. *src is set to point at the beginning of the first unconverted multibyte character. This condition is not checked if dst is a null pointer.

## Declarations
```cpp
size_t mbsrtowcs( wchar_t* dst, const char** src, size_t len, mbstate_t* ps );
```
_(since C95) (until C99)_

```cpp
size_t mbsrtowcs( wchar_t *restrict dst, const char **restrict src, size_t len,
mbstate_t *restrict ps );
```
_(since C99)_

```cpp
errno_t mbsrtowcs_s( size_t *restrict retval,
wchar_t *restrict dst, rsize_t dstsz,
const char **restrict src, rsize_t len,
mbstate_t *restrict ps );
```
_(since C11)_

## Parameters
- `dst`: pointer to wide character array where the results will be stored
- `src`: pointer to pointer to the first element of a null-terminated multibyte string
- `len`: number of wide characters available in the array pointed to by dst
- `ps`: pointer to the conversion state object
- `dstsz`: max number of wide characters that will be written (size of the dst array)
- `retval`: pointer to a size_t object where the result will be stored

## Example
```cpp
#include <stdio.h>
#include <locale.h>
#include <wchar.h>
#include <string.h>
 
void print_as_wide(const char* mbstr)
{
    mbstate_t state;
    memset(&state, 0, sizeof state);
    size_t len = 1 + mbsrtowcs(NULL, &mbstr, 0, &state);
    wchar_t wstr[len];
    mbsrtowcs(&wstr[0], &mbstr, len, &state);
    wprintf(L"Wide string: %ls \n", wstr);
    wprintf(L"The length, including L'\\0': %zu\n", len);
}
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    print_as_wide(u8"z\u00df\u6c34\U0001f34c"); // u8"zß水🍌"
}
```

## See also
- [mbstowcsmbstowcs_s](/c/string/multibyte/mbstowcs/)
- [mbrtowc](/c/string/multibyte/mbrtowc/)
- [wcsrtombswcsrtombs_s](/c/string/multibyte/wcsrtombs/)
- [C++ documentation](/cpp/string/multibyte/mbsrtowcs/)
