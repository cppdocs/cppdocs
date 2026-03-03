---
title: "std::fputc, std::putc"
source_path: "cpp/io/c/fputc"
header: "<cstdio>"
category: "io"
---

Writes a character ch to the given output stream stream.

## Declarations
```cpp
int fputc( int ch, std::FILE* stream );
int putc( int ch, std::FILE* stream );
```

## Parameters
- `ch`: character to be written
- `stream`: output stream

## Return value
On success, returns the written character.

## Example
```cpp
#include <cstdio>
 
int main()
{
    for (char c = 'a'; c != 'z'; c++)
        std::putc(c, stdout);
 
    // putchar's return value is not equal to the argument
    int r = 0x102A;
    std::printf("\nr = 0x%x\n", r);
 
    r = std::putchar(r);
    std::printf("\nr = 0x%x\n", r);
}
```

## See also
- [putchar](/cpp/io/c/putchar/)
- [stdout](/cpp/io/c/std_streams/)
- [C documentation](/c/io/putc/)
