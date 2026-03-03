---
title: "wcsrtombs, wcsrtombs_s"
source_path: "c/string/multibyte/wcsrtombs"
header: "<wchar.h>"
category: "c"
---

1) Converts a sequence of wide characters from the array whose first element is pointed to by *src to its narrow multibyte representation that begins in the conversion state described by *ps. If dst is not null, converted characters are stored in the successive elements of the char array pointed to by dst. No more than len bytes are written to the destination array. Each character is converted as if by a call to [wcrtomb](/c/string/multibyte/wcrtomb/). The conversion stops if:
The null character L'\0' was converted and stored. The bytes stored in this case are the unshift sequence (if necessary) followed by '\0', *src is set to null pointer value and *ps represents the initial shift state.A wchar_t was found that does not correspond to a valid character in the current C locale. *src is set to point at the first unconverted wide character.the next multibyte character to be stored would exceed len. *src is set to point at the first unconverted wide character. This condition is not checked if dst is a null pointer.

## Declarations
```cpp
size_t wcsrtombs( char *dst, const wchar_t **src, size_t len, mbstate_t* ps );
```
_(since C95) (until C99)_

```cpp
size_t wcsrtombs( char *restrict dst, const wchar_t **restrict src, size_t len,
mbstate_t *restrict ps );
```
_(since C99)_

```cpp
errno_t wcsrtombs_s( size_t *restrict retval, char *restrict dst, rsize_t dstsz,
const wchar_t **restrict src, rsize_t len,
mbstate_t *restrict ps );
```
_(since C11)_

## Parameters
- `dst`: pointer to narrow character array where the multibyte characters will be stored
- `src`: pointer to pointer to the first element of a null-terminated wide string
- `len`: number of bytes available in the array pointed to by dst
- `ps`: pointer to the conversion state object
- `dstsz`: max number of bytes that will be written (size of the dst array)
- `retval`: pointer to a size_t object where the result will be stored

## Example
```cpp
#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <wchar.h>
 
void print_wide(const wchar_t* wstr)
{
    mbstate_t state;
    memset(&state, 0, sizeof state);
    size_t len = 1 + wcsrtombs(NULL, &wstr, 0, &state);
    char mbstr[len];
    wcsrtombs(mbstr, &wstr, len, &state);
    printf("Multibyte string: %s\n", mbstr);
    printf("Length, including '\\0': %zu\n", len);
}
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    print_wide(L"z\u00df\u6c34\U0001f34c"); // or L"zß水🍌"
}
```

## See also
- [wcstombswcstombs_s](/c/string/multibyte/wcstombs/)
- [wcrtombwcrtomb_s](/c/string/multibyte/wcrtomb/)
- [mbsrtowcsmbsrtowcs_s](/c/string/multibyte/mbsrtowcs/)
- [C++ documentation](/cpp/string/multibyte/wcsrtombs/)
