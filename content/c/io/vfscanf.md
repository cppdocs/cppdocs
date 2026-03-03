---
title: "vscanf, vfscanf, vsscanf, vscanf_s, vfscanf_s, vsscanf_s"
source_path: "c/io/vfscanf"
header: "<stdio.h>"
category: "c"
---

Reads data from the a variety of sources, interprets it according to format and stores the results into locations defined by vlist.

## Declarations
```cpp
int vscanf( const char *restrict format, va_list vlist );
```
_(since C99)_

```cpp
int vfscanf( FILE *restrict stream, const char *restrict format,
va_list vlist );
```
_(since C99)_

```cpp
int vsscanf( const char *restrict buffer, const char *restrict format,
va_list vlist );
```
_(since C99)_

```cpp
int vscanf_s(const char *restrict format, va_list vlist);
```
_(since C11)_

```cpp
int vfscanf_s( FILE *restrict stream, const char *restrict format,
va_list vlist);
```
_(since C11)_

```cpp
int vsscanf_s( const char *restrict buffer, const char *restrict format,
va_list vlist);
```
_(since C11)_

## Parameters
- `stream`: input file stream to read from
- `buffer`: pointer to a null-terminated character string to read from
- `format`: pointer to a null-terminated character string specifying how to read the input
- `vlist`: variable argument list containing the receiving arguments.

## Notes
All these functions invoke va_arg at least once, the value of arg is indeterminate after the return. These functions to not invoke va_end, and it must be done by the caller.

## Example
```cpp
#include <stdio.h>
#include <stdbool.h>
#include <stdarg.h>
 
bool checked_sscanf(int count, const char* buf, const char *fmt, ...)
{
    va_list ap;
    va_start(ap, fmt);
    int rc = vsscanf(buf, fmt, ap);
    va_end(ap);
    return rc == count;
}
 
int main(void)
{
    int n, m;
 
    printf("Parsing '1 2'...");
    if(checked_sscanf(2, "1 2", "%d %d", &n, &m))
        puts("success");
    else
        puts("failure");
 
    printf("Parsing '1 a'...");
    if(checked_sscanf(2, "1 a", "%d %d", &n, &m))
        puts("success");
    else
        puts("failure");
}
```

## See also
- [scanffscanfsscanfscanf_sfscanf_ssscanf_s](/c/io/fscanf/)
- [stdin](/c/io/std_streams/)
- [vprintfvfprintfvsprintfvsnprintfvprintf_svfprintf_svsprintf_svsnprintf_s](/c/io/vfprintf/)
- [stdout](/c/io/std_streams/)
- [C++ documentation](/cpp/io/c/vfscanf/)
