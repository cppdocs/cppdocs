---
title: "memmove, memmove_s"
source_path: "c/string/byte/memmove"
header: "<string.h>"
category: "c"
---

1) Copies count characters from the object pointed to by src to the object pointed to by dest. Both objects are interpreted as arrays of unsigned char. The objects may overlap: copying takes place as if the characters were copied to a temporary character array and then the characters were copied from the array to dest.

## Declarations
```cpp
void* memmove( void* dest, const void* src, size_t count );
```

```cpp
errno_t memmove_s(void* dest, rsize_t destsz, const void* src, rsize_t count);
```
_(since C11)_

## Parameters
- `dest`: pointer to the object to copy to
- `destsz`: max number of bytes to modify in the destination (typically the size of the destination object)
- `src`: pointer to the object to copy from
- `count`: number of bytes to copy

## Notes
memmove may be used to set the [effective type](/c/language/object/#Effective_type) of an object obtained by an allocation function.

Despite being specified "as if" a temporary buffer is used, actual implementations of this function do not incur the overhead or double copying or extra memory. A common approach (glibc and bsd libc) is to copy bytes forwards from the beginning of the buffer if the destination starts before the source, and backwards from the end otherwise, with a fall back to the more efficient [memcpy](/c/string/byte/memcpy/) when there is no overlap at all.

Where [strict aliasing](/c/language/object/#Strict_aliasing) prohibits examining the same memory as values of two different types, memmove may be used to convert the values.

## Example
```cpp
#define __STDC_WANT_LIB_EXT1__ 1
#include <inttypes.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
 
int main(void)
{
    char str[] = "1234567890";
    puts(str);
    memmove(str + 4, str + 3, 3); // copy from [4,5,6] to [5,6,7]
    puts(str);
 
    // setting effective type of allocated memory to be int
    int* p = malloc(3 * sizeof(int)); // allocated memory has no effective type
    int arr[3] = {1, 2, 3};
    memmove(p, arr, 3 * sizeof(int)); // allocated memory now has an effective type
 
    // reinterpreting data
    double d = 0.1;
    // int64_t n = *(int64_t*)(&d); // strict aliasing violation
    int64_t n;
    memmove(&n, &d, sizeof d); // OK
    printf("%a is %" PRIx64 " as an int64_t\n", d, n);
 
#ifdef __STDC_LIB_EXT1__
    set_constraint_handler_s(ignore_handler_s);
    char src[] = "aaaaaaaaaa";
    char dst[] = "xyxyxyxyxy";
    int r = memmove_s(dst, sizeof dst, src, 5);
    printf("dst = \"%s\", r = %d\n", dst, r);
    r = memmove_s(dst, 5, src, 10); // count is greater than destsz
    printf("dst = \"");
    for (size_t ndx = 0; ndx < sizeof dst; ++ndx)
    {
        char c = dst[ndx];
        c ? printf("%c", c) : printf("\\0");
    }
    printf("\", r = %d\n", r);
#endif
}
```

## See also
- [memcpymemcpy_s](/c/string/byte/memcpy/)
- [wmemmovewmemmove_s](/c/string/wide/wmemmove/)
- [C++ documentation](/cpp/string/byte/memmove/)
