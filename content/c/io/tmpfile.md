---
title: "tmpfile, tmpfile_s"
source_path: "c/io/tmpfile"
header: "<stdio.h>"
category: "c"
---

1) Creates and opens a temporary file. The file is opened as binary file for update (as if by [fopen](/c/io/fopen/) with "wb+" mode). The filename of the file is guaranteed to be unique within the filesystem. At least [TMP_MAX](/c/io/) files may be opened during the lifetime of a program (this limit may be shared with [tmpnam](/c/io/tmpnam/) and may be further limited by [FOPEN_MAX](/c/io/)).

## Declarations
```cpp
FILE* tmpfile( void );
```

```cpp
errno_t tmpfile_s( FILE* restrict* restrict streamptr );
```
_(since C11)_

## Notes
On some implementations (e.g. older Linux), this function actually creates, opens, and immediately deletes the file from the file system: as long as an open file descriptor to a deleted file is held by a program, the file exists, but since it was deleted, its name does not appear in any directory, so that no other process can open it. Once the file descriptor is closed, or once the program terminates (normally or abnormally), the space occupied by the file is reclaimed by the filesystem. Newer Linux (since 3.11 or later, depending on filesystem) creates such invisible temporary files in one step, via special flag in the [open()](https://man7.org/linux/man-pages/man2/open.2.html) syscall.

On some implementations (e.g. Windows), elevated privileges are required as the function may create the temporary file in a system directory.

## Example
```cpp
#define _POSIX_C_SOURCE 200112L
#include <stdio.h>
#include <unistd.h>
 
int main(void)
{
    printf("TMP_MAX = %d, FOPEN_MAX = %d\n", TMP_MAX, FOPEN_MAX);
    FILE* tmpf = tmpfile();
    fputs("Hello, world", tmpf);
    rewind(tmpf);
    char buf[6];
    fgets(buf, sizeof buf, tmpf);
    printf("got back from the file: '%s'\n", buf);
 
    // Linux-specific method to display the tmpfile name
    char fname[FILENAME_MAX], link[FILENAME_MAX] = {0};
    sprintf(fname, "/proc/self/fd/%d", fileno(tmpf));
    if (readlink(fname, link, sizeof link - 1) > 0)
        printf("File name: %s\n", link);
}
```

## See also
- [tmpnamtmpnam_s](/c/io/tmpnam/)
- [C++ documentation](/cpp/io/c/tmpfile/)
