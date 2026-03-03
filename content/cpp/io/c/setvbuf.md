---
title: "std::setvbuf"
source_path: "cpp/io/c/setvbuf"
header: "<cstdio>"
category: "io"
---

Changes the buffering mode of the given file stream stream as indicated by the argument mode. In addition,

## Declarations
```cpp
int setvbuf( std::FILE* stream, char* buffer, int mode, std::size_t size );
```

## Parameters
- `stream`: the file stream to set the buffer to
- `buffer`: pointer to a buffer for the stream to use or null pointer to change size and mode only
- `mode`: buffering mode to use. It can be one of the following values: _IOFBF full buffering _IOLBF line buffering _IONBF no buffering
- `size`: size of the buffer

## Return value
0 on success or nonzero on failure.

## Notes
This function may only be used after stream has been associated with an open file, but before any other operation (other than a failed call to [std::setbuf](/cpp/io/c/setbuf/)/std::setvbuf).

Not all size bytes will necessarily be used for buffering: the actual buffer size is usually rounded down to a multiple of 2, a multiple of page size, etc.

On many implementations, line buffering is only available for terminal input streams.

A common error is setting the buffer of stdin or stdout to an array whose lifetime ends before the program terminates:

The default buffer size [BUFSIZ](/cpp/io/c/) is expected to be the most efficient buffer size for file I/O on the implementation, but POSIX [fstat](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fstat.html) often provides a better estimate.

## Example
```cpp
#include <cstdio>
#include <cstdlib>
#include <iostream>
#include <sys/stat.h>
 
int main()
{
    std::FILE* fp = std::fopen("/tmp/test.txt", "w+");
    if (!fp)
    {
        std::perror("fopen");
        return EXIT_FAILURE;
    }
 
    struct stat stats;
    if (fstat(fileno(fp), &stats) == -1) // POSIX only
    {
        std::perror("fstat");
        return EXIT_FAILURE;
    }
 
    std::cout << "BUFSIZ is " << BUFSIZ << ", but optimal block size is "
              << stats.st_blksize << '\n';
    if (std::setvbuf(fp, nullptr, _IOFBF, stats.st_blksize) != 0)
    {
        std::perror("setvbuf failed"); // POSIX version sets errno
        return EXIT_FAILURE;
    }
 
    // Read entire file: use truss/strace to observe the read(2) syscalls used
    for (int ch; (ch = std::fgetc(fp)) != EOF;)
    {}
 
    std::fclose(fp);
    return EXIT_SUCCESS;
}
```

## See also
- [setbuf](/cpp/io/c/setbuf/)
- [setbuf](/cpp/io/basic_filebuf/setbuf/)
- [C documentation](/c/io/setvbuf/)
