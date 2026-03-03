---
title: "mbrtoc16"
source_path: "c/string/multibyte/mbrtoc16"
header: "<uchar.h>"
category: "c"
---

Converts a single code point from its narrow multibyte character representation to its variable-length 16-bit wide character representation (typically, UTF-16).

## Declarations
```cpp
size_t mbrtoc16( char16_t* restrict pc16, const char* restrict s,
size_t n, mbstate_t* restrict ps );
```
_(since C11)_

## Parameters
- `pc16`: pointer to the location where the resulting 16-bit wide character will be written
- `s`: pointer to the multibyte character string used as input
- `n`: limit on the number of bytes in s that can be examined
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
The first of the following that applies:

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <uchar.h>
 
mbstate_t state;
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    const char in[] = u8"zß水🍌"; // or "z\u00df\u6c34\U0001F34C"
    const size_t in_sz = sizeof in / sizeof *in;
 
    printf("Processing %zu UTF-8 code units: [ ", in_sz);
    for (size_t n = 0; n < in_sz; ++n)
        printf("%#x ", (unsigned char)in[n]);
    puts("]");
 
    char16_t out[in_sz];
    const char *p_in = in, *end = in + in_sz;
    char16_t *p_out = out;
    for (size_t rc; (rc = mbrtoc16(p_out, p_in, end - p_in, &state));)
    {
        if (rc == (size_t)-1)     // invalid input
            break;
        else if(rc == (size_t)-2) // truncated input
            break;
        else if(rc == (size_t)-3) // UTF-16 high surrogate
            p_out += 1;
        else
        {
            p_in += rc;
            p_out += 1;
        };
    }
 
    const size_t out_sz = p_out - out + 1;
    printf("into %zu UTF-16 code units: [ ", out_sz);
    for (size_t x = 0; x < out_sz; ++x)
        printf("%#x ", out[x]);
    puts("]");
}
```

## See also
- [c16rtomb](/c/string/multibyte/c16rtomb/)
- [C++ documentation](/cpp/string/multibyte/mbrtoc16/)
