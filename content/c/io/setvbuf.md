---
title: "setvbuf"
source_path: "c/io/setvbuf"
header: "<stdio.h>"
category: "c"
---

Changes the buffering mode of the given file stream stream as indicated by the argument mode. In addition,

## Declarations
```cpp
int setvbuf( FILE * stream, char * buffer,
int mode, size_t size );
```
_(until C99)_

```cpp
int setvbuf( FILE *restrict stream, char *restrict buffer,
int mode, size_t size );
```
_(since C99)_

```cpp
#define _IOFBF /*unspecified*/
#define _IOLBF /*unspecified*/
#define _IONBF /*unspecified*/
```

## Parameters
- `stream`: the file stream to set the buffer to
- `buffer`: pointer to a buffer for the stream to use or null pointer to change size and mode only
- `mode`: buffering mode to use. It can be one of the following values: _IOFBF full buffering _IOLBF line buffering _IONBF no buffering
- `size`: size of the buffer

## Return value
0 on success or nonzero on failure.

## Notes
This function may only be used after stream has been associated with an open file, but before any other operation (other than a failed call to [setbuf](/c/io/setbuf/)/setvbuf).

Not all size bytes will necessarily be used for buffering: the actual buffer size is usually rounded down to a multiple of 2, a multiple of page size, etc.

On many implementations, line buffering is only available for terminal input streams.

A common error is setting the buffer of stdin or stdout to an array whose lifetime ends before the program terminates:

The default buffer size [BUFSIZ](/c/io/) is expected to be the most efficient buffer size for file I/O on the implementation, but POSIX [fstat](http://pubs.opengroup.org/onlinepubs/9699919799/functions/fstat.html) often provides a better estimate.

## Example
```cpp
// Make some POSIX functions, such as `int fileno(FILE*)`, visible:
#define _POSIX_SOURCE
 
#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>
 
int main(void)
{
    FILE* fp = fopen("/tmp/test.txt", "w+");
    if (fp == NULL)
    {
        perror("fopen");
        return EXIT_FAILURE;
    }
 
    struct stat stats;
    if (fstat(fileno(fp), &stats) == -1) // POSIX only
    {
        perror("fstat");
        return EXIT_FAILURE;
    }
 
    printf("BUFSIZ is %d, but optimal block size is %ld\n", BUFSIZ, stats.st_blksize);
    if (setvbuf(fp, NULL, _IOFBF, stats.st_blksize) != 0)
    {
        perror("setvbuf failed"); // POSIX version sets errno
        return EXIT_FAILURE;
    }
 
    int ch;
    while((ch=fgetc(fp)) != EOF); // read entire file: use truss/strace to
                                  // observe the read(2) syscalls used
 
    fclose(fp);
    return EXIT_SUCCESS;
}
```

## See also
- [setbuf](/c/io/setbuf/)
- [C++ documentation](/cpp/io/c/setvbuf/)
