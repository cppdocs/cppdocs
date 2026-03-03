---
title: "atoi, atol, atoll"
source_path: "c/string/byte/atoi"
header: "<stdlib.h>"
category: "c"
---

Interprets an integer value in a byte string pointed to by str. The implied radix is always 10.

## Declarations
```cpp
int atoi ( const char* str );
```

```cpp
long atol ( const char* str );
```

```cpp
long long atoll( const char* str );
```
_(since C99)_

## Parameters
- `str`: pointer to the null-terminated byte string to be interpreted

## Return value
Integer value corresponding to the contents of str on success.

## Notes
The name stands for "ASCII to integer".

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    printf("%i\n", atoi(" -123junk"));
    printf("%i\n", atoi(" +321dust"));
    printf("%i\n", atoi("0"));
    printf("%i\n", atoi("0042")); // treated as a decimal number with leading zeros
    printf("%i\n", atoi("0x2A")); // only leading zero is converted discarding "x2A"
    printf("%i\n", atoi("junk")); // no conversion can be performed
    printf("%i\n", atoi("2147483648")); // UB: out of range of int
}
```

## See also
- [strtolstrtoll](/c/string/byte/strtol/)
- [strtoul strtoull](/c/string/byte/strtoul/)
- [wcstolwcstoll](/c/string/wide/wcstol/)
- [wcstoulwcstoull](/c/string/wide/wcstoul/)
- [C++ documentation](/cpp/string/byte/atoi/)
