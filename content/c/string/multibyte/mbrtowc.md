---
title: "mbrtowc"
source_path: "c/string/multibyte/mbrtowc"
header: "<wchar.h>"
category: "c"
---

Converts a narrow multibyte character to its wide character representation.

## Declarations
```cpp
size_t mbrtowc( wchar_t* pwc, const char* s, size_t n, mbstate_t* ps );
```
_(since C95)_

```cpp
size_t mbrtowc( wchar_t *restrict pwc, const char *restrict s, size_t n,
mbstate_t *restrict ps );
```
_(since C99)_

## Parameters
- `pwc`: pointer to the location where the resulting wide character will be written
- `s`: pointer to the multibyte character string used as input
- `n`: limit on the number of bytes in s that can be examined
- `ps`: pointer to the conversion state used when interpreting the multibyte character string

## Return value
The first of the following that applies:

## Example
```cpp
#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <wchar.h>
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    mbstate_t state;
    memset(&state, 0, sizeof state);
    char in[] = u8"z\u00df\u6c34\U0001F34C"; // or u8"zß水🍌"
    size_t in_sz = sizeof in / sizeof *in;
 
    printf("Processing %zu UTF-8 code units: [ ", in_sz);
    for(size_t n = 0; n < in_sz; ++n) printf("%#x ", (unsigned char)in[n]);
    puts("]");
 
    wchar_t out[in_sz];
    char *p_in = in, *end = in + in_sz;
    wchar_t *p_out = out;
    int rc;
    while((rc = mbrtowc(p_out, p_in, end - p_in, &state)) > 0)
    {
        p_in += rc;
        p_out += 1;
    }
 
    size_t out_sz = p_out - out + 1;
    printf("into %zu wchar_t units: [ ", out_sz);
    for(size_t x = 0; x < out_sz; ++x) printf("%#x ", out[x]);
    puts("]");
}
```

## See also
- [mbtowc](/c/string/multibyte/mbtowc/)
- [wcrtombwcrtomb_s](/c/string/multibyte/wcrtomb/)
- [C++ documentation](/cpp/string/multibyte/mbrtowc/)
