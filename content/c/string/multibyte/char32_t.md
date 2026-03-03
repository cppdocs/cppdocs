---
title: "char32_t"
source_path: "c/string/multibyte/char32_t"
header: "<uchar.h>"
category: "c"
---

char32_t is an unsigned integer type used for 32-bit wide characters and is the same type as [uint_least32_t](/c/types/integer/).

## Declarations
```cpp
typedef uint_least32_t char32_t;
```
_(since C11)_

## Notes
On any given platform, by the definition of [uint_least32_t](/c/types/integer/), the width of type char32_t can be greater than 32 bits, but the actual values stored in an object of type char32_t will always have a width of 32 bits.

## Example
```cpp
#include <stdio.h>
#include <uchar.h>
 
int main(void)
{
    const char32_t wc[] = U"zß水🍌"; // or "z\u00df\u6c34\U0001f34c"
    const size_t wc_sz = sizeof wc / sizeof *wc;
    printf("%zu UTF-32 code units: [ ", wc_sz);
    for (size_t n = 0; n < wc_sz; ++n)
        printf("%#x ", wc[n]);
    printf("]\n");
}
```

## See also
- [C++ documentation](/cpp/language/types/)
