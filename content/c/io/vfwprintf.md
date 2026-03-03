---
title: "vwprintf, vfwprintf, vswprintf, vwprintf_s, vfwprintf_s, vswprintf_s, vsnwprintf_s"
source_path: "c/io/vfwprintf"
header: "<wchar.h>"
category: "c"
---

Loads the data from locations, defined by vlist, converts them to wide string equivalents and writes the results to a variety of sinks.

## Declarations
```cpp
int vwprintf( const wchar_t* format, va_list vlist );
```
_(since C95) (until C99)_

```cpp
int vwprintf( const wchar_t* restrict format, va_list vlist );
```
_(since C99)_

```cpp
int vfwprintf( FILE* stream, const wchar_t* format, va_list vlist );
```
_(since C95) (until C99)_

```cpp
int vfwprintf( FILE* restrict stream,
const wchar_t* restrict format, va_list vlist );
```
_(since C99)_

```cpp
int vswprintf( wchar_t* buffer, size_t bufsz,
const wchar_t* format, va_list vlist );
```
_(since C95) (until C99)_

```cpp
int vswprintf( wchar_t* restrict buffer, size_t bufsz,
const wchar_t* restrict format, va_list vlist );
```
_(since C99)_

```cpp
int vwprintf_s( const wchar_t* restrict format, va_list vlist);
```
_(since C11)_

```cpp
int vfwprintf_s( FILE* restrict stream,
const wchar_t* restrict format, va_list vlist);
```
_(since C11)_

```cpp
int vswprintf_s( wchar_t* restrict buffer, rsize_t bufsz,
const wchar_t* restrict format, va_list vlist);
```
_(since C11)_

```cpp
int vsnwprintf_s( wchar_t* restrict buffer, rsize_t bufsz,
const wchar_t* restrict format, va_list vlist);
```
_(since C11)_

## Parameters
- `stream`: output wide stream to write to
- `buffer`: pointer to a wide string to write to
- `bufsz`: maximum number of wide characters to write
- `format`: pointer to a null-terminated wide string specifying how to interpret the data
- `vlist`: variable argument list containing the data to print.

## Notes
All these functions invoke va_arg at least once, the value of arg is indeterminate after the return. These functions to not invoke va_end, and it must be done by the caller.

While narrow strings provide [vsnprintf](/c/io/vfprintf/), which makes it possible to determine the required output buffer size, there is no equivalent for wide strings (until C11's vsnwprintf_s), and in order to determine the buffer size, the program may need to call vswprintf, check the result value, and reallocate a larger buffer, trying again until successful.

vsnwprintf_s, unlike vswprintf_s, will truncate the result to fit within the array pointed to by buffer, even though truncation is treated as an error by most bounds-checked functions.

## Example
```cpp
#include <locale.h>
#include <stdarg.h>
#include <stddef.h>
#include <stdio.h>
#include <time.h>
#include <wchar.h>
 
void debug_wlog(const wchar_t* fmt, ...)
{
    struct timespec ts;
    timespec_get(&ts, TIME_UTC);
    char time_buf[100];
    size_t rc = strftime(time_buf, sizeof time_buf, "%D %T", gmtime(&ts.tv_sec));
    snprintf(time_buf + rc, sizeof time_buf - rc, ".%06ld UTC", ts.tv_nsec / 1000);
 
    va_list args;
    va_start(args, fmt);
    wchar_t buf[1024];
    int rc2 = vswprintf(buf, sizeof buf / sizeof *buf, fmt, args);
    va_end(args);
 
    if(rc2 > 0)
       wprintf(L"%s [debug]: %ls\n", time_buf, buf);
    else
       wprintf(L"%s [debug]: (string too long)\n", time_buf);
}
 
int main(void)
{
    setlocale(LC_ALL, "");
    debug_wlog(L"Logging, %d, %d, %d", 1, 2, 3);
}
```

## See also
- [vprintfvfprintfvsprintfvsnprintfvprintf_svfprintf_svsprintf_svsnprintf_s](/c/io/vfprintf/)
- [stdout](/c/io/std_streams/)
- [wprintffwprintfswprintfwprintf_sfwprintf_sswprintf_ssnwprintf_s](/c/io/fwprintf/)
- [stdout](/c/io/std_streams/)
- [C++ documentation](/cpp/io/c/vfwprintf/)
