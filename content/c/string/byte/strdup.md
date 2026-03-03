---
title: "strdup"
source_path: "c/string/byte/strdup"
header: "<string.h>"
category: "c"
---

Returns a pointer to a null-terminated byte string, which is a duplicate of the string pointed to by src. The space for the new string is obtained as if the [malloc](/c/memory/malloc/) was invoked. The returned pointer must be passed to [free](/c/memory/free/) to avoid a memory leak.

## Declarations
```cpp
char *strdup( const char *src );
```
_(since C23)_

## Parameters
- `src`: pointer to the null-terminated byte string to duplicate

## Return value
A pointer to the newly allocated string, or a null pointer if an error occurred.

## Notes
The function is identical to the [POSIX strdup](http://pubs.opengroup.org/onlinepubs/9699919799/functions/strdup.html).

## Example
```cpp
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    const char *s1 = "Duplicate me!";
    char *s2 = strdup(s1);
    printf("s2 = \"%s\"\n", s2);
    free(s2);
}
```

## See also
- [strndup](/c/string/byte/strndup/)
- [strcpystrcpy_s](/c/string/byte/strcpy/)
- [malloc](/c/memory/malloc/)
- [free](/c/memory/free/)
