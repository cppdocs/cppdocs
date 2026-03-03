---
title: "memset, memset_explicit, memset_s"
source_path: "c/string/byte/memset"
header: "<string.h>"
category: "c"
---

1) Copies the value (unsigned char)ch into each of the first count characters of the object pointed to by dest.

## Declarations
```cpp
void *memset( void *dest, int ch, size_t count );
```

```cpp
void *memset_explicit( void *dest, int ch, size_t count );
```
_(since C23)_

```cpp
errno_t memset_s( void *dest, rsize_t destsz, int ch, rsize_t count );
```
_(since C11)_

## Parameters
- `dest`: pointer to the object to fill
- `ch`: fill byte
- `count`: number of bytes to fill
- `destsz`: size of the destination array

## Notes
memset may be optimized away (under the [as-if](/c/language/as_if/) rules) if the object modified by this function is not accessed again for the rest of its lifetime (e.g., [gcc bug 8537](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=8537)). For that reason, this function cannot be used to scrub memory (e.g., to fill an array that stored a password with zeroes).

This optimization is prohibited for memset_explicit and memset_s: they are guaranteed to perform the memory write.

Third-party solutions for that include FreeBSD [explicit_bzero](https://www.freebsd.org/cgi/man.cgi?query=explicit_bzero) or Microsoft [SecureZeroMemory](https://msdn.microsoft.com/en-us/library/windows/desktop/aa366877.aspx).

## Example
```cpp
#define __STDC_WANT_LIB_EXT1__ 1
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
 
int main(void)
{
    char str[] = "ghghghghghghghghghghgh";
    puts(str);
    memset(str,'a',5);
    puts(str);
 
#ifdef __STDC_LIB_EXT1__
    set_constraint_handler_s(ignore_handler_s);
    int r = memset_s(str, sizeof str, 'b', 5);
    printf("str = \"%s\", r = %d\n", str, r);
    r = memset_s(str, 5, 'c', 10);   // count is greater than destsz  
    printf("str = \"%s\", r = %d\n", str, r);
#endif
}
```

## See also
- [memcpymemcpy_s](/c/string/byte/memcpy/)
- [wmemset](/c/string/wide/wmemset/)
- [C++ documentation](/cpp/string/byte/memset/)
