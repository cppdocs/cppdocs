---
title: "strndup"
source_path: "c/string/byte/strndup"
header: "<string.h>"
category: "c"
---

Returns a pointer to a null-terminated byte string, which contains copies of at most size bytes from the string pointed to by src. The space for the new string is obtained as if [malloc](/c/memory/malloc/) was called. If the null terminator is not encountered in the first size bytes, it is appended to the duplicated string.

## Declarations
```cpp
char *strndup( const char *src, size_t size );
```
_(since C23)_

## Parameters
- `src`: pointer to the null-terminated byte string to duplicate
- `size`: max number of bytes to copy from src

## Return value
A pointer to the newly allocated string, or a null pointer if an error occurred.

## Notes
The function is identical to the [POSIX strndup](http://pubs.opengroup.org/onlinepubs/9699919799/functions/strdup.html) except that it is allowed, but not required to set [errno](/c/error/errno/) on error.

## Example
```cpp
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    const size_t n = 3;
 
    const char *src = "Replica";
    char *dup = strndup(src, n);
    printf("strndup(\"%s\", %lu) == \"%s\"\n", src, n, dup);
    free(dup);
 
    src = "Hi";
    dup = strndup(src, n);
    printf("strndup(\"%s\", %lu) == \"%s\"\n", src, n, dup);
    free(dup);
 
    const char arr[] = {'A','B','C','D'}; // NB: no trailing '\0'
    dup = strndup(arr, n);
    printf("strndup({'A','B','C','D'}, %lu) == \"%s\"\n", n, dup);
    free(dup);
}
```

## See also
- [strdup](/c/string/byte/strdup/)
- [strcpystrcpy_s](/c/string/byte/strcpy/)
- [malloc](/c/memory/malloc/)
- [free](/c/memory/free/)
