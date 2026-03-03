---
title: "wctomb, wctomb_s"
source_path: "c/string/multibyte/wctomb"
header: "<stdlib.h>"
category: "c"
---

1) Converts a wide character wc to multibyte encoding and stores it (including any shift sequences) in the char array whose first element is pointed to by s. No more than MB_CUR_MAX characters are stored. The conversion is affected by the current locale's LC_CTYPE category.

## Declarations
```cpp
int wctomb( char *s, wchar_t wc );
```

```cpp
errno_t wctomb_s( int *restrict status, char *restrict s, rsize_t ssz, wchar_t wc );
```
_(since C11)_

## Parameters
- `s`: pointer to the character array for output
- `wc`: wide character to convert
- `ssz`: maximum number of bytes to write to s (size of the array s)
- `status`: pointer to an out-parameter where the result (length of the multibyte sequence or the shift sequence status) will be stored

## Notes
Each call to wctomb updates the internal global conversion state (a static object of type [mbstate_t](/c/string/multibyte/mbstate_t/), known only to this function). If the multibyte encoding uses shift states, this function is not reentrant. In any case, multiple threads should not call wctomb without synchronization: [wcrtomb](/c/string/multibyte/wcrtomb/) or wctomb_s may be used instead.

Unlike most bounds-checked functions, wctomb_s does not null-terminate its output, because it is designed to be used in loops that process strings character-by-character.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
 
void demo(wchar_t wc)
{
    const char* dep = wctomb(NULL, wc) ? "Yes" : "No";
    printf("State-dependent encoding? %s.\n", dep);
 
    char mb[MB_CUR_MAX];
    int len = wctomb(mb, wc);
    printf("wide char '%lc' -> multibyte char [", wc);
    for (int idx = 0; idx < len; ++idx)
        printf("%s%#2x", idx ? " " : "", (unsigned char)mb[idx]);
    printf("]\n");
}
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    printf("MB_CUR_MAX = %zu\n", MB_CUR_MAX);
    demo(L'A');
    demo(L'\u00df');
    demo(L'\U0001d10b');
}
```

## See also
- [mbtowc](/c/string/multibyte/mbtowc/)
- [wcrtombwcrtomb_s](/c/string/multibyte/wcrtomb/)
- [C++ documentation](/cpp/string/multibyte/wctomb/)
