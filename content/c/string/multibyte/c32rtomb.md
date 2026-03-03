---
title: "c32rtomb"
source_path: "c/string/multibyte/c32rtomb"
header: "<uchar.h>"
category: "c"
---

Converts a single code point from its variable-length 32-bit wide character representation (but typically, UTF-32) to its narrow multibyte character representation.

## Declarations
```cpp
size_t c32rtomb( char* restrict s, char32_t c32, mbstate_t* restrict ps );
```
_(since C11)_

## Parameters
- `s`: pointer to narrow character array where the multibyte character will be stored
- `c32`: the 32-bit wide character to convert
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
On success, returns the number of bytes (including any shift sequences) written to the character array whose first element is pointed to by s. This value may be 0, e.g. when processing the leading char32_t units in a multi-char32_t-unit sequence (does not occur in UTF-32).

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
    const char32_t in[] = U"zß水🍌"; // or "z\u00df\u6c34\U0001F34C"
    size_t in_sz = sizeof in / sizeof *in;
 
    printf("Processing %zu UTF-32 code units: [ ", in_sz);
    for (size_t n = 0; n < in_sz; ++n)
        printf("%#x ", in[n]);
    puts("]");
 
    char out[MB_CUR_MAX * in_sz];
    char* p = out;
    for (size_t n = 0; n < in_sz; ++n)
    {
        size_t rc = c32rtomb(p, in[n], &state);
        if(rc == (size_t)-1) break;
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
- [mbrtoc32](/c/string/multibyte/mbrtoc32/)
- [C++ documentation](/cpp/string/multibyte/c32rtomb/)
