---
title: "std::clearerr"
source_path: "cpp/io/c/clearerr"
header: "<cstdio>"
category: "io"
---

Resets the error flags and the [EOF](/cpp/io/c/#Macro_constants) indicator for the given file stream.

## Declarations
```cpp
void clearerr( std::FILE* stream );
```

## Parameters
- `stream`: the file to reset the error flags for

## Return value
(none)

## Example
```cpp
#include <cassert>
#include <cstdio>
 
int main()
{
    std::FILE* tmpf = std::tmpfile();
    std::fputs("cppreference.com\n", tmpf);
    std::rewind(tmpf);
 
    for (int ch; (ch = std::fgetc(tmpf)) != EOF; std::putchar(ch)) { }
 
    assert(std::feof(tmpf)); // the loop is expected to terminate by EOF
    std::puts("End of file reached");
 
    std::clearerr(tmpf); // clear EOF
 
    std::puts(std::feof(tmpf) ? "EOF indicator set"
                              : "EOF indicator cleared");
}
```

## See also
- [feof](/cpp/io/c/feof/)
- [perror](/cpp/io/c/perror/)
- [stderr](/cpp/io/c/std_streams/)
- [ferror](/cpp/io/c/ferror/)
- [C documentation](/c/io/clearerr/)
