---
title: "strspn"
source_path: "c/string/byte/strspn"
header: "<string.h>"
category: "c"
---

Returns the length of the maximum initial segment (span) of the null-terminated byte string pointed to by dest, that consists of only the characters found in the null-terminated byte string pointed to by src.

## Declarations
```cpp
size_t strspn( const char* dest, const char* src );
```

## Parameters
- `dest`: pointer to the null-terminated byte string to be analyzed
- `src`: pointer to the null-terminated byte string that contains the characters to search for

## Return value
The length of the maximum initial segment that contains only characters from the null-terminated byte string pointed to by src.

## Example
```cpp
#include <stdio.h>
#include <string.h>
 
int main(void)
{
    const char* string = "abcde312$#@";
    const char* low_alpha = "qwertyuiopasdfghjklzxcvbnm";
 
    size_t spnsz = strspn(string, low_alpha);
    printf("After skipping initial lowercase letters from '%s'\n"
           "The remainder is '%s'\n", string, string + spnsz);
}
```

## See also
- [strcspn](/c/string/byte/strcspn/)
- [wcsspn](/c/string/wide/wcsspn/)
- [strpbrk](/c/string/byte/strpbrk/)
- [C++ documentation](/cpp/string/byte/strspn/)
