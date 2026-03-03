---
title: "std::putchar"
source_path: "cpp/io/c/putchar"
header: "<cstdio>"
category: "io"
---

Writes a character ch to [stdout](/cpp/io/c/std_streams/). Internally, the character is converted to unsigned char just before being written.

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
#include <cstdio>
 
int main()
{
    for (char c = 'a'; c != 'z'; ++c)
        std::putchar(c);
 
    // putchar return value is not equal to the argument
    int r = 0x1024;
    std::printf("\nr = 0x%x\n", r);
    r = std::putchar(r);
    std::printf("\nr = 0x%x\n", r);
}
```

## See also
- [fputcputc](/cpp/io/c/fputc/)
- [C documentation](/c/io/putchar/)
