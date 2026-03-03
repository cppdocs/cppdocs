---
title: "char16_t"
source_path: "c/string/multibyte/char16_t"
header: "<uchar.h>"
category: "c"
---

char16_t is an unsigned integer type used for 16-bit wide characters and is the same type as [uint_least16_t](/c/types/integer/).

## Declarations
```cpp
typedef uint_least16_t char16_t;
```
_(since C11)_

## Notes
On any given platform, by the definition of [uint_least16_t](/c/types/integer/), the width of type char16_t can be greater than 16 bits, but the actual values stored in an object of type char16_t will always have a width of 16 bits.

## Example
```cpp
#include <stdio.h>
#include <uchar.h>
 
int main(void)
{
    const char16_t wcs[] = u"zß水🍌"; // or "z\u00df\u6c34\U0001f34c"
    const size_t wcs_sz = sizeof wcs / sizeof *wcs;
    printf("%zu UTF-16 code units: [ ", wcs_sz);
    for (size_t n = 0; n < wcs_sz; ++n)
        printf("%#x ", wcs[n]);
    printf("]\n");
}
```

## See also
- [C++ documentation](/cpp/language/types/)
