---
title: "freopen, freopen_s"
source_path: "c/io/freopen"
header: "<stdio.h>"
category: "c"
---

1) First, attempts to close the file associated with stream, ignoring any errors. Then, if filename is not null, attempts to open the file specified by filename using mode as if by [fopen](/c/io/fopen/), and associates that file with the file stream pointed to by stream. If filename is a null pointer, then the function attempts to reopen the file that is already associated with stream (it is implementation defined which mode changes are allowed in this case).

## Declarations
```cpp
FILE *freopen( const char *filename, const char *mode,
FILE *stream );
```
_(until C99)_

```cpp
FILE *freopen( const char *restrict filename, const char *restrict mode,
FILE *restrict stream );
```
_(since C99)_

```cpp
errno_t freopen_s( FILE *restrict *restrict newstreamptr,
const char *restrict filename, const char *restrict mode,
FILE *restrict stream );
```
_(since C11)_

## Parameters
- `filename`: file name to associate the file stream to
- `mode`: null-terminated character string determining new file access mode
- `stream`: the file stream to modify
- `newstreamptr`: pointer to a pointer where the function stores the result (an out-parameter)

## Notes
freopen is the only way to change the narrow/wide orientation of a stream once it has been established by an I/O operation or by fwide.

Microsoft CRT version of freopen does not support any mode changes when filename is a null pointer and treats this as an error (see [documentation](https://docs.microsoft.com/en-us/cpp/c-runtime-library/reference/freopen-wfreopen)). A possible workaround is the non-standard function [_setmode()](https://docs.microsoft.com/en-us/cpp/c-runtime-library/reference/setmode).

## Example
```cpp
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    puts("stdout is printed to console");
    if (freopen("redir.txt", "w", stdout) == NULL)
    {
       perror("freopen() failed");
       return EXIT_FAILURE;
    }
    puts("stdout is redirected to a file"); // this is written to redir.txt
    fclose(stdout);
    return EXIT_SUCCESS;
}
```

## See also
- [fopenfopen_s](/c/io/fopen/)
- [fclose](/c/io/fclose/)
- [C++ documentation](/cpp/io/c/freopen/)
