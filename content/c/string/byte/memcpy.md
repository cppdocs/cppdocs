---
title: "memcpy, memcpy_s"
source_path: "c/string/byte/memcpy"
header: "<string.h>"
category: "c"
---

1) Copies count characters from the object pointed to by src to the object pointed to by dest. Both objects are interpreted as arrays of unsigned char.

## Declarations
```cpp
void* memcpy( void *dest, const void *src, size_t count );
```
_(until C99)_

```cpp
void* memcpy( void *restrict dest, const void *restrict src, size_t count );
```
_(since C99)_

```cpp
errno_t memcpy_s( void *restrict dest, rsize_t destsz,
const void *restrict src, rsize_t count );
```
_(since C11)_

## Parameters
- `dest`: pointer to the object to copy to
- `destsz`: max number of bytes to modify in the destination (typically the size of the destination object)
- `src`: pointer to the object to copy from
- `count`: number of bytes to copy

## Notes
memcpy may be used to set the [effective type](/c/language/object/#Effective_type) of an object obtained by an allocation function.

memcpy is the fastest library routine for memory-to-memory copy. It is usually more efficient than [strcpy](/c/string/byte/strcpy/), which must scan the data it copies or [memmove](/c/string/byte/memmove/), which must take precautions to handle overlapping inputs.

Several C compilers transform suitable memory-copying loops to memcpy calls.

Where [strict aliasing](/c/language/object/#Strict_aliasing) prohibits examining the same memory as values of two different types, memcpy may be used to convert the values.

## Example
```cpp
#define __STDC_WANT_LIB_EXT1__ 1
#include <stdio.h>
#include <stdint.h>
#include <inttypes.h>
#include <string.h>
#include <stdlib.h>
 
int main(void)
{
    // simple usage
    char source[] = "once upon a midnight dreary...", dest[4];
    memcpy(dest, source, sizeof dest);
    for(size_t n = 0; n < sizeof dest; ++n)
        putchar(dest[n]);
 
    // setting effective type of allocated memory to be int
    int *p = malloc(3*sizeof(int));   // allocated memory has no effective type
    int arr[3] = {1,2,3};
    memcpy(p,arr,3*sizeof(int));      // allocated memory now has an effective type
 
    // reinterpreting data
    double d = 0.1;
//    int64_t n = *(int64_t*)(&d); // strict aliasing violation
    int64_t n;
    memcpy(&n, &d, sizeof d); // OK
    printf("\n%a is %" PRIx64 " as an int64_t\n", d, n);
 
#ifdef __STDC_LIB_EXT1__
    set_constraint_handler_s(ignore_handler_s);
    char src[] = "aaaaaaaaaa";
    char dst[] = "xyxyxyxyxy";
    int r = memcpy_s(dst,sizeof dst,src,5);
    printf("dst = \"%s\", r = %d\n", dst,r);
    r = memcpy_s(dst,5,src,10);            //  count is greater than destsz  
    printf("dst = \"");
    for(size_t ndx=0; ndx<sizeof dst; ++ndx) {
        char c = dst[ndx];
        c ? printf("%c", c) : printf("\\0");
    }
    printf("\", r = %d\n", r);
#endif
}
```

## See also
- [memccpy](/c/string/byte/memccpy/)
- [memmovememmove_s](/c/string/byte/memmove/)
- [wmemcpywmemcpy_s](/c/string/wide/wmemcpy/)
- [C++ documentation](/cpp/string/byte/memcpy/)
