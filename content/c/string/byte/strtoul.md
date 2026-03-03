---
title: "strtoul, strtoull"
source_path: "c/string/byte/strtoul"
header: "<stdlib.h>"
category: "c"
---

Interprets an unsigned integer value in a byte string pointed to by str.

## Declarations
```cpp
unsigned long strtoul( const char *str, char **str_end,
int base );
```
_(until C99)_

```cpp
unsigned long strtoul( const char *restrict str, char **restrict str_end,
int base );
```
_(since C99)_

```cpp
unsigned long long strtoull( const char *restrict str, char **restrict str_end,
int base );
```
_(since C99)_

## Parameters
- `str`: pointer to the null-terminated byte string to be interpreted
- `str_end`: pointer to a pointer to character, might be set to a position past the last character interpreted
- `base`: base of the interpreted integer value

## Return value
Integer value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs ([errno](/c/error/errno/) is set to ERANGE) and [ULONG_MAX](/c/types/limits/) or [ULLONG_MAX](/c/types/limits/) is returned. If no conversion can be performed, 0 is returned.

## Example
```cpp
#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    const char *p = "10 200000000000000000000000000000 30 -40 - 42";
    printf("Parsing '%s':\n", p);
    char *end = NULL;
    for (unsigned long i = strtoul(p, &end, 10);
         p != end;
         i = strtoul(p, &end, 10))
    {
        printf("'%.*s' -> ", (int)(end - p), p);
        p = end;
        if (errno == ERANGE)
        {
            errno = 0;
            printf("range error, got ");
        }
        printf("%lu\n", i);
    }
    printf("After the loop p points to '%s'\n", p);
}
```

## See also
- [wcstoulwcstoull](/c/string/wide/wcstoul/)
- [atoiatolatoll](/c/string/byte/atoi/)
- [strtolstrtoll](/c/string/byte/strtol/)
- [C++ documentation](/cpp/string/byte/strtoul/)
