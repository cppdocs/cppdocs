---
title: "fputc, putc"
source_path: "c/io/fputc"
header: "<stdio.h>"
category: "c"
---

Writes a character ch to the given output stream stream. putc() may be implemented as a macro and evaluate stream more than once, so the corresponding argument should never be an expression with side effects.

## Declarations
```cpp
int fputc( int ch, FILE* stream );
```

```cpp
int putc( int ch, FILE* stream );
```

## Parameters
- `ch`: character to be written
- `stream`: output stream

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
        ret_code = putc(c, stdout);
 
    // Test whether EOF was reached.
    if (ret_code == EOF && ferror(stdout))
    {
        perror("putc()");
        fprintf(stderr, "putc() failed in file %s at line # %d\n",
                __FILE__, __LINE__ - 7);
        exit(EXIT_FAILURE);
    }
    putc('\n', stdout);
 
    return EXIT_SUCCESS;
}
```

## See also
- [putchar](/c/io/putchar/)
- [stdout](/c/io/std_streams/)
- [C++ documentation](/cpp/io/c/fputc/)
