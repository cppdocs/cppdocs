---
title: "clearerr"
source_path: "c/io/clearerr"
header: "<stdio.h>"
category: "c"
---

Resets the error flags and the [EOF](/c/io/#Macro_constants) indicator for the given file stream.

## Declarations
```cpp
void clearerr( FILE *stream );
```

## Parameters
- `stream`: the file to reset the error flags for

## Return value
(none)

## Example
```cpp
#include <stdio.h>
#include <assert.h>
 
int main(void)
{
    FILE* tmpf = tmpfile();
    fputs("cppreference.com\n", tmpf);
    rewind(tmpf);
 
    for (int ch; (ch = fgetc(tmpf)) != EOF; putchar(ch)) { }
 
    assert(feof(tmpf)); // the loop is expected to terminate by EOF
    puts("End of file reached");
 
    clearerr(tmpf); // clear EOF
 
    puts(feof(tmpf) ? "EOF indicator set" 
                    : "EOF indicator cleared");
}
```

## See also
- [feof](/c/io/feof/)
- [perror](/c/io/perror/)
- [stderr](/c/io/std_streams/)
- [ferror](/c/io/ferror/)
- [C++ documentation](/cpp/io/c/clearerr/)
