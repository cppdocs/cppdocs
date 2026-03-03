---
title: "putchar"
source_path: "c/io/putchar"
header: "<stdio.h>"
category: "c"
---

Writes a character ch to [stdout](/c/io/std_streams/). Internally, the character is converted to unsigned char just before being written.

## Declarations
```cpp
int putchar( int ch );
```

## Parameters
- `ch`: character to be written

## Return value
On success, returns the written character.

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    int ret_code = 0;
    for (char c = 'a'; (ret_code != EOF) && (c != 'z'); c++)
        ret_code = putchar(c);
 
    // Test whether EOF was reached.
    if (ret_code == EOF && ferror(stdout))
    {
        fprintf(stderr, "putchar() failed in file %s at line # %d\n",
                __FILE__, __LINE__ - 6);
        perror("putchar()");
        exit(EXIT_FAILURE);
    }
    putchar('\n');
 
    // putchar return value is not equal to the argument
    int r = 0x1070;
    printf("\n0x%x\n", r);
    r = putchar(r);
    printf("\n0x%x\n", r);
}
```

## See also
- [fputcputc](/c/io/putc/)
- [C++ documentation](/cpp/io/c/putchar/)
