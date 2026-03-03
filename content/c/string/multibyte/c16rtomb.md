---
title: "c16rtomb"
source_path: "c/string/multibyte/c16rtomb"
header: "<uchar.h>"
category: "c"
---

Converts a single code point from its variable-length 16-bit wide character representation (typically, UTF-16) to its narrow multibyte character representation.

## Declarations
```cpp
size_t c16rtomb( char* restrict s, char16_t c16, mbstate_t* restrict ps );
```
_(since C11)_

## Parameters
- `s`: pointer to narrow character array where the multibyte character will be stored
- `c16`: the 16-bit wide character to convert
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
On success, returns the number of bytes (including any shift sequences) written to the character array whose first element is pointed to by s. This value may be 0, e.g. when processing the leading char16_t units in a multi-char16_t-unit sequence (occurs when processing the leading surrogate in a surrogate pair of UTF-16).

## Notes
In C11 as published, unlike [mbrtoc16](/c/string/multibyte/mbrtoc16/), which converts variable-width multibyte (such as UTF-8) to variable-width 16-bit (such as UTF-16) encoding, this function can only convert single-unit 16-bit encoding, meaning it cannot convert UTF-16 to UTF-8 despite that being the original intent of this function. This was corrected by the post-C11 defect report [DR488](https://open-std.org/JTC1/SC22/WG14/www/docs/n2059.htm#dr_488).

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <stdlib.h>
#include <uchar.h>
 
mbstate_t state;
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    const char16_t in[] = u"zß水🍌"; // or "z\u00df\u6c34\U0001F34C"
    const size_t in_sz = sizeof in / sizeof *in;
 
    printf("Processing %zu UTF-16 code units: [ ", in_sz);
    for (size_t n = 0; n < in_sz; ++n)
        printf("%#x ", in[n]);
    puts("]");
 
    char out[MB_CUR_MAX * in_sz];
    char *p = out;
    for (size_t n = 0; n < in_sz; ++n)
    {
        size_t rc = c16rtomb(p, in[n], &state);
        if (rc == (size_t)-1)
            break;
        p += rc;
    }
 
    size_t out_sz = p - out;
    printf("into %zu UTF-8 code units: [ ", out_sz);
    for (size_t x = 0; x < out_sz; ++x)
        printf("%#x ", +(unsigned char)out[x]);
    puts("]");
}
```

## See also
- [mbrtoc16](/c/string/multibyte/mbrtoc16/)
- [C++ documentation](/cpp/string/multibyte/c16rtomb/)
