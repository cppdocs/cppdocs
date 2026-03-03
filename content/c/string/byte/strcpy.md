---
title: "strcpy, strcpy_s"
source_path: "c/string/byte/strcpy"
header: "<string.h>"
category: "c"
---

1) Copies the null-terminated byte string pointed to by src, including the null terminator, to the character array whose first element is pointed to by dest.

## Declarations
```cpp
char *strcpy( char *dest, const char *src );
```
_(until C99)_

```cpp
char *strcpy( char *restrict dest, const char *restrict src );
```
_(since C99)_

```cpp
errno_t strcpy_s( char *restrict dest, rsize_t destsz, const char *restrict src );
```
_(since C11)_

## Parameters
- `dest`: pointer to the character array to write to
- `src`: pointer to the null-terminated byte string to copy from
- `destsz`: maximum number of characters to write, typically the size of the destination buffer

## Notes
strcpy_s is allowed to clobber the destination array from the last character written up to destsz in order to improve efficiency: it may copy in multibyte blocks and then check for null bytes.

The function strcpy_s is similar to the BSD function strlcpy, except that

Although strcpy_s prohibits truncation due to potential security risks, it's possible to truncate a string using bounds-checked [strncpy_s](/c/string/byte/strncpy/) instead.

## Example
```cpp
#define __STDC_WANT_LIB_EXT1__ 1
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    const char *src = "Take the test.";
//  src[0] = 'M' ; // this would be undefined behavior
    char dst[strlen(src) + 1]; // +1 to accommodate for the null terminator
    strcpy(dst, src);
    dst[0] = 'M'; // OK
    printf("src = %s\ndst = %s\n", src, dst);
 
#ifdef __STDC_LIB_EXT1__
    set_constraint_handler_s(ignore_handler_s);
    int r = strcpy_s(dst, sizeof dst, src);
    printf("dst = \"%s\", r = %d\n", dst, r);
    r = strcpy_s(dst, sizeof dst, "Take even more tests.");
    printf("dst = \"%s\", r = %d\n", dst, r);
#endif
}
```

## See also
- [strncpystrncpy_s](/c/string/byte/strncpy/)
- [memcpymemcpy_s](/c/string/byte/memcpy/)
- [wcscpywcscpy_s](/c/string/wide/wcscpy/)
- [strdup](/c/experimental/dynamic/strdup/)
- [C++ documentation](/cpp/string/byte/strcpy/)
