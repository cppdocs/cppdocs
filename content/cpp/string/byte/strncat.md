---
title: "std::strncat"
source_path: "cpp/string/byte/strncat"
header: "<cstring>"
category: "string"
---

Appends a byte string pointed to by src to a byte string pointed to by dest. At most count characters are copied. The resulting byte string is null-terminated.

## Declarations
```cpp
char* strncat( char* dest, const char* src, std::size_t count );
```

## Parameters
- `dest`: pointer to the null-terminated byte string to append to
- `src`: pointer to the null-terminated byte string to copy from
- `count`: maximum number of characters to copy

## Return value
dest

## Notes
Because std::strncat needs to seek to the end of dest on each call, it is inefficient to concatenate many strings into one using std::strncat.

## Example
```cpp
#include <cstdio>
#include <cstring>
 
int main() 
{
    char str[50] = "Hello ";
    const char str2[50] = "World!";
    std::strcat(str, str2);
    std::strncat(str, " Goodbye World!", 3); // may issue "truncated output" warning
    std::puts(str);
}
```

## See also
- [strcat](/cpp/string/byte/strcat/)
- [strcpy](/cpp/string/byte/strcpy/)
- [C documentation](/c/string/byte/strncat/)
