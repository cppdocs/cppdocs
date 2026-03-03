---
title: "strerror, strerror_s, strerrorlen_s"
source_path: "c/string/byte/strerror"
header: "<string.h>"
category: "c"
---

1) Returns a pointer to the textual description of the system error code errnum, identical to the description that would be printed by [perror()](/c/io/perror/).

## Declarations
```cpp
char* strerror( int errnum );
```

```cpp
errno_t strerror_s( char *buf, rsize_t bufsz, errno_t errnum );
```
_(since C11)_

```cpp
size_t strerrorlen_s( errno_t errnum );
```
_(since C11)_

## Parameters
- `errnum`: integral value referring to an error code
- `buf`: pointer to a user-provided buffer
- `bufsz`: size of the user-provided buffer

## Notes
[POSIX](http://pubs.opengroup.org/onlinepubs/9699919799/functions/strerror.html) allows subsequent calls to strerror to invalidate the pointer value returned by an earlier call. It also specifies that it is the [LC_MESSAGES](/c/locale/LC_categories/) locale facet that controls the contents of these messages.

strerror_s is the only bounds-checked function that allows truncation, because providing as much information as possible about a failure was deemed to be more desirable. POSIX also defines [strerror_r](http://pubs.opengroup.org/onlinepubs/9699919799/functions/strerror.html) for similar purposes.

## Example
```cpp
#define __STDC_WANT_LIB_EXT1__ 1
#include <stdio.h>
#include <errno.h>
#include <string.h>
#include <locale.h>
 
int main(void)
{
    FILE *fp = fopen(tmpnam((char[L_tmpnam]){0}), "r");
    if(fp==NULL) {
        printf("File opening error: %s\n", strerror(errno));
        setlocale(LC_MESSAGES, "de_DE.utf8");
        printf("Now in German: %s\n", strerror(errno));
#ifdef __STDC_LIB_EXT1__
        setlocale(LC_ALL, "ja_JP.utf8"); // printf needs CTYPE for multibyte output
        size_t errmsglen = strerrorlen_s(errno) + 1;
        char errmsg[errmsglen]; 
        strerror_s(errmsg, errmsglen, errno);
        printf("Now in Japanese: %s\n", errmsg);
#endif
    }
}
```

## See also
- [perror](/c/io/perror/)
- [stderr](/c/io/std_streams/)
- [errno](/c/error/errno/)
- [C++ documentation](/cpp/string/byte/strerror/)
