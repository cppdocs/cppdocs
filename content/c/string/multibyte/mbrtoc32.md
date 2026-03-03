---
title: "mbrtoc32"
source_path: "c/string/multibyte/mbrtoc32"
header: "<uchar.h>"
category: "c"
---

Converts a single code point from its narrow multibyte character representation to its variable-length 32-bit wide character representation (but typically, UTF-32).

## Declarations
```cpp
size_t mbrtoc32( char32_t restrict * pc32, const char * restrict s,
size_t n, mbstate_t * restrict ps );
```
_(since C11)_

## Parameters
- `pc32`: pointer to the location where the resulting 32-bit wide character will be written
- `s`: pointer to the multibyte character string used as input
- `n`: limit on the number of bytes in s that can be examined
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
The first of the following that applies:

## Example
```cpp
#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <uchar.h>
#include <assert.h>
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    char in[] = u8"zß水🍌"; // or "z\u00df\u6c34\U0001F34C"
    const size_t in_size = sizeof in / sizeof *in;
 
    printf("Processing %zu UTF-8 code units: [ ", in_size);
    for (size_t i = 0; i < in_size; ++i)
        printf("0x%02x ", (unsigned char)in[i]);
 
    puts("]");
 
    char32_t out[in_size];
    char32_t *p_out = out;
    char *p_in = in, *end = in + in_size;
    mbstate_t state;
    memset(&state, 0, sizeof(state));
    size_t rc;
    while ((rc = mbrtoc32(p_out, p_in, end - p_in, &state)))
    {
        assert(rc != (size_t)-3); // no surrogate pairs in UTF-32
        if (rc == (size_t)-1) break; // invalid input
        if (rc == (size_t)-2) break; // truncated input
        p_in += rc;
        ++p_out;
    }
 
    size_t out_size = p_out+1 - out;
    printf("into %zu UTF-32 code units: [ ", out_size);
    for (size_t i = 0; i < out_size; ++i)
        printf("0x%08X ", out[i]);
 
    puts("]");
}
```

## See also
- [c32rtomb](/c/string/multibyte/c32rtomb/)
- [C++ documentation](/cpp/string/multibyte/mbrtoc32/)
