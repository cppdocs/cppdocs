---
title: "strncat, strncat_s"
source_path: "c/string/byte/strncat"
header: "<string.h>"
category: "c"
---

1) Appends at most count characters from the character array pointed to by src, stopping if the null character is found, to the end of the null-terminated byte string pointed to by dest. The character src[0] replaces the null terminator at the end of dest. The terminating null character is always appended in the end (so the maximum number of bytes the function may write is count+1).

## Declarations
```cpp
char *strncat( char *dest, const char *src, size_t count );
```
_(until C99)_

```cpp
char *strncat( char *restrict dest, const char *restrict src, size_t count );
```
_(since C99)_

```cpp
errno_t strncat_s( char *restrict dest, rsize_t destsz,
const char *restrict src, rsize_t count );
```
_(since C11)_

## Parameters
- `dest`: pointer to the null-terminated byte string to append to
- `src`: pointer to the character array to copy from
- `count`: maximum number of characters to copy
- `destsz`: the size of the destination buffer

## Notes
Because strncat needs to seek to the end of dest on each call, it is inefficient to concatenate many strings into one using strncat.

Although truncation to fit the destination buffer is a security risk and therefore a runtime constraints violation for strncat_s, it is possible to get the truncating behavior by specifying count equal to the size of the destination array minus one: it will copy the first count bytes and append the null terminator as always: strncat_s(dst, sizeof dst, src, (sizeof dst)-strnlen_s(dst, sizeof dst)-1);

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
    strncat(str, " Goodbye World!", 3);
    puts(str);
 
#ifdef __STDC_LIB_EXT1__
    set_constraint_handler_s(ignore_handler_s);
    char s1[100] = "good";
    char s5[1000] = "bye";
    int r1 = strncat_s(s1, 100, s5, 1000); // r1 is 0, s1 holds "goodbye\0"
    printf("s1 = %s, r1 = %d\n", s1, r1);
    char s2[6] = "hello";
    int r2 = strncat_s(s2, 6, "", 1); // r2 is 0, s2 holds "hello\0"
    printf("s2 = %s, r2 = %d\n", s2, r2);
    char s3[6] = "hello";
    int r3 = strncat_s(s3, 6, "X", 2); // r3 is non-zero, s3 holds "\0"
    printf("s3 = %s, r3 = %d\n", s3, r3);
    // the strncat_s truncation idiom:
    char s4[7] = "abc";
    int r4 = strncat_s(s4, 7, "defghijklmn", 3); // r4 is 0, s4 holds "abcdef\0"
    printf("s4 = %s, r4 = %d\n", s4, r4);
#endif
}
```

## See also
- [strcatstrcat_s](/c/string/byte/strcat/)
- [strcpystrcpy_s](/c/string/byte/strcpy/)
- [memccpy](/c/string/byte/memccpy/)
- [C++ documentation](/cpp/string/byte/strncat/)
