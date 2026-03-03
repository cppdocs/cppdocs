---
title: "wcrtomb, wcrtomb_s"
source_path: "c/string/multibyte/wcrtomb"
header: "<wchar.h>"
category: "c"
---

Converts a wide character to its narrow multibyte representation.

## Declarations
```cpp
size_t wcrtomb( char *s, wchar_t wc, mbstate_t *ps);
```
_(since C95)_

```cpp
size_t wcrtomb( char *restrict s, wchar_t wc, mbstate_t *restrict ps);
```
_(since C99)_

```cpp
errno_t wcrtomb_s(size_t *restrict retval, char *restrict s, rsize_t ssz,
wchar_t wc, mbstate_t *restrict ps);
```
_(since C11)_

## Parameters
- `s`: pointer to narrow character array where the multibyte character will be stored
- `wc`: the wide character to convert
- `ps`: pointer to the conversion state object used when interpreting the multibyte string
- `ssz`: max number of bytes to write (the size of the buffer s)
- `retval`: pointer to an out-parameter where the result (number of bytes in the multibyte string including any shift sequences) will be stored

## Example
```cpp
#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <wchar.h>
#include <stdlib.h>
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    mbstate_t state;
    memset(&state, 0, sizeof state);
    wchar_t in[] = L"zß水🍌"; // or "z\u00df\u6c34\U0001F34C"
    size_t in_sz = sizeof in / sizeof *in;
 
    printf("Processing %zu wchar_t units: [ ", in_sz);
    for(size_t n = 0; n < in_sz; ++n) printf("%#x ", (unsigned int)in[n]);
    puts("]");
 
    char out[MB_CUR_MAX * in_sz];
    char *p = out;
    for(size_t n = 0; n < in_sz; ++n) {
        int rc = wcrtomb(p, in[n], &state); 
        if(rc == -1) break;
        p += rc;
    }
 
    size_t out_sz = p - out;
    printf("into %zu UTF-8 code units: [ ", out_sz);
    for(size_t x = 0; x < out_sz; ++x) printf("%#x ", +(unsigned char)out[x]);
    puts("]");
}
```

## See also
- [wctombwctomb_s](/c/string/multibyte/wctomb/)
- [mbrtowc](/c/string/multibyte/mbrtowc/)
- [C++ documentation](/cpp/string/multibyte/wcrtomb/)
