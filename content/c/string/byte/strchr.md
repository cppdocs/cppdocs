---
title: "strchr"
source_path: "c/string/byte/strchr"
header: "<string.h>"
category: "c"
---

1) Finds the first occurrence of ch (after conversion to char as if by (char)ch) in the null-terminated byte string pointed to by str (each character interpreted as unsigned char). The terminating null character is considered to be a part of the string and can be found when searching for '\0'.

## Declarations
```cpp
char* strchr( const char* str, int ch );
```

```cpp
/*QChar*/ *strchr( /*QChar*/ *str, int ch );
```
_(since C23)_

## Parameters
- `str`: pointer to the null-terminated byte string to be analyzed
- `ch`: character to search for

## Return value
Pointer to the found character in str, or null pointer if no such character is found.

## Example
```cpp
#include <stdio.h>
#include <string.h>
 
int main(void)
{
    const char *str = "Try not. Do, or do not. There is no try.";
    char target = 'T';
    const char* result = str;
 
    while((result = strchr(result, target)) != NULL)
    {
        printf("Found '%c' starting at '%s'\n", target, result);
        ++result; // Increment result, otherwise we'll find target at the same location
    }
}
```

## See also
- [memchr](/c/string/byte/memchr/)
- [strrchr](/c/string/byte/strrchr/)
- [strpbrk](/c/string/byte/strpbrk/)
- [C++ documentation](/cpp/string/byte/strchr/)
