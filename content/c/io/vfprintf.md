---
title: "vprintf, vfprintf, vsprintf, vsnprintf, vprintf_s, vfprintf_s, vsprintf_s, vsnprintf_s"
source_path: "c/io/vfprintf"
header: "<stdio.h>"
category: "c"
---

Loads the data from the locations, defined by vlist, converts them to character string equivalents and writes the results to a variety of sinks.

## Declarations
```cpp
int vprintf( const char* format, va_list vlist );
```
_(until C99)_

```cpp
int vprintf( const char* restrict format, va_list vlist );
```
_(since C99)_

```cpp
int vfprintf( FILE* stream, const char* format, va_list vlist );
```
_(until C99)_

```cpp
int vfprintf( FILE* restrict stream, const char* restrict format,
va_list vlist );
```
_(since C99)_

```cpp
int vsprintf( char* buffer, const char* format, va_list vlist );
```
_(until C99)_

```cpp
int vsprintf( char* restrict buffer, const char* restrict format,
va_list vlist );
```
_(since C99)_

```cpp
int vsnprintf( char* restrict buffer, size_t bufsz,
const char* restrict format, va_list vlist );
```
_(since C99)_

```cpp
int vprintf_s( const char* restrict format, va_list vlist );
```
_(since C11)_

```cpp
int vfprintf_s( FILE* restrict stream, const char* restrict format,
va_list vlist );
```
_(since C11)_

```cpp
int vsprintf_s( char* restrict buffer, rsize_t bufsz,
const char* restrict format, va_list vlist );
```
_(since C11)_

```cpp
int vsnprintf_s( char* restrict buffer, rsize_t bufsz,
const char* restrict format, va_list vlist );
```
_(since C11)_

## Parameters
- `stream`: output file stream to write to
- `buffer`: pointer to a character string to write to
- `bufsz`: up to bufsz - 1 characters may be written, plus the null terminator
- `format`: pointer to a null-terminated character string specifying how to interpret the data
- `vlist`: variable argument list containing the data to print.

## Notes
All these functions invoke va_arg at least once, the value of arg is indeterminate after the return. These functions do not invoke va_end, and it must be done by the caller.

vsnprintf_s, unlike vsprintf_s, will truncate the result to fit within the array pointed to by buffer.

The implementation of vsnprintf_s in the [Microsoft CRT](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/vsnprintf-s-vsnprintf-s-vsnprintf-s-l-vsnwprintf-s-vsnwprintf-s-l) does not conform to the C standard. Microsoft's version has an extra parameter [size_t](/c/types/size_t/) count in third position that contains the maximum amount of characters to be written, not including the null terminator. This parameter is possibly distinct from the buffer size provided via the parameter [size_t](/c/types/size_t/) bufsz.

## Example
```cpp
#include <stdarg.h>
#include <stdio.h>
#include <time.h>
 
void debug_log(const char* fmt, ...)
{
    struct timespec ts;
    timespec_get(&ts, TIME_UTC);
    char time_buf[100];
    size_t rc = strftime(time_buf, sizeof time_buf, "%D %T", gmtime(&ts.tv_sec));
    snprintf(time_buf + rc, sizeof time_buf - rc, ".%06ld UTC", ts.tv_nsec / 1000);
 
    va_list args1;
    va_start(args1, fmt);
    va_list args2;
    va_copy(args2, args1);
    char buf[1+vsnprintf(NULL, 0, fmt, args1)];
    va_end(args1);
    vsnprintf(buf, sizeof buf, fmt, args2);
    va_end(args2);
 
    printf("%s [debug]: %s\n", time_buf, buf);
}
 
int main(void)
{
    debug_log("Logging, %d, %d, %d", 1, 2, 3);
}
```

## See also
- [vwprintfvfwprintfvswprintfvwprintf_svfwprintf_svswprintf_svsnwprintf_s](/c/io/vfwprintf/)
- [stdout](/c/io/std_streams/)
- [printffprintfsprintfsnprintfprintf_sfprintf_ssprintf_ssnprintf_s](/c/io/fprintf/)
- [stdout](/c/io/std_streams/)
- [vscanfvfscanfvsscanfvscanf_svfscanf_svsscanf_s](/c/io/vfscanf/)
- [stdin](/c/io/std_streams/)
- [C++ documentation](/cpp/io/c/vfprintf/)
