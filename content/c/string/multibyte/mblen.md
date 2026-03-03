---
title: "mblen"
source_path: "c/string/multibyte/mblen"
header: "<stdlib.h>"
category: "c"
---

Determines the size, in bytes, of the multibyte character whose first byte is pointed to by s.

## Declarations
```cpp
int mblen( const char* s, size_t n );
```

## Parameters
- `s`: pointer to the multibyte character
- `n`: limit on the number of bytes in s that can be examined

## Return value
If s is not a null pointer, returns the number of bytes that are contained in the multibyte character or -1 if the first bytes pointed to by s do not form a valid multibyte character or 0 if s is pointing at the null charcter '\0'.

## Notes
Each call to mblen updates the internal global conversion state (a static object of type [mbstate_t](/c/string/multibyte/mbstate_t/), only known to this function). If the multibyte encoding uses shift states, care must be taken to avoid backtracking or multiple scans. In any case, multiple threads should not call mblen without synchronization: [mbrlen](/c/string/multibyte/mbrlen/) may be used instead.

mblen is not allowed to have an internal state.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
 
// the number of characters in a multibyte string is the sum of mblen()'s
// note: the simpler approach is mbstowcs(NULL, str, sz)
size_t strlen_mb(const char* ptr)
{
    size_t result = 0;
    const char* end = ptr + strlen(ptr);
    mblen(NULL, 0); // reset the conversion state
    while(ptr < end) {
        int next = mblen(ptr, end - ptr);
        if (next == -1) {
           perror("strlen_mb");
           break;
        }
        ptr += next;
        ++result;
    }
    return result;
}
 
void dump_bytes(const char* str)
{
    for (const char* end = str + strlen(str); str != end; ++str)
        printf("%02X ", (unsigned char)str[0]);
    printf("\n");
}
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
    const char* str = "z\u00df\u6c34\U0001f34c";
    printf("The string \"%s\" consists of %zu characters, but %zu bytes: ",
            str, strlen_mb(str), strlen(str));
    dump_bytes(str);
}
```

## See also
- [mbtowc](/c/string/multibyte/mbtowc/)
- [mbrlen](/c/string/multibyte/mbrlen/)
- [C++ documentation](/cpp/string/multibyte/mblen/)
