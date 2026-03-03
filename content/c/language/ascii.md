---
title: "ASCII Chart"
source_path: "c/language/ascii"
category: "c"
---

The following chart contains all 128 ASCII decimal (dec), octal (oct), hexadecimal (hex) and character (ch) codes.

## Example
```cpp
#include <stdio.h>
 
int main(void)
{
    puts("Printable ASCII:");
    for (int i = 32; i < 127; ++i) {
        putchar(i);
        putchar(i % 16 == 15 ? '\n' : ' ');
    }
}
```

## See also
- [C++ documentation](/cpp/language/ascii/)
