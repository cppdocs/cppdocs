---
title: "strtoimax, strtoumax"
source_path: "c/string/byte/strtoimax"
header: "<inttypes.h>"
category: "c"
---

Interprets an integer value in a byte string pointed to by nptr.

## Declarations
```cpp
intmax_t strtoimax( const char* restrict nptr,
char** restrict endptr, int base );
```
_(since C99)_

```cpp
uintmax_t strtoumax( const char* restrict nptr,
char** restrict endptr, int base );
```
_(since C99)_

## Parameters
- `nptr`: pointer to the null-terminated byte string to be interpreted
- `endptr`: pointer to a pointer to character
- `base`: base of the interpreted integer value

## Example
```cpp
#include <errno.h>
#include <inttypes.h>
#include <stdio.h>
#include <string.h>
 
int main(void)
{
    char* endptr = NULL;
 
    printf("%ld\n", strtoimax(" -123junk", &endptr, 10)); // base 10
    printf("%ld\n", strtoimax("11111111", &endptr, 2));   // base 2
    printf("%ld\n", strtoimax("XyZ", &endptr, 36));       // base 36
    printf("%ld\n", strtoimax("010", &endptr, 0));        // octal auto-detection
    printf("%ld\n", strtoimax("10", &endptr, 0));         // decimal auto-detection
    printf("%ld\n", strtoimax("0x10", &endptr, 0));       // hexadecimal auto-detection
 
    // range error: LONG_MAX+1 --> LONG_MAX
    errno = 0;
    printf("%ld\n", strtoimax("9223372036854775808", &endptr, 10));
    printf("%s\n", strerror(errno));
}
```

## See also
- [wcstoimaxwcstoumax](/c/string/wide/wcstoimax/)
- [intmax_t](/c/types/integer/)
- [uintmax_t](/c/types/integer/)
- [strtolstrtoll](/c/string/byte/strtol/)
- [strtoul strtoull](/c/string/byte/strtoul/)
- [C++ documentation](/cpp/string/byte/strtoimax/)
