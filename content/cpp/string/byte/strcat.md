---
title: "std::strcat"
source_path: "cpp/string/byte/strcat"
header: "<cstring>"
category: "string"
---

Appends a copy of the character string pointed to by src to the end of the character string pointed to by dest. The character src[0] replaces the null terminator at the end of dest. The resulting byte string is null-terminated.

## Declarations
```cpp
char* strcat( char* dest, const char* src );
```

## Parameters
- `dest`: pointer to the null-terminated byte string to append to
- `src`: pointer to the null-terminated byte string to copy from

## Return value
dest

## Notes
Because strcat needs to seek to the end of dest on each call, it is inefficient to concatenate many strings into one using strcat.

## Example
```cpp
#include <cstdio>
#include <cstring>
 
int main() 
{
    char str[50] = "Hello ";
    char str2[50] = "World!";
    std::strcat(str, str2);
    std::strcat(str, " Goodbye World!");
    std::puts(str);
}
```

## See also
- [strncat](/cpp/string/byte/strncat/)
- [strcpy](/cpp/string/byte/strcpy/)
- [C documentation](/c/string/byte/strcat/)
