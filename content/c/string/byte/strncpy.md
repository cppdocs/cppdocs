---
title: "strncpy, strncpy_s"
source_path: "c/string/byte/strncpy"
header: "<string.h>"
category: "c"
---

1) Copies at most count characters of the character array pointed to by src (including the terminating null character, but not any of the characters that follow the null character) to character array pointed to by dest.

## Declarations
```cpp
char *strncpy( char *dest, const char *src, size_t count );
```
_(until C99)_

```cpp
char *strncpy( char *restrict dest, const char *restrict src, size_t count );
```
_(since C99)_

```cpp
errno_t strncpy_s( char *restrict dest, rsize_t destsz,
const char *restrict src, rsize_t count );
```
_(since C11)_

## Parameters
- `dest`: pointer to the character array to copy to
- `src`: pointer to the character array to copy from
- `count`: maximum number of characters to copy
- `destsz`: the size of the destination buffer

## Notes
As corrected by the post-C11 DR 468, strncpy_s, unlike [strcpy_s](/c/string/byte/strcpy/), is only allowed to clobber the remainder of the destination array if an error occurs.

Unlike strncpy, strncpy_s does not pad the destination array with zeroes, This is a common source of errors when converting existing code to the bounds-checked version.

Although truncation to fit the destination buffer is a security risk and therefore a runtime constraints violation for strncpy_s, it is possible to get the truncating behavior by specifying count equal to the size of the destination array minus one: it will copy the first count bytes and append the null terminator as always: strncpy_s(dst, sizeof dst, src, (sizeof dst)-1);

## Example
```cpp
#define __STDC_WANT_LIB_EXT1__ 1
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
 
int main(void)
{
    char src[] = "hi";
    char dest[6] = "abcdef"; // no null terminator
    strncpy(dest, src, 5); // writes five characters 'h', 'i', '\0', '\0', '\0' to dest
    printf("strncpy(dest, src, 5) to a 6-byte dest gives : ");
    for (size_t n = 0; n < sizeof dest; ++n) {
        char c = dest[n];
        c ? printf("'%c' ", c) : printf("'\\0' ");
    }
 
    printf("\nstrncpy(dest2, src, 2) to a 2-byte dst gives : ");
    char dest2[2];
    strncpy(dest2, src, 2); // truncation: writes two characters 'h', 'i', to dest2
    for (size_t n = 0; n < sizeof dest2; ++n) {
        char c = dest2[n];
        c ? printf("'%c' ", c) : printf("'\\0' ");
    }
    printf("\n");
 
#ifdef __STDC_LIB_EXT1__
    set_constraint_handler_s(ignore_handler_s);
    char dst1[6], src1[100] = "hello";
    errno_t r1 = strncpy_s(dst1, 6, src1, 100);  // writes 0 to r1, 6 characters to dst1
    printf("dst1 = \"%s\", r1 = %d\n", dst1,r1); // 'h','e','l','l','o','\0' to dst1
 
    char dst2[5], src2[7] = {'g','o','o','d','b','y','e'};
    errno_t r2 = strncpy_s(dst2, 5, src2, 7);    // copy overflows the destination array
    printf("dst2 = \"%s\", r2 = %d\n", dst2,r2); // writes nonzero to r2,'\0' to dst2[0]
 
    char dst3[5];
    errno_t r3 = strncpy_s(dst3, 5, src2, 4);    // writes 0 to r3, 5 characters to dst3
    printf("dst3 = \"%s\", r3 = %d\n", dst3,r3); // 'g', 'o', 'o', 'd', '\0' to dst3
#endif
}
```

## See also
- [strcpystrcpy_s](/c/string/byte/strcpy/)
- [memcpymemcpy_s](/c/string/byte/memcpy/)
- [strndup](/c/experimental/dynamic/strndup/)
- [C++ documentation](/cpp/string/byte/strncpy/)
