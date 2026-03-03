---
title: "memchr"
source_path: "c/string/byte/memchr"
header: "<string.h>"
category: "c"
---

1) Finds the first occurrence of (unsigned char)ch in the initial count bytes (each interpreted as unsigned char) of the object pointed to by ptr.

## Declarations
```cpp
void* memchr( const void* ptr, int ch, size_t count );
```

```cpp
/*QVoid*/ *memchr( /*QVoid*/ *ptr, int ch, size_t count );
```
_(since C23)_

## Parameters
- `ptr`: pointer to the object to be examined
- `ch`: bytes to search for
- `count`: max number of bytes to examine

## Return value
Pointer to the location of the byte, or a null pointer if no such byte is found.

## Example
```cpp
#include <stdio.h>
#include <string.h>
 
int main(void)
{
    const char str[] = "ABCDEFG";
    const int chars[] = {'D', 'd'};
    for (size_t i = 0; i < sizeof chars / (sizeof chars[0]); ++i)
    {
        const int c = chars[i];
        const char *ps = memchr(str, c, strlen(str));
        ps ? printf ("character '%c'(%i) found: %s\n", c, c, ps)
           : printf ("character '%c'(%i) not found\n", c, c);
    }
    return 0;
}
```

## See also
- [strchr](/c/string/byte/strchr/)
- [C++ documentation](/cpp/string/byte/memchr/)
