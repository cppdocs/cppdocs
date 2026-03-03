---
title: "char8_t"
source_path: "c/string/multibyte/char8_t"
header: "<uchar.h>"
category: "c"
---

char8_t is an unsigned integer type used for UTF-8 and is the same type as unsigned char.

## Declarations
```cpp
typedef unsigned char char8_t;
```
_(since C23)_

## Example
```cpp
#include <stdio.h>
#include <uchar.h>
 
int main(void)
{
    char8_t str[] = u8"zß水🍌"; // or "z\u00df\u6c34\U0001f34c"
    size_t str_sz = sizeof str; // sizeof *str == 1 by definition
    printf("%zu UTF-8 code units: [ ", str_sz);
    for (size_t n = 0; n < str_sz; ++n)
        printf("%02X ", str[n]);
    printf("]\n");
}
```

## See also
- [C++ documentation](/cpp/language/types/)
