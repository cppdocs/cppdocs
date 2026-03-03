---
title: "strcat, strcat_s"
source_path: "c/string/byte/strcat"
header: "<string.h>"
category: "c"
---

1) Appends a copy of the null-terminated byte string pointed to by src to the end of the null-terminated byte string pointed to by dest. The character src[0] replaces the null terminator at the end of dest. The resulting byte string is null-terminated.

## Declarations
```cpp
char *strcat( char *dest, const char *src );
```
_(until C99)_

```cpp
char *strcat( char *restrict dest, const char *restrict src );
```
_(since C99)_

```cpp
errno_t strcat_s(char *restrict dest, rsize_t destsz, const char *restrict src);
```
_(since C11)_

## Parameters
- `dest`: pointer to the null-terminated byte string to append to
- `src`: pointer to the null-terminated byte string to copy from
- `destsz`: maximum number of characters to write, typically the size of the destination buffer

## Notes
Because strcat needs to seek to the end of dest on each call, it is inefficient to concatenate many strings into one using strcat.

strcat_s is allowed to clobber the destination array from the last character written up to destsz in order to improve efficiency: it may copy in multibyte blocks and then check for null bytes.

The function strcat_s is similar to the [BSD function strlcat](https://www.freebsd.org/cgi/man.cgi?query=strlcat&sektion=3), except that

Although strcat_s prohibits truncation due to potential security risks, it's possible to truncate a string using bounds-checked [strncat_s](/c/string/byte/strncat/) instead.

## Example
```cpp
#define __STDC_WANT_LIB_EXT1__ 1
#include <string.h> 
#include <stdio.h>
#include <stdlib.h>
 
int main(void) 
{
    char str[50] = "Hello ";
    char str2[50] = "World!";
    strcat(str, str2);
    strcat(str, " ...");
    strcat(str, " Goodbye World!");
    puts(str);
 
#ifdef __STDC_LIB_EXT1__
    set_constraint_handler_s(ignore_handler_s);
    int r = strcat_s(str, sizeof str, " ... ");
    printf("str = \"%s\", r = %d\n", str, r);
    r = strcat_s(str, sizeof str, " and this is too much");
    printf("str = \"%s\", r = %d\n", str, r);
#endif
}
```

## See also
- [strncatstrncat_s](/c/string/byte/strncat/)
- [strcpystrcpy_s](/c/string/byte/strcpy/)
- [memccpy](/c/string/byte/memccpy/)
- [C++ documentation](/cpp/string/byte/strcat/)
